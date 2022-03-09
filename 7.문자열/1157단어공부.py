strEng = input()
strEng = strEng.lower()

if len(strEng) == 1:
	print(strEng[0].upper())

else:
	setStrEng = list(set(list(strEng)))
	# print(strEng)
	# print(setStrEng)

	alphaAr = []
	for i in setStrEng:
			alphaAr.append(strEng.count(i))
	# print(alphaAr)

	maxVal = max(alphaAr)
	indexVal = alphaAr.index(maxVal)
	biggestChar = setStrEng[indexVal]
	# print(maxVal)
	# print(indexVal)
	# print(biggestChar.upper())
	alphaAr.pop(indexVal)

	maxVal2 = max(alphaAr)
	indexVal2 = alphaAr.index(maxVal2)
	biggestChar2 = setStrEng[indexVal2]
	# print(maxVal2)
	# print(indexVal2)
	# print(biggestChar2.upper())
	alphaAr.pop(indexVal2)

	if maxVal == maxVal2:
			print('?')
	else:
			print(biggestChar.upper())



# words = input().upper()
# unique_words = list(set(words))  # 입력받은 문자열에서 중복값을 제거

# cnt_list = []
# for x in unique_words :
#     cnt = words.count(x)
#     cnt_list.append(cnt)  # count 숫자를 리스트에 append

# if cnt_list.count(max(cnt_list)) > 1 :  # count 숫자 최대값이 중복되면
#     print('?')
# else :
#     max_index = cnt_list.index(max(cnt_list))  # count 숫자 최대값 인덱스(위치)
#     print(unique_words[max_index])