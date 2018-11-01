
from datetime import datetime

def add_five(input):
	return input + 5;

def my_max(input):
	a = None
	for cell in input:
		if(a == None):
			a = cell
		else:
			if(cell > a):
				a = cell
	return a

def my_min(input):
	b = None
	for cell in input:
		if(b == None):
			b = cell
		else:
			if(cell < b):
				b = cell
	return b

def has_string(full_list, lookup):
	new_list = []
	for cell in full_list:
		if(lookup in cell):
			new_list.append(cell)
	return new_list

def to_date(dt):
	return datetime.strptime(dt, "%Y-%m-%d").date()


def date_diff(dt1, dt2):
	time1 = datetime.strptime(dt1, "%Y-%m-%d").date()
	time2 = datetime.strptime(dt2, "%Y-%m-%d").date()
	return abs((time1-time2).days)

def contains(list, value):
	for cell in list:
		if(cell == value):
			return True
		else: 
			return False

def add_contents(list):
	value = 0
	for cell in list:
		value += cell
	return value

def lookup(mine, figure):
	if(figure in mine):
		return mine[figure] + " mine"
	else:
		return " mine"
