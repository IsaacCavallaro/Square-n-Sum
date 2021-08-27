function squareNsum(numbers){
    var total= 0;
    var arr = numbers.map(function(item) {return item * item;});
      for(var i in arr) { 
        total += arr[i]; 
      };
    return total;
  }

module.exports = squareNsum



