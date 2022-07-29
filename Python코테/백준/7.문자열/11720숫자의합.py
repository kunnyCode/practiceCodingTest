length = int(input())
num = list(map(int,list(input())))
# print(num)
sum = 0
for i in range(length):
	sum = sum + num[i]

print(sum)