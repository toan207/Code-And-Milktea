public class _3228 {
  public int maxOperations(String s) {
    int point = 0;
    int res = 0;
    int f = 1;

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '1') {
        point += 1;
        f = 1;
      } else {
        res += point * f;
        f = 0;
      }
    }

    return res;
  }
}