spam = ['apples','bananas','tofu','cats']

def string(list):
	newstring = ""
	for i in range(len(list)-1):
		newstring += str(list[i]) + ", "
	newstring += "and " + str(list[-1])
	print(newstring)

string(spam)
