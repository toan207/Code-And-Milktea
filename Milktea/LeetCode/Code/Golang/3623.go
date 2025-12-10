package main

func countTrapezoids(points [][]int) int {
	countPointInY := make(map[int]int)
	for _, point := range points {
		countPointInY[point[1]]++
	}
	prefixSum := 0
	res := 0
	mod := 1_000_000_007
	for _, count := range countPointInY {
		v := count * (count - 1) / 2
		res = (res + prefixSum*v) % mod
		prefixSum = (prefixSum + v) % mod
	}
	return res
}
