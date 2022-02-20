for i in range(1,10001):
	if i >= 10:
		for j in range(1,10):
			for k in range(1,10):
				if(i == 11*j + 2*k):
					print(i)