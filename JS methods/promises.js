function subscribe(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Subscribe to the Channle")
        }, 1000)
    })
}


function share(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Share to the Channle")
        }, 10)
    })
}

function like(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Like to the Channle")
        }, 100)
    })
}

const res = subscribe()

//Promise chaining
res.then((res)=>{
    console.log(res)
    return share()
}).then((res)=>{
    console.log(res)
    return like()
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log("ERROR", err)
})


//Promise Combinator
const resonponse1 = Promise.all([subscribe(), share(), like()])
const resonponse2 = Promise.any([subscribe(), share(), like()])
const resonponse3 = Promise.allSettled([subscribe(), share(), like()])
const resonponse4 = Promise.race([subscribe(), share(), like()])

console.log(resonponse1, resonponse2, resonponse3, resonponse4)



//Asyn await

const asyncFunction = async() =>{
    try{
        const message1 = await subscribe()
        const message2 = await like()
        const message3 = await share()
        console.log(message1, message2, message3)
    }catch(err){
        console.log("ERROR", err)
    }
    
}


asyncFunction()