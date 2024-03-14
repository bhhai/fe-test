const baiTap = () => {
  let x = 1;
  while (x > 0) {
    if (7 / x - x / 4 < 0 && x / 4 - 10 / x < 0) {
      console.log(x);
      return x
    }
    x++;
  }
};

baiTap()