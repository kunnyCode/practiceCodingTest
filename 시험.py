# class MyClass:
#     #1 txt를 인자로 받는 생성자를 정의해 주세요.
#     def init(self, txt):

#         #2 var라는 인스턴스 멤버를 선언하고, 인자로 받은 `txt` 값을 넣어주세요.
#         var = txt
#         #3 'MyClass 인스턴스 객체가 생성되었습니다.'라는 문구를 출력하세요.
#         print('MyClass 인스턴스 객체가 생성되었습니다.')

# # 실습 결과를 출력하기 위한 코드입니다. 수정하지 마세요.
# obj = MyClass('안녕하세요')    # 'MyClass 인스턴스 객체가 생성되었습니다'가 출력됩니다.
# print(obj.var)    # '안녕하세요'가 출력됩니다.
    



# participant = ["marina", "josipa", "nikola", "vinko", "filipa", "josipa" ,"df"]
# participant2 = {'marina': 1, 'josipa': 2, 'nikola': 1, 'vinko': 1, 'filipa': 1, 'df': 1}

# for i in participant:
# 	print(i)

# print('----------------------------')

# for i in participant2:
# 	print(i)

# ar = [['OOOOXOOOOXOOOOX',33,44,55]]
# ar[0] = 0
# print(ar[0])

# ar = [2, 3, 4, 5] 숫자는 join이 안먹힘
# ar = ["2", "3", "4", "5"]
# print(", ".join(ar))



# ar1 = set([1,2,3,4])
# ar2 = set([5,2,7,8])

# print(ar1 - ar2)
# print(ar1 & ar2)
# print(ar1 | ar2)


# a = "dffff"
# b = list(a)
# print(b)


# a = "dfsfd"
# a.replace("f", "5")
# print(a)

# a ="StrinG"
# b = a.lower()
# print(b)

# print(0 % 1)

# import sys

# def input():

#     return sys.stdin.readline().rstrip()
    
# N = int(input())
# inorder = list(map(int, input().split()))
# postorder = list(map(int, input().split()))
# inorder_idx = {val : idx for idx, val in enumerate(inorder)}
# # print(inorder_idx)



# def find_preorder(in_s, in_e, po_s, po_e):
#     if in_s > in_e or po_s > po_e: return
#     if in_s == in_e and po_s == po_e:
#         print(inorder[in_s], end = ' ')

#         return
    
#     parent = postorder[po_e]
#     idx = inorder_idx[parent]
#     cnt = in_e - idx
    
#     find_preorder(idx, idx, po_e, po_e)
#     find_preorder(in_s, idx - 1, po_s, po_e - in_e + idx - 1)
#     find_preorder(idx + 1, in_e, po_e - in_e + idx, po_e - 1)
    
# find_preorder(0, N - 1, 0, N - 1)


x = 1
x += 1
print(x)










import sys

def input():
    return sys.stdin.readline().rstrip()

S = input()

for i in range(len(S)):
    tmp_str = S[0:i]


    tmp = S + tmp_str[::-1]
    
    if tmp == tmp[::-1]:
        print(i)
        exit()










import sys

def input():
    return sys.stdin.readline().rstrip()
    
N, M, K = map(int, input().split())
data = []


for i in range(N):
    x, y = map(int, input().split())


    data.append([y, x])
    
data.sort()
want_score = N * K
present_score = 0
answer = 0




for node in data:
    present_score += node[1]

for node in data:
    while want_score > present_score and node[1] != M:
        answer += node[0]
        node[1] += 1


        present_score += 1
        
print(answer)