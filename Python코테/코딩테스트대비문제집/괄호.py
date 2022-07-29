num = int(input())
ar = []
for i in range(num):
    ar.append(input())
    
    
for i in range(len(ar)):
    keyArAndStr = ar[i]
#     for i in range(5):
    while len(keyArAndStr) > 1:
        first = keyArAndStr.find('(')
        if first == -1:
            print("NO")
            break
        last = keyArAndStr.find(')', first)
        if last == -1:
            print("NO")
            break
#         print(last)
        
        keyArAndStr = list(keyArAndStr)
#         print(keyArAndStr)
        keyArAndStr.pop(first)
        keyArAndStr.pop(last - 1)
        
        keyArAndStr = "".join(keyArAndStr)
#         print(keyArAndStr)
        
    if len(keyArAndStr) == 1:
        print("NO")
    elif len(keyArAndStr) == 0:
        print("YES")
    