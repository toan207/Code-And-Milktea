class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: (x[1], -x[0]))

        setSize = 0
        small, big = -1, -1

        for l, r in intervals:
            if l > big:
                small = r - 1
                big = r
                setSize += 2
            elif l > small:
                small = big
                big = r
                setSize += 1
        
        return setSize