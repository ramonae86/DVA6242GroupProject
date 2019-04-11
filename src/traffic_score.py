import pandas as pd
from math import cos, asin, sqrt

effective_radius = 3
bus_data = pd.read_csv("../data/CleanBus.csv")
subway_data = pd.read_csv("../data/CleanSubway.csv")

def get_distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295     #Pi/180
    a = 0.5 - cos((lat2 - lat1) * p)/2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lon2 - lon1) * p)) / 2
    return 12742 * asin(sqrt(a)) #2*R*asin...


def get_weight(distance):
    if distance >= effective_radius:
        return 0
    else:
        return (-1/effective_radius * distance + 1)


def get_bus_score(coordinate):
    score = 0
    for index, row in bus_data.iterrows():
        distance = get_distance(coordinate[0], coordinate[1], row['latitude'], row['longitude'])
        weight = get_weight(distance)
        score = max(score, weight)
    return score


def get_subway_score(coordinate):
    score = 0
    for index, row in subway_data.iterrows():
        distance = get_distance(coordinate[0], coordinate[1], row['latitude'], row['longitude'])
        weight = get_weight(distance) * row['stop_weight']/10
        score = max(score, weight)
    return score


def get_traffic_score(coordinates):
    score = []
    for coordinate in coordinates:
        single_score = 0.5 * get_bus_score(coordinate) + 0.5 * get_subway_score(coordinate)
        score.append(single_score)
    result = [i*(1/max(score)) for i in score]
    return result


def main():
    coordinates = [(40.688453, -73.986503), (40.748760, -74.005323), (40.806264, -73.950991)]
    # coordinates = [[40.7489182, -73.9862724]]
    print(get_traffic_score(coordinates))


if __name__ == "__main__":
    main()
