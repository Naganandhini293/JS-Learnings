//Function currying - a function getting one argument at a time and expects a new argument for another function
// f(a,b) -> f(a)(b) - created by chaing the one function inside another using closures
//Used for: If use pass same param again and again
function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

console.log(f(2)); //returns function
console.log(f(2)(3)); //2, 3

//2.
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)); //returns

//3.
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "add") {
        return a + b;
      } else if (operation == "sub") {
        return a - b;
      } else if (operation == "mul") {
        return a * b;
      } else if (operation == "div") {
        return a / b;
      }
    };
  };
}

console.log("ADD", evaluate("add")(3)(4));

let mul = evaluate("mul");
console.log("MUL", mul(3)(4));



//Infinite currying
function infiniteSum(a) {
  return function (b) {
    if (b) return infiniteSum(a + b);
    else return a;
  };
}

console.log("Infinite Curry", infiniteSum(2)()); //returns 2
console.log("Infinite Curry", infiniteSum(2)(3)); //return a function
console.log("Infinite Curry", infiniteSum(2)(3)()); //5



//Currying - taking n arguments and converting them to return n functions
// vs partial application - Fixes some arguments, leaving others open for later invocation

//partial application
function sum2(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log("Partial Application", sum2(2)(3, 4));

//Use case for fucntion currying - Manipulating the DOM
function updateElementById(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeader = updateElementById("heading");
updateHeader("I like to read");




//Polyfill for function currying
function curry(fn) {
  return function curriedFun(...args) {
    console.log("----ARGS-----", args)
    // If sufficient arguments are passed, execute the function
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        console.log("ARGS", ...args,"next", ...next)
        return curriedFun(...next, ...args);
      };
    }
  };
}

function summation(a, b, c, d){
    return a+b+c+d
}

const curried = curry(summation)

console.log(curried(1)(2)) //return function as it expectes 4 args
console.log(curried(1, 2)(3)(4)) //return 10
console.log(curried(1, 2, 3, 4)) // 10