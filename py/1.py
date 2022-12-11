from functools import reduce

f = open("../src/1_input.txt")
fileNums = f.read().splitlines()


def totalUp(a, b):
    if (b == '' or len(a) == 0):
        a.append(0)
    else:
        a[len(a)-1] = int(a[len(a)-1]) + int(b)
    return a


res = reduce(totalUp, fileNums, [])
res.sort(reverse=True)

print("The highest amount of calories an elf is carrying is:", res[0])

print("The top 3 elves are carrying a total of", sum(res[:3]), "calories")
