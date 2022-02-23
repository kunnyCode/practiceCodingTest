# num = 0
# res = {}

# while num <= 10000:
# 	num = num + 1
# 	# if num not in res.keys():
# 	strNum = str(num)
# 	sum = 0
# 	for i in range(len(strNum)):
# 		sum = sum + int(strNum[i])
# 	sum = sum + num
# 	res[sum] = True


# print(list(res.keys()))

natural_num = set(range(1, 10001))
generate_num = set()

for i in range(1, 10001):
	for j in str(i):
		i += int(j)
	generate_num.add(i)

self_num = sorted(natural_num - generate_num)
for i in self_num:
	print(i)