hour, minute = input().split();

hour = int(hour);
minute = int(minute);

if(minute - 45 >= 0):
	minute = minute - 45;
	print(hour, minute);
elif(minute - 45 < 0):
	minute = (minute -45) + 60;
	if(hour == 0):
		hour = 23;
	else:
		hour = hour - 1;
	print(hour, minute);