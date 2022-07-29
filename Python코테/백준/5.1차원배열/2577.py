a = int(input())
b = int(input())
c = int(input())

sum = a * b * c
sum = str(sum) # int형은 반복문을 돌릴 수 없음

numbers = {'0':0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0}
for i in sum:
	numbers[i]+= 1

for j in numbers.values(): #딕셔너리의 value값만 출력
	print(j)