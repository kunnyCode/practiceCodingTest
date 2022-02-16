from xml.dom.minidom import TypeInfo


# 문자열, 배열 입력 받기
# https://johnyejin.tistory.com/62

n, x = map(int, input().split())
arr = list(map(int, input().split()))


# print(type(arr))
# print(arr)

newArr = []

for i in arr:
	if x > i:
		newArr.append(i)

for i in newArr:
	print(i, end=" ")

# print(n, x, arr)