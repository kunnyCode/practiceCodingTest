from inspect import ArgInfo


ar = []
cnt = 0

while cnt < 10:
	ar.append(int(input()))
	cnt = cnt + 1

# print(ar)
ar2 = []
for i in ar:
	temp = i % 42
	if temp in ar2:
		continue
	else:
		ar2.append(temp)

# print(ar2)
print(len(ar2))


