num = input()

result = int(num[0])

for i in range(1, len(num)):
	j = int(num[i])
	if j <= 1 or result <= 1:
		result += j
	else:
		result *= j

print(result)









# nums = input()

# result = int(nums[0])

# for i in range(1, len(nums)):
# 	j = int(nums[i])
# 	if j <= 1 or result <= 1:
# 		result += j
# 	else:
# 		result *= j
	

# print(result)

# # 기둥 3개를 연구소에 놓는 경우의 수를 모두 해본다.
# # 기둥을 놓고 바이러스를 퍼뜨려 본다.
# # 안전영역이 제일 많은 경우의 수를 답으로 제출한다.

# n, m = map(int, input().split())

# data = []
# temp = [[0] * m for _ in range(n)]
# result = 0

# # 지도 정보 받아서 data에 2차원 배열로 저장하기
# for i in range(n):
# 	data.append(list(map(int, input().split())))


# dx = [-1, 0 ,1 ,0]
# dy = [0, 1, 0, -1]

# def virus(x, y):
# 	for i in range(4):
# 		nx = x + dx[i]
# 		ny = y + dy[i]

# 		if nx >= 0 and nx < n and ny >= 0 and ny < m:
# 			if temp[nx][ny] == 0:
# 				temp[nx][ny] = 2
# 				virus(nx, ny)

# def get_score():
# 	score = 0
# 	for i in range(n):
# 		for j in range(m):
# 			if temp[i][j] == 0:
# 				score += 1
# 	return score

# # 기둥 3개를 놓는 경우의 수를 구한다
# # 각 경우의 수 마다 virus함수를 통해 바이러스를 퍼뜨려본다.
# # get_score함수로 안전 영역을 체크한다 
# def dfs(count):
# 	global result
# 	# 기둥을 3개 세웠으면 이제 바이러스를 퍼뜨려봐야 한다.
# 	if count == 3:
# 		# data지도를 temp지도에 복사해서 비교 -> 아래서 순회하고 있는 정보를 해칠 수 있어서
# 		for i in range(n):
# 			for j in range(m):
# 				temp[i][j] = data[i][j]
		
# 		for i in range(n):
# 			for j in range(m):
# 				if temp[i][j] == 2:
# 					virus(i, j)

# 		result = max(result, get_score())
# 		return




# 	# data 지도를 순회하면서 0인 경우에 기둥을 놓아본다.
# 	for i in range(n):
# 		for j in range(m):
# 			if data[i][j] == 0:
# 				data[i][j] = 1
# 				count += 1
# 				dfs(count)
# 				data[i][j] = 0
# 				count -= 1

# dfs(0)
# print(result)