length = int(input())
# cnt = 0


ar = list(map(int, input().split()))
# while cnt < length:
# 	ar.append(int(input()))
# 	cnt = cnt + 1

m = max(ar)
print(m)
ar.remove(m)

result = []
for i in ar:
	result.append(i/m * 100)
result.append(m)

print(result)
sum = 0
for j in result:
	sum += j

print(sum/len(result))

