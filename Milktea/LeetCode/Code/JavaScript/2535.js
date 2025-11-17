const rangeAddQueries = function (n, queries) {
  const mx = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (const [r1, c1, r2, c2] of queries) {
    mx[r1][c1] += 1;
    if (c2 + 1 < n) mx[r1][c2 + 1] -= 1;
    if (r2 + 1 < n) {
      mx[r2 + 1][c1] -= 1;
      if (c2 + 1 < n) mx[r2 + 1][c2 + 1] += 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      mx[i][j] += mx[i][j - 1];
    }
  }

  for (let j = 0; j < n; j++) {
    for (let i = 1; i < n; i++) {
      mx[i][j] += mx[i - 1][j];
    }
  }
  return mx;
}