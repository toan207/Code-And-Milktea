var maxOperations = function (s) {
  let point = 0;
  let res = 0;
  let f = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '1') {
      point += 1;
      f = 1;
    }
    else {
      res += point * f;
      f = 0;
    }
  }

  return res;
};