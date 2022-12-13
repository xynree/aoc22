const fs = require("fs")
const read = (str) => fs.readFileSync(str).toString().split("\n\n")

const buildStack = (tot, curr) => {
  curr.forEach((block, i) => {
    if (block !== "   ") tot[i].push(block)
  })
  return tot
}

const getBlocks = (data) =>
  data[0]
    .split("\n")
    .slice(0, -1)
    .map((row) => {
      let sub = []
      for (let i = 0; i < row.length; i += 4) {
        if (i < row.length) sub.push(row.substring(i, i + 3))
      }
      return sub
    })
    .reduce(
      buildStack,
      Array.from(Array(9), () => [])
    )
    .map((ln) => ln.reverse())

const parseOrders = (str) => {
  const match = [...str.matchAll(/\d+/g)]
  return {
    move: parseInt(match[0][0]),
    from: parseInt(match[1][0]),
    to: parseInt(match[2][0]),
  }
}

function part1() {
  const data = read("../src/5.txt")
  const orders = data[1].split("\n")

  const blocks = getBlocks(data)

  const orderSheet = orders.map(parseOrders)
  orderSheet.forEach(({ move, from, to }) => {
    for (let i = 0; i < move; i++) {
      let popped = blocks[from - 1].pop()
      blocks[to - 1].push(popped)
    }
  })
  console.log(
    "Part 1:",
    blocks.map((ln) => ln.slice(-1))
  )
}

function part2() {
  const data = read("../src/5.txt")
  const orders = data[1].split("\n")

  const blocks = getBlocks(data)

  const orderSheet = orders.map(parseOrders)

  orderSheet.forEach(({ move, from, to }) => {
    const popped = blocks[from - 1].slice(move * -1)
    blocks[from - 1] = blocks[from - 1].slice(0, move * -1)
    blocks[to - 1] = [...blocks[to - 1], ...popped]
  })
  console.log(
    "Part 2:",
    blocks.map((l) => l.slice(-1))
  )
}
part1()
part2()
