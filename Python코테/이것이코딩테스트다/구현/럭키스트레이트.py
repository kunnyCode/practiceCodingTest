num = input()

mid = len(num) // 2

left = num[:mid]
right = num[mid:]

leftSum = 0
rightSum = 0

for i in range(len(left)):
	leftSum += int(left[i])
	rightSum += int(right[i])

if leftSum == rightSum:
	print("LUCKY")
else:
	print("READY")