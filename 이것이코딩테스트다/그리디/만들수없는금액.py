n = int(input())
data = list(map(int, input().split()))
data.sort()

target = 1
for x in data:
    # 만들 수 없는 금액을 찾았을 때 반복 종료
    if target < x:
        break
    target += x

# 만들 수 없는 금액 출력
print(target)



# length = int(input())
# nums = list(map(int, input().split()))

# nums.sort(reverse=True)

# count = 1

# while True:
#     cal = count
#     for i in nums:
#         if cal - i < 0:
#             continue
#         elif cal - i == 0:
#             cal = cal - i
#             break
#         else:
#             cal = cal - i
    
#     if cal > 0:
#         print(count)
#         break
    
#     count += 1