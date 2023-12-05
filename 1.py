import copy

a = [1, 2, 3]
a_shello = copy.deepcopy(a)
a[0] = 12

print('a:', a)
print('a_shello:', a_shello)