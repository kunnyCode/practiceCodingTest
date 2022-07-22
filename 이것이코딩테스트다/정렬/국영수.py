n = int(input())

students_list = []
for i in range(n):
	students_list.append(input().split())

# print(students_list)

# ans_list = sorted(students_list, key = lambda student: (-int(student[1]), int(student[2]), -int(student[3]), student[0]))

# for student in ans_list:
# 	print(student[0])


students_list.sort(key=lambda x: (-int(x[1]), int(x[2]), -int(x[3]), x[0]))

for i in students_list:
	print(i[0])
