// IIFE - Immediately Invoked Function Expression
(function squareIIFE(num) {
    console.log(num * num); // Outputs 36
})(6);

(function (x) {
    return (function (y) {
        console.log(x); // Outputs 1
    })(3);
})(1);


//--------------------------------------------------------------------------------------//

//Anonymous function - usd
// function(){

// }

//Function declaration aks function statement aka function definition
function a(){

}

//Function expression -  can't be hoisted
var b = function(){

}

//Named Function
var c = function xyz(){

}

//arrow function
//1. Syntax
const add = (num1, num2)=>{
    console.log(num1 + num2)
}
//2.Implicit "return" keyword
const squareArr = (num) => num*num;

//3. arguments
function fn(){
    console.log(arguments) //prints argument list
}
fn(1, 2, 3)

const fnArr = () =>{
    // console.log(arguments)
}

//4. this key word
let user = {
    username: "Naganandhini",   
    rc1: () =>{
        console.log(this.username) 
        console.log(this)
        //undefined - refer to global this object
    },
    rc2(){
        console.log(this.username) //Naganandhini -  local username 
    }
}

user.rc1()
user.rc2()

fnArr(1, 2, 3, 4) //throws an error

//--------------------------------------------------------------------------------------//

//params - variable receiving the function declaration and arguments - variable passing while calling the argument
//spread , rest operator - https://www.geeksforgeeks.org/what-is-the-rest-parameter-and-spread-operator-in-javascript/

//First class function - function can be treated like variable
function square(num){ //param 
    return num*num
}
function displaySqauer(fn){
    console.log(fn(5))
}
square(6) //argument
displaySqauer(square)

//--------------------------------------------------------------------------------------//

//Closure - Ability of the function to access variable out of the scope.
//Closure are created everytime the functions are created
for(let i =0; i<5; i++){
    setTimeout(function(){
        console.log(i) // 0, 1, 2, 3, 4 for let - block scope is created for all the i 
        //f use var i = 0 - it will print 4, 4, 4 ,4 as i refer to the global reference
    }, i + 1000)
}

//--------------------------------------------------------------------------------------//

//Callback - function passed in other function as an argument
//Eg: Event listener, settimeout, map, filter, resuce
document.addEventListener('click', function(){

})
 

//--------------------------------------------------------------------------------------//