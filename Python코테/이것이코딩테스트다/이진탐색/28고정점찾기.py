def binary(ar, start, end):
	if start > end:
		return -1

	mid = (start + end) // 2

	if ar[mid] == mid:
		return mid
	elif ar[mid] < mid:
		return binary(ar, mid+1, end)
	else:
		return binary(ar, start, mid-1)
	

n = int(input())
ar = list(map(int, input().split()))

print(binary(ar, 0, n-1))


