from xmlrpc.client import Boolean


participant = ["marina", "josipa", "nikola", "vinko", "filipa", "josipa"]
completion = ["josipa", "filipa", "marina", "nikola", "josipa"]


# dictionary = {string : True for string in participant}
# print(dictionary)

# for i in range(len(completion)):
# 	if(dictionary[completion[i]]):
# 		del dictionary[completion[i]]

# # print(dictionary)

# for i in dictionary.keys():
# 	print(i)

dictionary = {}

for name in participant:
	if dictionary.get(name):
		dictionary[name] += 1
	else:
		dictionary[name] = 1

print(dictionary)

for i in completion:
	dictionary[i] -= 1

print(dictionary)

for j in dictionary:
	if dictionary[j] > 0:
		print(j)
# print(dictionary)



# 모범답안
# import collections


# def solution(participant, completion):
#     answer = collections.Counter(participant) - collections.Counter(completion)
#     return list(answer.keys())[0]
