package main

import "math"

func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func minOperations(nums []int) int {
	n := len(nums)
	countOne := 0
	for _, num := range nums {
		if num == 1 {
			countOne++
		}
	}
	if countOne > 0 {
		return n - countOne
	}
	res := math.MaxInt32
	for i := 0; i < n; i++ {
		num := nums[i]
		for j := i + 1; j < n; j++ {
			num = gcd(num, nums[j])
			if num == 1 {
				res = int(math.Min(float64(res), float64(j-i)))
				break
			}
		}
	}
	if res == math.MaxInt32 {
		return -1
	}
	return res + n - 1
}
