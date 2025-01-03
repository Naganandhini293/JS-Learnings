const user = {
    name: "Naganandhini",
    age: 23,
    "hobbies that I like": "Reading, Drawing",
};

console.log(user);
console.log(user["hobbies that I like"]);

//delete
delete user.age;

//IIFE
const func = (function (a) {
    delete a; //won't delete the a coz delete key word is only applicable for deleting the object
    return a;
})(5);

console.log(func);

//Dynamic naming - Property
const property = "nickName";
const value = "Nandhu";
const user2 = {
    [property]: value,
};

console.log(user2, user2.nickName);

//looping the object
for (key in user) {
    console.log("KEY", key);
    console.log(user[key]);
}

//Output based

let nums = {
    a: 2,
    b: 100,
    title: "Number",
};

function multipliedByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        }
    }
}

multipliedByTwo(nums);
console.log(nums);

//Output based
const a = {};
const b = { key: "b" }; //
const c = { key: "c" };

a[b] = 123; // only string can be assigned as key to the object
a[c] = 456; //Here we are assigning object to the key that tried to convert that as string but
//end up converting a[object object]:123, a[object object]:456

console.log(a[b]);
console.log(a[c]);

console.log(a);

//JSON.stringfy and JSON.parse -  these methods are mostly used in localstorage
const strObj = JSON.stringify(user);
console.log(strObj);
console.log(JSON.parse(strObj));

localStorage.setItem("test", strObj);
console.log(localStorage.getItem("test"));
console.log(JSON.parse(localStorage.getItem("test")));

const settings = {
    userName: "Naganandhini",
    level: 19,
    health: 90,
};

//this only stringyfy the obeject preperty that is mentioned in the array
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

//Spread operator -  basically used to spread object/ array
console.log([..."Naganandhini"]); //String will spread as indivdual letter in array ['N', 'A',...]

const userWithAge = {
    ...user,
    age: 24,
};
console.log(userWithAge);

//arrow and normal function inside the object
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2; //Have refer to shape radius
    },
    perimeter: () => 2 * Math.PI * this.radius, //refer to global radius
};

console.log(shape.diameter());
console.log(shape.perimeter()); //NAN

//Destructuring
const name = "Nandhu";
const { name: name2 } = userWithAge;
console.log(name2);

const user3 = {
    ...user,
    fullName: {
        first: "Naganandhini",
        last: "shanmugam",
    },
};

const {
    fullName: { first, last },
} = user3;

console.log(first + " " + last);

//Object referencing
let d = { greeting: "Hyeeee!" };
let e;
e = d; //We are giving the reference of d to e - so change in d affect e
d.greeting = "Hellllloooooo";
console.log(e.greeting);

let person = { name1: "Nandhu" };
const members = [person];
// person = null;

console.log(members); //prints th eoriginal object, as we asign object in array 0 index
person.name1 = null;
console.log(members); //prints name as null

const value1 = { number: 10 };
const multiply = (x = { ...value1 }) => {
    console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20 - clone
multiply(value1); // 20 - reference
multiply(value1); //  40

//shallow copy -  have the reference to the copied object
//changes made in new object affect the original one

//Deep copy - create clone of the object

const user4 = {
    name: "Nandhu",
    age: 23,
};

// const objClone = Object.assign({}, user4);
// const objClone = JSON.parse(JSON.stringify(user4));
const objClone = { ...user4 };

objClone.age = 24;
console.log(user4, objClone);
