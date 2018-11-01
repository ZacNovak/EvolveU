tableData = [['apples', 'oranges', 'cherries', 'banana'],
         ['Alice', 'Bob', 'Carol', 'David'],
         ['dogs', 'cats', 'moose', 'goose']]

def printTable(List):
    colwidths = [0] * len(List)

    for i in range (len(List)):
        for j in range (len(List[i])):
            if colwidths[i] < len(List[i][j]):
                colwidths[i] = len(List[i][j])
    print(colwidths)

    for k in range (len(List[0])):
        for l in range(len(List)):
            print(List[l][k].rjust(colwidths[l]+ 1), end='')
        print()

printTable(tableData)