function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSeries.push(fibSeries[i-1] + fibSeries[i-2]);
    }
    return fibSeries;
  }
  
  let fibSeries = fibonacci(20); // generate Fibonacci series up to 20 numbers
  let list = document.getElementById("fibonacci-series");
  fibSeries.forEach(function(num) {
    let listItem = document.createElement("li");
    listItem.textContent = num;
    list.appendChild(listItem);
  });