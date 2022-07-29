hour, minute = input().split()
timeNeeded = int(input())


hour = int(hour)
minute = int(minute)

if minute + timeNeeded >= 60:
	global plusHour
	global plusMinute
	plusHour = hour + (minute + timeNeeded)//60
	plusMinute = (minute + timeNeeded) % 60
	if plusHour > 23:
		plusHour = plusHour%24

	print(plusHour, plusMinute)
else:
	print(hour, minute + timeNeeded)

