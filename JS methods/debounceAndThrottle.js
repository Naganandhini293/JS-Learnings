let buttonPressed = document.querySelector(".button")
let buttonPressedCount = document.querySelector(".button-pressed-count")
let buttonTriggeredCount = document.querySelector(".button-trigger-count")

let pressedCount = 0;
let triggerCount = 0;


function myDebounce(cb, delay){
    let timer;
    
    return function(...arguments){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            cb(...arguments)
        }, delay)
    }
}

const myThrottle = (cb, delay)=>{
    let last = 0
    return function(...arguments){
        const now = new Date().getTime()
        if(now - last < delay){
            return
        }else{
            last = now
            return cb(...arguments)
        }
    }
}

const debounceFunction = myDebounce(()=>{
    buttonTriggeredCount.innerHTML = ++triggerCount;
}, 800)

const throttleFunction = myThrottle(()=>{
    buttonTriggeredCount.innerHTML = ++triggerCount;
}, 800)

buttonPressed.addEventListener("click", ()=>{
    buttonPressedCount.innerHTML = ++pressedCount;
    // debounceFunction()
    throttleFunction();
})