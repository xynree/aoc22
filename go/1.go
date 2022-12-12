package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	file, err := os.Open("../src/1.txt")
	check(err)
	defer file.Close()

	var totals []int

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		if scanner.Text() == "" || len(totals) == 0 {
			totals = append(totals, 0)
		} else {
			conv, err := strconv.Atoi(scanner.Text())
			check(err)
			totals[len(totals)-1] = totals[len(totals)-1] + conv
		}

	}

	sort.Sort(sort.Reverse(sort.IntSlice(totals)))

	fmt.Println("The highest amount of calories an elf is carrying is:", totals[0])

	fmt.Println("The top 3 elves are carrying a total of", totals[0]+totals[1]+totals[2])

}
