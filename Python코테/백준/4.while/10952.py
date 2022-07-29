# A+B - 5

# ar = []
# while True:
# 	a, b = map(int, input().split())
	
# 	if a == b == 0:
# 		break;
# 	else:
# 		temp = [a, b]
# 		ar.append(temp)

# # print(ar)

# for i in ar:
# 	print(i[0] + i[1])


ar = []
while True:
	temp = list(map(int, input().split()))
	if temp[0] == temp[1] == 0:
		break;
	else:
		ar.append(temp)
	


for i in ar:
	print(i[0] + i[1])



# 인터넷 풀이
# while True:
#     a, b = map(int, input().split())
#     if a == 0 and b == 0:
#         break
#     print(a+b)