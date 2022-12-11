const fs = require("fs")
const file = fs.readFileSync("../src/2.txt").toString().split("\n")

const Win = (a) => a + 6
const Draw = (a) => a + 3

const getWin = (a) => (a + 1 < 4 ? a + 1 : 1)
const getLose = (a) => (a - 1 ? a - 1 : 3)

const calc = (a, b) => (3 + a - b) % 3

const compare1 = ([a, b]) => {
  if (a === b) return Draw(b)
  switch (calc(a, b)) {
    case 1: // ROCK
      return b // SCISSOR
    case 2: // PAPER
      return Win(b) // ROCK
  }
}

const compare2 = ([a, b]) => {
  if (b === 2) return Draw(a)
  switch (b) {
    case 1: // LOSE
      return getLose(a)
    case 3: // WIN
      return Win(getWin(a))
  }
}

const format = (guide) => {
  guide = guide.replaceAll(/A|X/g, "1").replaceAll(/B|Y/g, "2").replaceAll(/C|Z/g, "3")
  return [parseInt(guide[0]), parseInt(guide[2])]
}

const sum = (a, b) => a + b

// Answer
console.log("Part 1 Score:", file.map(format).map(compare1).reduce(sum, 0))
console.log("Part 2 Score:", file.map(format).map(compare2).reduce(sum, 0))
