def findscore(filename):
	with open(filename, 'r') as data_file:
	    json_data = data_file.read()

	data = json.loads(json_data)
	# print(len(data))
	# print(data[1]['rating'])
	# print(data[1]['distance'])
	sum_rating=0
	sum_distance=0

	a=len(data)
	print(a)
	for i in range(a):
		sum_rating = sum_rating+float(data[1]['rating'])
		sum_distance = sum_distance+float(data[1]['distance'])

	avg_rating = sum_rating/a
	avg_distance = sum_distance/a
	score = a*avg_rating/avg_distance
	return(score)
	# print(a)
	# print(avg_distance)
	# print(avg_rating)
	# print(score)



import json
num_apartments = 3
num = num_apartments+1
scores=[]
for n in range(1,num):
	scores.append(findscore("test%d.txt"%n))
print(scores)
scores_max = max(scores)
scores_normalized = []
for i in range(num_apartments):
	score_n = scores[i]/scores_max*1
	score_n_1 = round(score_n,3)
	scores_normalized.append(score_n_1)
print(scores_normalized)
