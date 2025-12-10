class Solution:
    def specialTriplets(self, nums: List[int]) -> int:
        freq, prev = Counter(nums), Counter()
        res = 0
        MOD = 1e9 + 7
        prev[nums[0]]+=1

        for i in range(1, len(nums) - 1):
            res += prev[nums[i] * 2] * (freq[nums[i] * 2] - prev[nums[i] * 2] - (nums[i] == 0))
            prev[nums[i]] += 1
        
        return int(res % MOD)
            