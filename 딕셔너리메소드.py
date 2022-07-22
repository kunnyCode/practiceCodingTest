x = {'a': 10, 'b': 20, 'c': 30, 'd':40}

# 딕셔너리에 키-값 쌍 추가하기
# setdefault: 키-값 쌍 추가
# update: 키의 값 수정, 키가 없으면 키-값 쌍 추가
x.setdefault('e')
print(f"x.setdefault('e') 이후 x딕셔너리 출력 :\n{x}")
x.setdefault('f', 100)
print(f"x.setdefault('f', 100) 이후 x딕셔너리 출력 : \n{x}")



# 딕셔너리에서 키의 값 수정
# update(키=값)
x.update(a=900, f=60) # ,로 여러개 추가 가능
print(f"x.update(a=900, f=60) 이후 x 딕셔너리 출력 :\n{x}")
x.update(e=50)
print(f"x.update(e=50) 이후 x 딕셔너리 출력 :\n{x}")

# update(키=값)은 키가 문자일 때만 사용가능
# 키가 숫자인 경우 update(딕셔너리)나, update(리스트), update(튜플), update(반복 가능한 객체) 등으로 수정할 수 있다.
y = {1: 'one', 2:'two'}
y.update({1: 'ONE', 2: 'TWO', 3: 'THREE'}) # 키값이 숫자일 경우 딕셔너리에 값 넣어 수정
# 내용 더 있는데 일단 여기까지



# 딕셔너리에 키-값 쌍 제거하기
# pop(key), del 딕셔너리[key]
# popitem()은 딕셔너리에서 임의의 키-값 쌍을 삭제한 뒤 삭제한 키-값 쌍을 튜플로 반환한다. 파이썬 3.6 이상에서는 마지막 키-값 쌍을 삭제
x = {'a': 10, 'b': 20, 'c': 30, 'd': 40}
print(f"x.popitem() {x.popitem()}")
print(f"x.popitem() 이후 x 딕셔너리 출력 :\n{x}")


# 리스트와 튜플로 딕셔너리 만들기
ar_keys = ['a', 'b', 'c', 'd']
tu_keys = ['a', 'b', 'c', 'd']
x = dict.fromkeys(ar_keys) # 값을 지정하지 않으면 None으로 들어간다.
print(f"dict.fromkeys(keys) 이후 x :\n{x}")
y = dict.fromkeys(tu_keys, 100) # 값을 지정하면 동일하게 모든 값이 100으로 들어감
print(f"dict.fromkeys(tu_keys, 100)이후 y :\n{y}")
