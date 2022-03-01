def solution(array, commands):
    answer = []

    for i in commands:
        temp = array[i[0]-1:i[1]]
        temp.sort()
        res = i[2]
        answer.append(temp[res - 1])
    return answer












# 파이써닉한 풀이
# def solution(array, commands):
#     return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))