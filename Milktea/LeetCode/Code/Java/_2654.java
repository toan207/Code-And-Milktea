public class _2654 {
  public int minOperations(int[] nums) {
    int n = nums.length;
    int countOne = 0;
    for (int num : nums) {
      if (num == 1) {
        countOne++;
      }
    }
    if (countOne > 0) {
      return n - countOne;
    }
    int res = Integer.MAX_VALUE;
    for (int i = 0; i < n; i++) {
      int num = nums[i];
      for (int j = i + 1; j < n; j++) {
        num = gcd(num, nums[j]);
        if (num == 1) {
          res = Math.min(res, j - i);
          break;
        }
      }
    }
    if (res == Integer.MAX_VALUE) {
      return -1;
    }
    return res + n - 1;
  }

  public int gcd(int a, int b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }
}