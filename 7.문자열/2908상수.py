num = input().split()

ar = []
for i in num:
	newList = list(i)
	newList.reverse() #새로 변수에 담아주지 않는다.
	newStr = "".join(newList)
	ar.append(newStr)


# print(ar)
print(max(ar))

# reverseNum = []
# for i in num:
# 	reverse = ''
# 	for j in range(len(i)):
# 		reverse = j + reverse
# 	reverseNum.append(reverse)

# print(reverseNum)