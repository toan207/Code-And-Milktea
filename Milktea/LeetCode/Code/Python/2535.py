class Solution:
    def rangeAddQueries(self, n: int, queries: List[List[int]]) -> List[List[int]]:
        mx = []
        for i in range(n):
            mx.append([0] * n)
        
        for r1, c1, r2, c2 in queries:
            mx[r1][c1] += 1
            if c2 + 1 < n: mx[r1][c2 + 1] -= 1
            if r2 + 1 < n: 
                mx[r2 + 1][c1] -= 1
                if c2 + 1 < n: 
                    mx[r2 + 1][c2 + 1] += 1

        for i in range(n):
            for j in range(1, n):
                mx[i][j] += mx[i][j - 1]

        for j in range(n):
            for i in range(1, n):
                mx[i][j] += mx[i - 1][j]
        
        return mx