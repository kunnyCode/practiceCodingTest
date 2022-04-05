# 답지 풀이

# 현재 나이트의 위치 입력받기
input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])) - int(ord('a')) + 1

# 나이트가 이동할 수 있는 8가지 방향 정의
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2),(-1, 2), (-2, 1),]


# 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
result = 0
for step in steps:
	#이동하고자 하는 위치 확인
	next_row = row + step[0]
	next_column = column + step[1]

	#해당 위치로 이동이 가능하다면 카운트 증가
	if 1 <= next_row <= 8 and 1 <= next_column <=8:
		result += 1
	
print(result)





























# 내가 푼 것

# al, num = list(input())

# row = ['a','b','c','d','e','f','g','h']
# col = [1,2,3,4,5,6,7,8]

# def makePoint(al, num):
#     lst = []
    
#     al = row.index(al) + 1
#     num = col.index(int(num)) + 1
    
#     lst.append((al + 2, num + 1))
#     lst.append((al + 2, num - 1))
#     lst.append((al - 2, num + 1))
#     lst.append((al - 2, num - 1))
#     lst.append((al + 1, num + 2))
#     lst.append((al + 1, num - 2))
#     lst.append((al - 1, num + 2))
#     lst.append((al - 1, num - 2))
    
#     return(lst)


# lst = makePoint(al, num)
# count = 0
# for tu1, tu2 in lst:
#     if tu1 < 1 or tu2 < 1:
#         continue
#     else:
#         count +=1

# print(count)