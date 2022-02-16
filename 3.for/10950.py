# list(map(함수, 리스트))
# tuple(map(함수, 튜플))


# t = int(input())

# for _ in range(t):
# 	a, b = map(int, input().split())
# 	print(a + b)



t = int(input())
count = 0
while count < t:
	a,b = input().split();

	a = int(a);
	b = int(b);
	count = count + 1

	print(a+b)