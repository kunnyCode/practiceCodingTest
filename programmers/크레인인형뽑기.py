board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]

width = len(board) 
disappear = 0
temp = []
for i in range(width):
	for j in range(len(board[i])):
		temp.append(board[i][j])
		# print(board[i][j], j, moves[j])
# numpy.shape
# print(temp)

result = []
for i in moves:
	for j in range(len(temp)):
		if j % width == i-1 :
			# result.append(temp[j])
			if temp[j] != 0:
				result.append(temp[j])
				temp[j] = 0
				break
	
	if len(result) >= 2 and result[-1] == result[-2]:
		result.pop()
		result.pop()
		disappear = disappear + 2


print(result)
print(disappear)

