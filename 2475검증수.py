num = input().split()

invalidNum = 0
for i in num:
	i = int(i)
	invalidNum += (i * i)

invalidNum = invalidNum % 10
print(invalidNum)