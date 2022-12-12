from functools import reduce


def read():
    f = open("../src/3.txt")
    return f.read().splitlines()


def convToNum(c):
    return ord(c[0]) - 96 if ord(c[0]) > 96 else ord(c[0]) - 38


def splitTwo(str):
    half = len(str)//2
    return [str[:half], str[half:len(str)]]


def splitThree(lines):
    res = []
    for i, line in enumerate(lines):
        if (i % 3 == 0 or len(res) == 0):
            res.append([line])
        else:
            res[len(res) - 1].append(line)

    return res


def match(*args):
    rest = args[0][1:len(args[0])]
    for char in args[0][0]:
        bool_list = []
        for ch in rest:
            bool_list.append(True if char in ch else False)

        if (all(bool_list)):
            return char


data = read()


part1 = reduce(lambda a, b: a+b, map(convToNum,
                                     map(match, map(splitTwo, data))), 0)

part2 = reduce(lambda a, b: a+b, map(convToNum,
                                     map(match, splitThree(data))), 0)
print("Part 1 Score:", part1)
print("Part 2 Score:", part2)
