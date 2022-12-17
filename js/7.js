const fs = require("fs")

const format = (tot, curr) => {
  if (curr.slice(0, 1) === "cd") {
  }
}

class File {
  constructor(name, parent, items, dirs) {
    this.name = name
    this.children = dirs
    this.parent = parent
    this.size = items.reduce((tot, curr) => tot + parseInt(curr.split(" ")[0]), 0)
  }
}

const data = fs.readFileSync("../src/7.txt").toString().split("$ ")

const files = data

console.log(files)
