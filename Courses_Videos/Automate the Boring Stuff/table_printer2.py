tableData = [['apples', 'oranges', 'cherries', 'banana'],
         ['Alice', 'Bob', 'Carol', 'David'],
         ['dogs', 'cats', 'moose', 'goose']]

def tablePrinter(List):

	colWidths = [0] * len(List)

	for i in range (len(List)):
		for j in range(len(List[i])):
			if colWidths[i] < len(List[i][j]):
				colWidths[i] = len(List[i][j])
	print(colWidths)

	for k in range (len(List[0])):
		for l in range(len(List)):
			print(List[l][k].rjust(colWidths[l]), end=" ")
		print()

tablePrinter(tableData)