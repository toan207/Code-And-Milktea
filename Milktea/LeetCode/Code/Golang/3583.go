package main

func specialTriplets(nums []int) int {
	freq := make(map[int]int)
	prev := make(map[int]int)
	res := 0
	MOD := 1000000007
	prev[nums[0]] += 1

	for i := 0; i < len(nums); i++ {
		freq[nums[i]] += 1
	}

	for i := 1; i < len(nums)-1; i++ {
		adjustmentVal := 0
		if nums[i] == 0 {
			adjustmentVal = 1
		}
		res += prev[nums[i]*2] * (freq[nums[i]*2] - prev[nums[i]*2] - adjustmentVal)
		prev[nums[i]] += 1
	}

	return int(res % MOD)
}
