// object literal 

let info = {
    firstName:"kalynai",
    lastName:"hadole",
    age:24
}

// retrive
console.log(info.firstName)
console.log(info['firstName'])

// update 
info.firstName = "amruta"
info['firstName'] = "aryan"


// delete 
delete info.firstName
delete info['lastName']

// add
info.city = "pune"
info['language'] = "hindi"

// loop
let vehicle = {
    color:"red",
    type:"sedane"
}

for(let key in vehicle){
    console.log(key,vehicle[key])
}

for(let key of Object.keys(vehicle)){
    console.log(key)
}

for(let val of Object.values(vehicle)){
    console.log(val)
}

for(let kv of Object.entries(vehicle)){
    console.log(kv)
}


// function constructor

function Person(fn,ln,age){
    this.firstName=fn
    this.lastName=ln
    this.age=age

    this.display=function(){
        console.log(this.firstName+this.lastName)
    }
}

let kalyani=new Person("kalyani","hadole",23)
console.log(kalyani)
kalyani.display()


