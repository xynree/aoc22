let fs = require("fs")

const sum = (a, b) => a + b

const read = (str) => fs.readFileSync(str).toString().split("\n") // get data
const convToNum = (char) =>
  char.codePointAt(0) > 96 ? char.codePointAt(0) - 96 : char.codePointAt(0) - 38

const splitTwo = (str) => {
  const half = Math.floor(str.length / 2)
  return [str.slice(0, half), str.slice(half, str.length)]
}
const splitThree = (res, line, i) => {
  i % 3 !== 0 && res.length > 0 ? res[res.length - 1].push(line) : res.push([line])
  return res
}

const match = (args) => {
  let match
  Array.from(args[0]).forEach((char) => {
    if (args.slice(1).every((str) => [...str].includes(char))) {
      match = char
      return
    }
  })
  return match
}

const data = read("../src/3.txt")
const partOne = data.map(splitTwo).map(match).map(convToNum).reduce(sum, 0)
const partTwo = data.reduce(splitThree, []).map(match).map(convToNum).reduce(sum, 0)
console.log("Part 1 Sum:", partOne, "\n", "Part 2 Sum:", partTwo)
