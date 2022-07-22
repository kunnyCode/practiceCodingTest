# # 문자열.count 사용하기
s = 'blackmask'

r1 = s.count('k')
print(f"s.count('k') : {r1}")

r2 = s.count('k', 5)
print(f"s.count('k', 5) : {r2}")

r3 = s.count('k', 4, 8)
print(f"s.count('k', 4, 8) : {r3}")

# 리스트도 count 가능
ar = [1, 2, 3, 4, 5, 5]
c = ar.count(3)
print(f"3 갯수 = {c}")
c2 = ar.count(5)
print(f"5 갯수 = {c2}")


# 문자열.find 사용하기
# 문자열에서 find 메서드를 이용해서 찾고 싶으면 문자 x를 입력하면 그 문자가 존재하는 인덱스를 반환
# 없으면 -1 반환
# 찾고 싶은 문자가 여러개라면 맨 처음 찾은 인덱스 반환

r4 = s.find('k')
print(f"s.find('k') : {r4}")

r5 = s.find('k', 5)
print(f"s.find('k', 4) : {r5}")

r6 = s.find('k', 5, 9)
print(f"s.find('k', 5, 9) : {r6}")

r7 = s.rfind('k')
print(f"s.rfind('k') : {r7}")

r8 = s.rfind('k', 4, 8)
print(f"s.rfind('k', 4, 8) : {r8}")

r9 = s.rfind('m', 6)
print(f"s.rfind('m', 6) : {r9}")



#문자열.upper()
#문자열.lower()
#문자열.swapcase()
#문자열 capitalize()
#문자열.title()
print('abd dfsf'.title())

# len은 문자열 리스트 둘 다 사용 가능
ar = [1, 2, 3, 4, 5]
string = '12345'
print(f"ar = {len(ar)}, string = {len(string)}")
# print(string[:3])
# print(string[2])

#join으로 문자열 뒤에 붙이기
string = ""
addString = "".join((string, '('))
print(f"addString = {addString}")
addString2 = "".join((addString, ')'))
print(f"addString2 = {addString2}")


string3 = 'string'
print(string3[1:-1])
string4 = ""
print(len(string4))




# from collections import deque
# queue = deque()
# # print(queue)
# # queue.popleft()
# print(queue)
# queue.append(2)
# print(queue)

# num = input()

# result = int(num[0])

# for i in range(1, len(num)):
# 	j = int(num[i])
# 	if j <= 1 or result <= 1:
# 		result += j
# 	else:
# 		result *= j

# print(result)









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