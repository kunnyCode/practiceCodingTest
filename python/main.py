# def finite_generator(): 
# 	count = 0
# 	for i in range(10):
# 		count += 1
# 		yield count
# gen = finite_generator() 
# next(gen)
# next(gen)
# next(gen)


# from operator import lshift


# lst = [[1, 4, 6], [2, 4, 6], [10, 4, 9], [-1, 3, 8]]

# answer = max(map(max, lst))
# # answer = max(map(lambda x: max(x), lst))
# print(answer)


n = int(input())
m = int(input())
ar = list(map(int, input().split()))
plma = input()



point = [0] * n
# print(initPoint)
result = []
for i in range(m):
    
    if plma[i] == "+":
        point[ar[i] - 1] += 1
        print(point)
        result.append(point)
    else:
        point[ar[i] - 1] -= 1
        print(point)
        result.append(point)
    print(result)
    

print(point)