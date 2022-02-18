length = int(input())
cnt = 0
ar = []
# ar = list(input().split())
while cnt < length:
	ar.append(input())
	cnt += 1


# print(ar)
temp = 0
score = 0

for i in range(len(ar)):
	for j in range(len(ar[i])):
		if ar[i][j] == "O":
			temp += 1
			score += temp
		else:
			temp = 0
	print(score)
	temp = 0
	score = 0

