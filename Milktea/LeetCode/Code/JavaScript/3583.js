const specialTriplets = (nums) => {
    const freq = {}
    const prev = {}
    let res = 0
    const MOD = 1e9 + 7
    prev[nums[0]] = 1

    for (let i = 0; i < nums.length; i++) {
        if (!freq[nums[i]]) freq[nums[i]] = 0
        freq[nums[i]] += 1
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (!prev[nums[i] * 2]) prev[nums[i] * 2] = 0
        if (!freq[nums[i] * 2]) freq[nums[i] * 2] = 0
        if (!prev[nums[i]]) prev[nums[i]] = 0
        res += prev[nums[i] * 2] * (freq[nums[i] * 2] - prev[nums[i] * 2] - (nums[i] == 0))
        prev[nums[i]] += 1
    }

    return res % MOD
}   