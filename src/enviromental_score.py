import pandas as pd
import numpy as np
import math


def distance(origin, destination):
    """
    Calculate the Haversine distance.

    Parameters
    ----------
    origin : tuple of float
        (lat, long)
    destination : tuple of float
        (lat, long)

    Returns
    -------
    distance_in_km : float

    Examples
    --------
    origin = (48.1372, 11.5756)  # Munich
    destination = (52.5186, 13.4083)  # Berlin
    round(distance(origin, destination), 1)
     504.2
    """
    lat1, lon1 = origin
    lat2, lon2 = destination
    radius = 6371  # km

    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (math.sin(dlat / 2) * math.sin(dlat / 2) +
         math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
         math.sin(dlon / 2) * math.sin(dlon / 2))
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    d = radius * c * 0.621371

    return d



def environmental_score(loc_list, di):
    """
        Calculate the environmental score.

        Parameters
        ----------
        loc_list : list of (latitude, longitude)
            (lat, long)
        di : float
            searching distance

        Returns
        -------
        score : list of float between 0 to 1
    """

    #import data file
    fields_tree = ['Latitude', 'longitude']
    fields_rat = ['Latitude', 'Longitude']

    df_tree = pd.read_csv('tree_clean.csv', skipinitialspace = True, usecols = fields_tree)
    df_rat = pd.read_csv('rat_sighting_clean.csv', skipinitialspace = True, usecols = fields_rat)

    matrix_tree = df_tree.values
    matrix_rat = df_rat.values

    def count(la, lo, matrix):
        index = matrix.shape[0]
        count = 0

        for i in range(0, index, 1):
            # print(i)
            origin = (la, lo)
            destination = (matrix[i][0], matrix[i][1])
            dist = distance(origin, destination)
            if dist <= di:
                count += 1
        return count


    list_tree_count = []
    list_rat_count = []

    for item in loc_list:
        la, lo = item[0], item[1]
        print(la, lo)
        list_tree_count.append(count(la, lo, matrix_tree))
        list_rat_count.append(count(la, lo, matrix_rat))

    print(list_tree_count)
    print(list_rat_count)

    tree_max = max(list_tree_count)
    rat_max = max(list_rat_count)

    score = []
    for i in range(len(list_tree_count)):
        temp = 0.5 * list_tree_count[i] / tree_max + 0.5 * list_rat_count[i] / rat_max
        score.append(temp)

    return score



location_list = [(40.77004563, -73.98494997), (40.76313613, -73.96077693), (40.639637, -73.95696074)]

score = environmental_score(loc_list = location_list, di = 5)
print(score)






