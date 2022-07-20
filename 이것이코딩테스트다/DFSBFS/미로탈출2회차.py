from collections import deque

h, w = map(int, input().split())
graph = []
for _ in range(h):
	graph.append(list(map(int, input())))

dx = [-1, 1, 0 ,0]
dy = [0, 0, -1, 1]

queue = deque()
queue.append((0, 0))

while queue:
	# print(queue)
	x, y = queue.popleft()

	# if graph[x][y] == 0:
	# 	continue

	for i in range(4):
		nx = x + dx[i]
		ny = y + dy[i]

		if nx < 0 or nx >= h or ny < 0 or ny >=w:
			continue

		if graph[nx][ny] == 0:
			continue

		if graph[nx][ny] == 1:
			graph[nx][ny] = graph[x][y] + 1
			queue.append((nx, ny))

print(graph[h-1][w-1])
# print(graph)


