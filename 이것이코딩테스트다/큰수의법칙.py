# n, m, k = map(int, input().split())
# ar = list(map(int, input().split()))
# used = []
# sumNum = 0
# # print(n, m, k, ar)

# num = 0
# while num < m:
# 	ar.remove(max(ar))
# 	if k > m - num:
# 		sumNum = sumNum + max(ar) * (m - num)
# 		num = num + (m - num)

# 	else:
# 		sumNum = sumNum + (max(ar) * k)
# 		num = num + k







#sort()
#수열에서 반복 찾기
n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
first = data[n - 1]
second = data[n - 2]

count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first
result += (m - count) * second

print(result)
