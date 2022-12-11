package main

import (
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func Win(a int) int {
	return a + 6
}
func Draw(a int) int {
	return a + 3
}

func getWin(a int) int {
	if a+1 < 4 {
		return a + 1
	} else {
		return 1
	}
}

func calc(a, b int) int {
	return (3 + a - b) % 3
}

func getLose(a int) int {
	if a-1 > 0 {
		return a - 1
	} else {
		return 3
	}
}

func comp1(game []int) int {
	if game[0] == game[1] {
		return Draw(game[1])
	}
	if calc(game[0], game[1]) == 1 {
		return game[1]
	} else {
		return Win(game[1])
	}
}

func comp2(game []int) int {
	if game[1] == 1 {
		return getLose(game[0])
	}
	if game[1] == 2 {
		return Draw(game[0])
	} else {
		return Win(getWin(game[0]))
	}
}

func sum(a, b int) int {
	return a + b
}

func format(guide string) []int {
	re := regexp.MustCompile("A|X").ReplaceAllString(guide, "1")
	re = regexp.MustCompile("B|Y").ReplaceAllString(re, "2")
	re = regexp.MustCompile("C|Z").ReplaceAllString(re, "3")
	s := strings.Split(re, " ")

	opp, err := strconv.Atoi(s[0])
	check(err)
	pl, er := strconv.Atoi(s[1])
	check(er)

	res := []int{opp, pl}

	return res
}

func read() []string {
	file, err := os.ReadFile("../src/2.txt")
	check(err)

	return strings.Split(string(file), "\n")
}

func main() {
	var formatted1 []int
	var formatted2 []int

	for _, val := range read() {
		formatted1 = append(formatted1, comp1(format(val)))
	}
	for _, val := range read() {
		formatted2 = append(formatted2, comp2(format(val)))
	}

	var sum1 int
	var sum2 int

	for _, val := range formatted1 {
		sum1 += val
	}
	for _, val := range formatted2 {
		sum2 += val
	}

	fmt.Println("Part 1:", sum1)
	fmt.Println("Part 2:", sum2)

}
