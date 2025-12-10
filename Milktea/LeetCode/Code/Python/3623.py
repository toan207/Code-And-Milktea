class Solution:
    def countTrapezoids(self, points: List[List[int]]) -> int:
        countPointInY = defaultdict(int)
        for x,y in points:
            countPointInY[y] += 1
        
        prefixSum, res = 0, 0
        mod = 10**9 + 7
        for v in countPointInY.values():
            v = v * (v-1) // 2

            res = (res + prefixSum * v) % mod
            prefixSum = (prefixSum + v) % mod

        return res