yoon = int(input());

if((yoon%4 == 0 and yoon%100 != 0) or yoon%400 == 0):
	print('1');
else:
	print('0');