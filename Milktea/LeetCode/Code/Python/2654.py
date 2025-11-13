class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        countOne = nums.count(1)

        if countOne: return n - countOne
        res = inf

        for i in range(n):
            num = nums[i]
            for j in range(i + 1, n):
                num = gcd(num, nums[j])
                if num == 1:
                    res = min(res, j - i)

        if res == inf: return -1
        return res + n - 1