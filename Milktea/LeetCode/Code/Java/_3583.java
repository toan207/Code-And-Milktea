public class _3583 {
    final static int MOD = (int) 1e9 + 7, M = (int) 1e5 + 1;

    public int specialTriplets(int[] nums) {
        int[] freq = new int[M];
        int[] prev = new int[M];
        long res = 0;
        prev[nums[0]] = 1;

        for (int i = 0; i < nums.length; i++) {
            freq[nums[i]] += 1;
        }

        for (int i = 1; i < nums.length - 1; i++) {
            final int x = nums[i], x2 = x << 1;
            if (x2 < M)
                res += (long) prev[x2] * (freq[x2] - prev[x2] - (x == 0 ? 1 : 0));
            prev[x] += 1;
        }

        return (int) (res % MOD);
    }
}
