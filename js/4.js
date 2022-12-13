const fs = require("fs")

const read = (str) => fs.readFileSync(str).toString().split("\n")

const spl = (line) => line.split(",").map((ln) => ln.split("-").map((l) => parseInt(l)))

const isEqual = (a, b) => b[1] === a[1] && a[0] === b[0]
const firstIncludesSecond = ([a1, a2], [b1, b2]) => b1 >= a1 && b2 <= a2

const overlap = (a, b) => b[0] <= a[1] && b[0] >= a[0]

const hasSubstrings = ([a, b]) =>
  firstIncludesSecond(a, b) || firstIncludesSecond(b, a) || isEqual(a, b)

const hasOverlap = ([a, b]) =>
  isEqual(a, b) ||
  firstIncludesSecond(a, b) ||
  firstIncludesSecond(b, a) ||
  overlap(a, b) ||
  overlap(b, a)

function main() {
  console.log("Part 1: ", read("../src/4.txt").map(spl).map(hasSubstrings).filter(Boolean).length)
  console.log("Part 2: ", read("../src/4.txt").map(spl).map(hasOverlap).filter(Boolean).length)
}

main()
