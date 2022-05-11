from itertools import combinations

n, m = map(int, input().split())
chic, house = [], []


for i in range(n):
	data = list(map(int, input().split()))
	for j in range(n):
		if data[j] == 1:
			house.append((i, j))
		elif data[j] == 2:
			chic.append((i, j))


candidates = list(combinations(chic, m))
print(candidates)


def get_sum(candidate):
	sum = 0
	for hx, hy in house:
		temp = 1e9
		for cx, cy in candidate:
			temp = min(temp, abs(hx-cx) + abs(hy - cy))
		sum += temp
	return sum
		





result = 1e9
for candidate in candidates:
	
	result = min(result, get_sum(candidate))


print(result)