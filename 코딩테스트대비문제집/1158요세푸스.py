N,K = map(int,input().split())
arr = [i for i in range(1,N+1)]    # 맨 처음에 원에 앉아있는 사람들

answer = []   # 제거된 사람들을 넣을 배열
num = 0  # 제거될 사람의 인덱스 번호

for t in range(N):
	num += K-1
	# print(num)

	if num >= len(arr):   # 한바퀴를 돌고 그다음으로 돌아올때를 대비해 값을 나머지로 바꿈  
			num = num%len(arr)

	answer.append(str(arr.pop(num)))

# print(answer)
print("<",", ".join(answer)[:],">", sep='')










# n , t =(input().split())
# n = int(n)
# t = int(t)

# nOfAr = []
# result = []
# cnt = 1
# num = 0

# for i in range(1, n + 1):
# 	nOfAr.append(i)

# # print(nOfAr)

# while len(result) < n:
# 	7 
# 	if nOfAr[num] != 0:
# 		if cnt % t == 0:
# 			if nOfAr[num] != 0:
# 				result.append(nOfAr[num])
# 				nOfAr[num] = 0
# 				cnt = cnt + 1

# 		else:
# 			cnt = cnt + 1


# 	num = num + 1
# 	if num > n - 1:
# 		num = 0

# 	# print(cnt)
# 	# print(num)
# 	# print(nOfAr)

# print("<", end="")
# for i in range(len(result)):
# 	if i == len(result) -1:
# 		print("%d" % result[i], end="")
# 	else:
# 		print("%d, " % result[i], end="")


# print(">")
