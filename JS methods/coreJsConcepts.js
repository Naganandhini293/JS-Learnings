//Function currying 
//using bind
let calculateVolumeWithBind = function(length, breadth, height){
    console.log( length * breadth * height);
}
let vol = calculateVolumeWithBind.bind(this, 3)
vol(4, 5)

//using closure
function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            console.log(length * breadth * height);
        }
    }
}
calculateVolume(4)(5)(6);

//sum(1)(2)(3)....
function sumCur(a){
    return function(b){
        return b ? sumCur(a+b) : a
    }
}

//

const SumCurrWithArrow = (a)=>(b)=> b? SumCurrWithArrow(a+b) : a

const nCurrying = SumCurrWithArrow(1)(2)(3)(4)(5)(8)
console.log(nCurrying())