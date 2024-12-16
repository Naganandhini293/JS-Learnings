// ES5 -  Var ES6 - let, const and var
//Scope - where decalred variable can be accessed
// - block - let, const, global - var
//This block scope and let, const allow us to create variable shadowing

//Can't able to redecrale let and const in same scope

var a;
var a;


let b;
//let b; //this is can;t allowed

const c = 9; //const can't be declared without variable initialization
// c = 10 // assignment to the const variable is not allowed


//Hoisting -variable and function declaration are brought to top of the execution
//Creation phase - the variable and function are declared are in this phase so can be access var variable and function
//Temporal dead zone - Let and const are declared in block scope, it a time between declaration and initialization

console.log(temp)
var temp  = 10;
// can't ab;e to access before initialization
//console.log(d) -> throws error
let d = 9;


function tmp(){
    console.log(temp); // undefined - first check in local EC, which is undefined in this case
    var temp = 20
}
tmp()

