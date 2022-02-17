
#주사위 세개
# a, b, c = map(int, input().split())


a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
ar = [a, b, c]

# if a == b == c:
if a==b and b==c:
	print(10000 + a*1000)
elif a==b:
	print(1000 + a*100)
elif b==c:
	print(1000 + b*100)
elif c==a:
	print(1000 + c*100)
else:
	print((max(ar)) * 100)
	# print(100 * max(a,b,c))