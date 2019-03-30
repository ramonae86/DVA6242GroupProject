import pandas as pd
from math import cos, asin, sqrt

subway_data = pd.read_csv("../data/CleanSubway.csv")

def get_distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295     #Pi/180
    a = 0.5 - cos((lat2 - lat1) * p)/2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lon2 - lon1) * p)) / 2
    return 12742 * asin(sqrt(a)) #2*R*asin...

def get_subway_weight(distance):
    if distance >= 3:
        return 0
    else:
        return (-1/3 * distance + 1)


def get_score(coordinate):
    score = 0
    for index, row in subway_data.iterrows():
        distance = get_distance(coordinate[0], coordinate[1], row['latitude'], row['longitude'])
        weight = get_subway_weight(distance)# * row['stop_weight']
        score = max(score, weight)

    return score


def main():
    coordinates = [[40.7489182, -73.9862724], [44.477, -73.212], [40.6948892, -74.0130932], [40.6786990, -73.9514607], [40.7653642, -73.9781252]]
    # coordinates = [[40.7489182, -73.9862724]]
    for coordinate in coordinates:
        print(get_score(coordinate))


if __name__ == "__main__":
    main()
