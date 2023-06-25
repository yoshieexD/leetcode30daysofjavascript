var createCounter = function(n) {
    let count = n;
    return function() {
        if(count <= 12){
            count++;
            return count-1;
        }
    }; 
};

  const counter = createCounter(10)
  const array = [counter(),counter(),counter()]

  console.log(array)