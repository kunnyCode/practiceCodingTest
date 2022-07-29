c = int(input())
cnt = 0
ar = []
while cnt < c:
	li = list(map(int, input().split()))
	ar.append(li)
	cnt = cnt + 1

# print(ar)
# avgList = []
for i in range(c):
	sum = 0
	for j in range(len(ar[i]) - 1):
		sum = sum + ar[i][j+1]

	avg = sum/ar[i][0]


	winner = 0
	for k in range(len(ar[i]) - 1):
		if avg < ar[i][k+1]:
			winner = winner + 1
			

	result = winner/ar[i][0] * 100
	# print(round(result, 3))
	print(f"{result:.3f}" + "%")


	# print(f"{1.23456:.2f}")