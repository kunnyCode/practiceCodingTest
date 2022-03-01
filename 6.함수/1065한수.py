num = input()

result = []
for i in range(1, int(num)+1):
    ar = list(map(int, list(str(i))))
    length = len(ar)
    
    if length <= 2:
        result.append(i)
    else:
        temp = []

        for j in range(length-1, 0, -1): 
            temp.append(ar[j] - ar[j-1])
        
        collect = True
        for k in range(len(temp) - 1):
            if(temp[k] != temp[k+1]):
                collect = False
                break
            else:
                continue
            
        
        if collect == True:
            result.append(i)


print(len(result))