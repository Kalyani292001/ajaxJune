// Promise
// execution of async code to sync code ===>better way ==> Promise

// program 1

let promise1=new Promise(function(resolve,reject){
    let a=20
    let b=10
    if(a==b){
        resolve("a is greater")
    }else{
        reject("b is greater")
    }
})
// consuming the promise
promise1.then(function(a){
console.log(a)
},function(b){
console.log(b)
})

// program 2

let promise2=new Promise(function(resolve,reject){
let name="Kalyani"
if(name.includes("K")){
    resolve("name is present")
}else{
    reject("something is missing")
}
})

promise2
.then(function(aa){
console.log(aa)
},function(bb){
    console.log(bb)
})


// program 3

let promise3=new Promise(function(resolve,reject){
    let a=10
    let b=20

    if(a>b){
        resolve("a is greater")
    }else{
        reject("b is greater")
    }
})

// consuming by using .then(), .catch() , .finally

promise3
.then(function(response){
console.log(response)
})
.catch(function(res){
console.log(res)
})
.finally(function(r){
console.log("it will run")
})

// program 4

let promise4=new Promise(function(resolve,reject){
    let city="Pune"

    if(city.includes("p")){
        resolve("City is present")
    }else{
        reject("city is not present")
    }
})

promise4
.then(function(q1){
console.log(q1)
return "kalyani"
})
.then(function(q2){
console.log(q2)
})
.catch(function(q3){
console.log(q3)
})
.finally(function(q4){
console.log("this case is run always")
})
