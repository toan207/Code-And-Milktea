var minOperations = function (nums) {
  let n = nums.length;
  let countOne = 0;
  for (let i = 0; i < n; i++) {
    countOne += nums[i] === 1 ? 1 : 0;
  }
  if (countOne > 0) {
    return n - countOne;
  }
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    for (let j = i + 1; j < n; j++) {
      num = gcd(num, nums[j]);
      if (num == 1) {
        res = Math.min(res, j - i);
        break;
      }
    }
  }
  if (res == Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  return res + n - 1;
};

var gcd = function (a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
};