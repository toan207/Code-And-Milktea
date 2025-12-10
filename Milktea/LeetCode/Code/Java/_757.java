import java.util.Arrays;

class _757 {
    public int intersectionSizeTwo(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> {
            if (a[1] == b[1]) {
                return b[0] - a[0];
            }
            return a[1] - b[1];
        });

        int setSize = 0;
        int small = -1;
        int big = -1;

        for (int[] interval : intervals) {
            int l = interval[0];
            int r = interval[1];
            if (l > big) {
                small = r - 1;
                big = r;
                setSize += 2;
            } else if (l > small) {
                small = big;
                big = r;
                setSize += 1;
            }
        }

        return setSize;
    }
}