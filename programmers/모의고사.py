answers = [1,3,1,5,2]
supoja=[0, 0, 0]



supoja1Ar=[1,2,3,4,5,1,2,3,4,5]
supoja2Ar=[2,1,2,3,2,4,2,5,]
supoja3AR=[3,3,1,1,2,2,4,4,5,5]

numberNeeded1 = len(answers) // 10 + 1
numberNeeded2 = len(answers) // 8 + 1

supoja1Ar = supoja1Ar * numberNeeded1
supoja2Ar = supoja2Ar * numberNeeded2
supoja3Ar = supoja3AR * numberNeeded1

for i in range(len(answers)):
    if supoja1Ar[i] == answers[i]:
        supoja[0] += 1
    if supoja2Ar[i] == answers[i]:
        supoja[1] += 1
    if supoja3Ar[i] == answers[i]:
        supoja[2] += 1


answer=[]

if(supoja[0] == supoja[1] == supoja[2] != 0):
    answer = [1,2,3]
elif supoja[0] == supoja[1] and supoja[1] > supoja[2]:
    answer = [1,2]
elif supoja[1] == supoja[2] and supoja[2] > supoja[0]:
    answer = [2,3]
elif supoja[0] == supoja[2] and supoja[2] > supoja[1]:
    answer = [1,3]
else:
    tmp = max(supoja)
    res = supoja.index(tmp) + 1
    answer = [res]


print(supoja)
print(answer)




# def solution(answers):
#     pattern1 = [1,2,3,4,5]
#     pattern2 = [2,1,2,3,2,4,2,5]
#     pattern3 = [3,3,1,1,2,2,4,4,5,5]
#     score = [0, 0, 0]
#     result = []

#     for idx, answer in enumerate(answers):
#         if answer == pattern1[idx%len(pattern1)]:
#             score[0] += 1
#         if answer == pattern2[idx%len(pattern2)]:
#             score[1] += 1
#         if answer == pattern3[idx%len(pattern3)]:
#             score[2] += 1

#     for idx, s in enumerate(score):
#         if s == max(score):
#             result.append(idx+1)

#     return result