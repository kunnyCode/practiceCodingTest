s = list(map(int, input()))

result = 0

for i in range(len(s)):
    if i == 0:
        result = s[i]
        continue
    
    if result == 0 or s[i] == 0:
        result = result + s[i]
    else:
        result = result * s[i]
        

print(result)
