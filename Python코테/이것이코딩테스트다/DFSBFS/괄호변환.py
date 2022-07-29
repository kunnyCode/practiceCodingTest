# # "균형잡힌 괄호 문자열"의 인덱스 반환 
# def balanced_index(p):
#     count = 0 # 왼쪽 괄호의 개수
#     for i in range(len(p)):
#         if p[i] == '(':
#             count+=1
#         else:
#             count-=1
#         if count == 0:
#             return i

# # "올바른 괄호 문자열"인지 판단
# def check_proper(p):
#     count = 0 # 왼쪽 괄호의 개수
#     for i in p:
#         if i == '(':
#             count += 1
#         else:
#             if count == 0: # 쌍이 맞지 않은 경우에 False 반환
#                 return False
#             count -= 1
#     return True # 쌍이 맞는 경우에 True 반환


# def solution(p):
#     answer = ""
#     if p == '':
#         return answer
#     index = balanced_index(p)
#     u = p[:index +1]
#     v = p[index + 1:]
#     # "올바른 괄호 문자열"이면, v에 대해 함수를 수행한 결과를 붙여 반환
#     if check_proper(u):
#         answer = u + solution(v)
#     # "올바른 괄호 문자열"이 아니라면 아래의 과정을 수행
#     else:   
#         answer = '('
#         answer += solution(v)
#         answer += ')'
#         u = list(u[1:-1]) # 첫 번째와 마지막 문자를 제거
#         for i in range(len(u)):
#             if u[i] == '(':
#                 u[i] = ')'
#             else:
#                 u[i] = '('
#         answer += "".join(u)
#     return answer




def solution(p):
        
    def dfs(p):
        if p == "":
            return ""
        
        bracket_set = []
        forward = ""
        backward = ""

        for i in range(len(p)):
            bracket_set.append(p[i])
            if bracket_set.count('(') == bracket_set.count(')'):
                forward = p[:i+1]
                backward = p[i+1:]
                break

        check_right = forward
        empty = ""
        for i in range(len(check_right)//2):
            check_right = check_right.replace("()", "", 1)

        if len(check_right) == 0:
            arranged_backward = dfs(backward)
            return forward + arranged_backward
            
        else:
            arranged_backward = dfs(backward)
            empty = '('
            empty = empty + arranged_backward
            empty = empty + ')'
            
            trim_forward = forward[1:-1]
            temp_forward = []
            if len(trim_forward) != 0:
                for i in trim_forward:
                    if i == '(':
                        temp_forward.append(')')
                    else:
                        temp_forward.append('(')
            temp_forward = "".join(temp_forward)
            
            return empty + temp_forward        
    answer = dfs(p)        
    
    
    return answer