function fibonacciGenerator(n) {
  var fibo = [0, 1];
  if (n === 0) {
    fibo = []
  } else if (n === 1) {
    fibo = [0]
  } else if (n === 2) {} else
    for (var i = 2; i < n; i++) {
      var sumLasts = fibo[fibo.length - 1] + fibo[fibo.length - 2];
      fibo.push(sumLasts);
    }
  return fibo;
}
