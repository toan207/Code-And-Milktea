const countTrapezoids = function (points) {
  const countPointInY = new Map();
  for (const [x, y] of points) {
    const key = BigInt(y);
    countPointInY.set(key, (countPointInY.get(key) || 0n) + 1n);
  }
  let prefixSum = 0n;
  let res = 0n;
  const mod = 1000000007n;
  for (const count of countPointInY.values()) {
    const v = (count * (count - 1n) / 2n) % mod;
    res = (res + prefixSum * v) % mod;
    prefixSum = (prefixSum + v) % mod;
  }

  return Number(res);
};
