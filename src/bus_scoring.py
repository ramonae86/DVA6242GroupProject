import pandas as pd
from math import cos, asin, sqrt

effective_radius = 3

def get_distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295     #Pi/180
    a = 0.5 - cos((lat2 - lat1) * p)/2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lon2 - lon1) * p)) / 2
    return 12742 * asin(sqrt(a)) #2*R*asin...


def get_bus_weight(distance):
    if distance >= effective_radius:
        return 0
    else:
        return (-1/effective_radius * distance + 1)


def get_score(coordinate):
    bus_data = pd.read_csv("../data/CleanBus.csv")
    score = 0

    for index, row in bus_data.iterrows():
        distance = get_distance(coordinate[0], coordinate[1], row['latitude'], row['longitude'])
        weight = get_bus_weight(distance)
        score = max(score, weight)

    # subway_data = pd.read_csv("../data/CleanSubway.csv")
    # for index, row in subway_data.iterrows():
    #     distance = get_distance(coordinate[0], coordinate[1], row['latitude'], row['longitude'])
    #     weight = get_subway_weight(distance) * row['stop_weight']
    #     sum += weight

    return score


def main():
    coordinates = [[40.7489182, -73.9862724], [44.477, -73.212], [40.6948892, -74.0130932], [40.6786990, -73.9514607], [40.7653642, -73.9781252]]
    # coordinates = [[40.7489182, -73.9862724]]
    for coordinate in coordinates:
        print(get_score(coordinate))


if __name__ == "__main__":
    main()
