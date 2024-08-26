//this in global space
console.log(this) // window - browser, global - nodeJs ==> basically print global object


//this inside function
function x(){
    console.log("--------", this) // strict mode - undefined or null, not strict - global object
}

//this value by the way function is called
window.x()


//this value inside obejct method - Prints vaue inside the sampleObject
const sampleObject = {
    a: 4, 
    b: 7,
    sam: function(){
        console.log(this)
    }
}
sampleObject.sam()

//this value inside arrow function - prints lexically enclosed context
const sampleObject2 = {
    a: 4, 
    b: 7,
    sam: () => {
        console.log(this)  // globa;
    }
}
sampleObject2.sam()

// this inside call (sahring menthod)
const student1 = {
    name: "Naganandhini",
    printName: function(){
        console.log(this.name)
    }
}
const student2 = {
    name: "Nagaraj"
}
student1.printName.call(student2) // - prints object passing to this object

//this value inside nested arrow function - prints lexically enclosed context
const sampleObject3 = {
    a: 4, 
    b: 7,
    sam: function(){
        const y = () => {
        console.log(this)  // lexical context here is parent context - a, b, sam fn()
        }
        y()
    }

}

sampleObject3.sam()


//this inside DOM element -  reference HTML element


//call, apply, bind

let printFullName = function(place, state){
    console.log(this.firstName + " " + this.lastName)
}

const name1 = {
    firstName: "Naganandhini",
    lastName: "Shanmugam"
}

const name2 = {
    firstName: "Nagaraj",
    lastName: "Shanmugam"
}

// call 
printFullName.call(name1, "Salem", "TamilNadu") //send argument separated by comma

//apply
printFullName.call(name1, ["Salem", "TamilNadu"]) //send argument in array 

//bind
let fullNamefun  = printFullName.bind(name2, "Salem", "TamilNadu") //nid the function so that it can called after
console.log(fullNamefun)
fullNamefun()

