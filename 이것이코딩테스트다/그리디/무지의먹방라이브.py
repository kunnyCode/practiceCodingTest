def solution(food_times, k):
    
    answer = 0
    
    if len(food_times) > k:
        return k + 1
    
    
    rotate = k+1 // len(food_times)
    addStep = k+1 % len(food_times)
    
    tempAr = []
    order = []
    
    for i in range(len(food_times)):
        if i == 0:
            temp = food_times[i] - rotate - 1
            food_times[i] = temp
        else:
            temp = food_times[i] - rotate
            food_times[i] = temp
        
        if temp < 0:
            addStep += (-temp)
        elif temp > 0:
            tempAr.append(temp)
            order.append(i)
            
            
    if addStep > sum(tempAr):
        return -1
    
    
    count = 0
    while True:
        j = count % len(tempAr)
        if tempAr[j] > 0:
            addStep -= 1
            tempAr[j] -= 1
            if addStep == 0:
                answer = order[j]
            
        count += 1
    
    
    
    
    return answer