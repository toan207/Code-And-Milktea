class Solution:
    def maxOperations(self, s: str) -> int:
        point = 0
        res = 0
        f = 1

        for i in s:
            if i == '1':
                point += 1
                f = 1
            else:
                res += point * f
                f = 0

        return res
