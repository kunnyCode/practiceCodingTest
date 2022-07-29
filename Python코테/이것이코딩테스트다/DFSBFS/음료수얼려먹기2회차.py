h, w = map(int, input().split())

bracket = []
for i in range(h):
	bracket.append(list(map(int, input())))

# print(bracket)


# dx = [1, -1, 0, 0]
# dy = [0, 0, 1, -1]

def dfs(y, x):
	if y <= -1 or y >= h or x <0 or x >= w:
		return False
	
	if bracket[y][x] == 0:
		bracket[y][x] = 1
		dfs(y-1, x)
		dfs(y+1, x)
		dfs(y, x-1)
		dfs(y, x+1)
		return True
	
	return False
	




count = 0
for i in range(h):
	for j in range(w):
		if dfs(i, j) == True:
			count = count + 1

print(count)