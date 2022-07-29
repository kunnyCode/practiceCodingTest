
import sys
# n = int(input())
n = int(sys.stdin.readline())

stack = []

for i in range(n):
    ar = sys.stdin.readline().split()
    
    if ar[0] == 'push':
        temp = int(ar[1])
        stack.append(temp)
        
    elif ar[0] == 'pop':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())
        
    elif ar[0] == 'size':
        print(len(stack))
        
    elif ar[0] == 'empty':
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    
    elif ar[0] == 'top':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])

