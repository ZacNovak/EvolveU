def gradeTranslate(grade):
	#return 0
	if(grade <= 49):
		return 'F'
	elif(grade <= 59):
		return 'C'
	elif(grade <= 79):
		return 'B'
	else:
		return 'A'