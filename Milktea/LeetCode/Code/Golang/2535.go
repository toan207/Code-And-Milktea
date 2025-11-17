package main

func rangeAddQueries(n int, queries [][]int) [][]int {
	mx := make([][]int, n)
	for i := range mx {
		mx[i] = make([]int, n)
	}
	for _, query := range queries {
		r1, c1, r2, c2 := query[0], query[1], query[2], query[3]
		mx[r1][c1] += 1
		if c2+1 < n {
			mx[r1][c2+1] -= 1
		}
		if r2+1 < n {
			mx[r2+1][c1] -= 1
			if c2+1 < n {
				mx[r2+1][c2+1] += 1
			}
		}
	}
	for i := range mx {
		for j := 1; j < n; j++ {
			mx[i][j] += mx[i][j-1]
		}
	}
	for j := range mx {
		for i := 1; i < n; i++ {
			mx[i][j] += mx[i-1][j]
		}
	}
	return mx
}
