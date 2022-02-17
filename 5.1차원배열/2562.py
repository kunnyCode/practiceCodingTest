


ar = []
cnt = 0


while cnt < 9:
		a = int(input())
		ar.append(a)
		cnt = cnt + 1


result = max(ar)

print(result)
print(ar.index(result)+1) #배열에서 원하는 값 위치 찾기

