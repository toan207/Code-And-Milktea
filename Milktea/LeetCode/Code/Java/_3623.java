package Milktea.LeetCode.Code.Java;

import java.util.HashMap;
import java.util.Map;

public class _3623 {
  public int countTrapezoids(int[][] points) {
    Map<Integer, Integer> countPointInY = new HashMap<>();
    for (int[] point : points) {
      countPointInY.put(point[1], countPointInY.getOrDefault(point[1], 0) + 1);
    }
    int prefixSum = 0;
    int res = 0;
    long mod = (long) Math.pow(10, 9) + 7;
    for (int count : countPointInY.values()) {
      long v = (long) count * (count - 1) / 2;
      res = (int) ((res + prefixSum * v) % mod);
      prefixSum = (int) ((prefixSum + v) % mod);
    }
    return res;
  }
}