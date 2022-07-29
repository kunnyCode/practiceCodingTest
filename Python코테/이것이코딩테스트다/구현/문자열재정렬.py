import heapq

string = []
integer = 0

s = input()

for i in s:
    if 48 <= ord(i) <= 57:
        integer += int(i)
    if 65 <= ord(i) <= 90:
        heapq.heappush(string, i)
    else:
        pass


newString = []
for i in range(len(string)):
    a= heapq.heappop(string)
    newString.append(a)

result = "".join(newString) + str(integer)



print(result)