let fs = require("fs")

let arr = fs.readFileSync("../src/1_input.txt").toString().split("\n")
let totals = arr.reduce((total, curr) => {
  if (curr === "" || !total.length) {
    total.push(0)
  } else total[total.length - 1] = parseInt(total[total.length - 1]) + parseInt(curr)
  return total
}, [])

const highest = totals.sort((prev, curr) => (prev - curr > 0 ? -1 : 1))

console.log("The highest amount of calories an elf is carrying is:", highest[0])

console.log(
  "The top 3 elves are carrying a total of",
  highest[0] + highest[1] + highest[2],
  "calories"
)
