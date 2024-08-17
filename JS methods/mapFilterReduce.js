const array1 = [10, 5, 1, 3, 8, 7688]
const sampleData = [
    { firstName: "John", lastName: "Doe", age: 28 },
    { firstName: "Jane", lastName: "Smith", age: 34 },
    { firstName: "Michael", lastName: "Johnson", age: 45 },
    { firstName: "Emily", lastName: "Davis", age: 22 },
    { firstName: "David", lastName: "Brown", age: 22 }
];


//--------------MAP method-------------------
function double(x){
    return x * 2
}
const output1 = array1.map(double)
console.log(output1)

const output2 = array1.map(function triple(x){
    return x * 3 
})
console.log(output2)

const output3 = array1.map((num, index, arr)=>{
    console.log(num, index, arr)
    return num.toString(2) //convert the num to binary
})
console.log(output3)



//["John Doe", "Jane Smith", ..]
const fullName = sampleData.map((x)=> x.firstName + " " + x.lastName)
console.log("FULL NAME", fullName)


//POLYFILL for map
//Array.map((num, ind, arr) = {})

Array.prototype.myMap = (function(cb){
    let temp = []
    for(let i =0; i<this.length; i++){
        temp.push(cb(this[i], i, this)) //here this the array that passing while callng this map method
    }
    return temp
})

const polyFillOutput = array1.myMap((x)=>{
    return x*5
})

console.log("POLYFILL MAP OUTPUT", polyFillOutput)



//--------------FILTER methods-------------------------
const wordList = ["abcd", "abcdef", "a", "abc", "abcdefgh"]
const result = wordList.filter((word) =>{
    return word.length > 3
})
console.log(result)

//Get first name of data whose age > 30 using map and filter
const firstName = sampleData.filter((x) => x.age > 30).map((x) => x.firstName)
console.log("FIRST NAME", firstName)

//POLYFILL for FILTER
Array.prototype.myFilter = function(cb){
    let temp  = []
    for(let i = 0; i<this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i])
    }
    return temp
}
const myFilterResult = wordList.myFilter((word) =>{
    return word.length > 3
})

console.log("POLYFILL MYFILTER", myFilterResult)





//--------------REDUCE method-------------------
function fingSum(arr){
    sum = 0
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

const totalsum = fingSum(array1)

//same using reduce
//acc - Accumulator, curr = Current
// sum = acc, arr[i] = curr
// reduce using two param, one is function that used to calculate , second -> iniital value to acc

const totalsum1 = array1.reduce((acc, curr) =>{
    acc = acc + curr
    return acc
}, 0)

console.log(totalsum1)

const maxValue = array1.reduce(((acc, curr)=>{
    if(curr > acc){
        acc = curr
    }
    return acc
}), array1[0])
console.log(maxValue)

//[{22:2}, {28:1}, {34:1},...]
const ageCount = sampleData.reduce((acc, curr, ind, arr)=>{
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log("AGE COUNT", ageCount)

//Get first name of data whose age > 30 using map and filter
const firstNameArr = sampleData.reduce((acc, curr)=>{
    if(curr.age > 30){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log("FIRST NAME USING REDUCE", firstNameArr)


//POLYFILL for REDUCE
Array.prototype.myReduce = function(cb, initialValue){
    let accumulator = initialValue
    for(let i = 0; i < this.length; i++){
        accumulator = accumulator ? cb(accumulator,this[i], i, this) : this[i]
    }
    return accumulator
}
const myReduceFirstNameArr = sampleData.myReduce((acc, curr)=>{
    if(curr.age > 30){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log("POLYFILL MYREDUCE", myReduceFirstNameArr)






//-----------------------OUTPUT BASED QUESTIONS--------------------------------------

const arr1 = [1, 2, 3, 4, 5]

const mapResult = arr1.map((num)=>{
    return num*10
})

const forEachResult = arr1.forEach((num)=>{
    return num*20
})

arr1.forEach((num, ind)=>{
    arr1[ind] = num*30
})

console.log(mapResult, forEachResult, arr1)
