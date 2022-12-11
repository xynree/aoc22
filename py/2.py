import re
from functools import reduce


f = open("../src/2.txt")
file = f.read().splitlines()


def Win(a): return a+6
def Draw(a): return a+3
def Lose(a): return a


def getWin(a): return a+1 if a+1 < 4 else 1
def getLose(a): return a-1 if a-1 > 0 else 3


def calc(a, b): return (3+a-b) % 3


def comp1(game):
    if game[0] == game[1]:
        return Draw(game[1])
    if (calc(game[0], game[1]) == 1):
        return Lose(game[1])
    else:
        return Win(game[1])


def comp2(game):
    if game[1] == 1:
        return Lose(getLose(game[0]))
    if game[1] == 2:
        return Draw(game[0])
    else:
        return Win(getWin(game[0]))


def format(guide):
    res = re.sub(r"(A)|(X)", "1", guide)
    res = re.sub(r"(B)|(Y)", "2", res)
    res = re.sub(r"(C)|(Z)", "3", res)
    return [int(res[0]), int(res[2])]


def sum(a, b): return a+b


sum1 = list(map(comp1, list(map(format, file))))
sum2 = list(map(comp2, list(map(format, file))))

print("Part 1 Score:", reduce(sum, sum1, 0))
print("Part 2 Score:", reduce(sum, sum2, 0))
