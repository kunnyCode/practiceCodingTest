def solution(num):
	answer = 0
	
	if num == 1:
		return 0

	while True:
		if num%2 == 0:
			num = num / 2
			answer = answer + 1
			if num == 1 or answer == 500:
				break
		else:
			num = num * 3 + 1
			answer = answer + 1
			if num == 1 or answer == 500:
				break
	
	if answer == 500:
		return -1
	else:
		return answer

print(solution(1))