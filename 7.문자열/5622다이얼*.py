# inputChar = list(input())
# time = 0
# a" or i == "b" or i == "c":
# 		ti
# for i in inputChar:
# 	if i == "me

dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
inputChar = input()
time = 0

for i in range(len(inputChar)):
	for j in dial:
		if inputChar[i] in j:
			time += dial.index(j) + 3

print(time)
