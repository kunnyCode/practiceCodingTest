# 답안예시
data = input()

#첫 번째 문자를 숫자로 변경하여 대입
result = int(data[0])

for i in range(1, len(data)):
	#  두 수 중에서 하나라도 '0' 혹은 '1'인 경우, 곱하기보다는 더하가ㅣ 수행
	num = int(data[i])
	if num <= 1 or result <= 1:
		result += num
	else:
		result *= num


print(result)








# # 나의 답
# s = list(map(int, input()))

# result = 0

# for i in range(len(s)):
#     if i == 0:
#         result = s[i]
#         continue
    
#     if result == 0 or s[i] == 0:
#         result = result + s[i]
#     else:
#         result = result * s[i]
        

# print(result)
