const fs = require("fs")

const makeRegex = (num) => {
  let arr = []
  for (let i = 1; i < num + 1; i++) {
    arr.push("(.)")
    for (let j = 0; j < i; j++) {
      const lett = `(?!\\${j + 1})`
      arr.push(lett)
    }
  }
  arr.push("(.)")
  return new RegExp(arr.join(""), "g")
}

const data = fs.readFileSync("../src/6.txt").toString()
console.log("Part 1 Answer", [...data.matchAll(makeRegex(3))][0].index + 4)
console.log("Part 2 Answer", [...data.matchAll(makeRegex(13))][0].index + 14)
