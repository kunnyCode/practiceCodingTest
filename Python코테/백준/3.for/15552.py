# https://velog.io/@yeseolee/Python-파이썬-입력-정리sys.stdin.readline
import sys

t = int(input())

for i in range(t):
	a, b = map(int, sys.stdin.readline().split())
	print(a + b)