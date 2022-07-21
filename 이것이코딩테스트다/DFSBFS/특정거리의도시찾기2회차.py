from collections import deque
import queue

n, m, k, x = map(int, input().split())
# print(n, m ,k, x)

graph = [[] for _ in range(n + 1)]
for i in range(m):
	a , b  = map(int, input().split())
	graph[a].append(b)

# print(graph)
check = [ -1 for _ in range(n+1)]
check[x] = 0

queue = deque([x])

while queue:
	q = queue.popleft()
	for next_node in graph[q]:
		if check[next_node] == -1:
			check[next_node] = check[q] + 1
			queue.append(next_node)

check_answer_num = False
for i in range(1, n+1):
	if check[i] == k:
		print(i)
		check_answer_num = True

if check_answer_num == False:
	print(-1)