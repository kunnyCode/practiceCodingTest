# N, M을 공백으로 구분하여 입력받기
n, m = map(int, input().split())

# 2차원 리스트의 맵 정보 입력받기
graph = []
for i in range(n):
	graph.append(list(map(int, input())))

# DFS로 특정한 노드를 방문한 뒤 연결된 모든 노드들도 방문
def dfs(x, y):
	# 주어진 범위를 벗어나는 경우에는 즉시 종료
	if x <= -1 or x >= n or y <= -1 or y >= m:
		return False
	# 현재 노드를 아직 방문하지 않았다면
	if graph[x][y] == 0:
		#해당 노드 방문 처리
		graph[x][y] = 1
		# 상, 하, 좌, 우의 위치도 모두 재귀적으로 호출
		dfs(x-1, y)
		dfs(x, y-1)
		dfs(x+1, y)
		dfs(x, y+1)
		return True

	return False

result = 0
for i in range(n):
	for j in range(m):
		# 현재 위치에서 DFS 수행
		if dfs(i, j) == True:
			result += 1

print(result) # 정답 출력


# graph = []
# n, m = map(int,input().split())
# for _ in range(n):
#     graph.append(list(map(int,input())))
 
# answer = 0 
# def dfs(x,y):
#     if x<=-1 or x>=n or y<0 or y>=m: # 범위 벗어나면 종료
#         return False
    
#     if graph[x][y]==0:
#         graph[x][y] = 1
#         for i in range(4):
#             dfs(x+dx[i],y+dy[i])
#         return True
    
# dx = [-1,1,0,0] # 상하좌우
# dy = [0,0,-1,1]
 
# for i in range(n):
#     for j in range(m):
#         if dfs(i,j)==True:
#             answer+=1
 
# print(answer)
