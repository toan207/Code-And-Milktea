public class _2535 {
  public int[][] rangeAddQueries(int n, int[][] queries) {
    int[][] mx = new int[n][n];
    for (int[] query : queries) {
      int r1 = query[0];
      int c1 = query[1];
      int r2 = query[2];
      int c2 = query[3];
      mx[r1][c1] += 1;
      if (c2 + 1 < n)
        mx[r1][c2 + 1] -= 1;
      if (r2 + 1 < n) {
        mx[r2 + 1][c1] -= 1;
        if (c2 + 1 < n)
          mx[r2 + 1][c2 + 1] += 1;
      }
    }

    for (int i = 0; i < n; i++) {
      for (int j = 1; j < n; j++) {
        mx[i][j] += mx[i][j - 1];
      }
    }

    for (int j = 0; j < n; j++) {
      for (int i = 1; i < n; i++) {
        mx[i][j] += mx[i - 1][j];
      }
    }

    return mx;
  }
}
