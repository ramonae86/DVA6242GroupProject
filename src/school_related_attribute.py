import csv
def school_dict_builder(filename):
	data_file = open(filename, 'r')
	data_reader = csv.reader(data_file, dialect=csv.excel_tab)	

	my_dict = {}
	for row in data_reader:
		postcode = row[2]
		if postcode in my_dict:
			my_dict[postcode] += 1
		else:
			my_dict[postcode] = 1
	return my_dict


def getCntSchool(postcode):
	sum = prek_dict[postcode] + mid_dict[postcode] + high_dict[postcode]
	print (sum)

def school_rank_builder(filename):
	data_file = open(filename, 'r')
	data_reader = csv.reader(data_file, dialect=csv.excel_tab)	

	my_rank = {}
	for row in data_reader:
		school_name = row[0]
		my_rank[school_name] = row[5]
	return my_rank

def getSchoolRank(school_name):
	school_rank = my_rank[school_name]

#the highest ranking for high school and middle school are both 1.00. No need to perform additional normalization.

def main():
	prek_dict = school_dict_builder('../data/prek')
	mid_dict = school_dict_builder('../data/mid_school')
	high_dict = school_dict_builder('../data/hi_School')

if __name__ == "__main__":
	main()
