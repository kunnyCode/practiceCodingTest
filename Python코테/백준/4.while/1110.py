origin = int(input())

num = origin
k = 0

while True:
	k = k + 1
	ten = num // 10
	newten = num %  10
	newone = (ten + newten) % 10
	result = newten*10 + newone

	if result == origin:
		break;
	else:
	
		num = result

print(k)




