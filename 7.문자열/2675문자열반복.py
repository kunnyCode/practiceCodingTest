t = int(input())

for i in range(t):
	r, s = input().split()
	r = int(r)
	s = list(s)
	# print(r, s)

	ar = []
	for j in s:
		ar.append(j * r)

	print("".join(ar))