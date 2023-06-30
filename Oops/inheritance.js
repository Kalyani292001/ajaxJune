// prototype inheritance


function Person(fn,ln){
    this.firstName = fn
    this.lastName  = ln
    // this.display = function(){
    //     console.log(this.firstName+this.lastName)
    // }
}

let kalyani  = new Person ("kalyani","hadole")
let aryan  = new Person("aryan","pawar")

console.log(kalyani)
console.log(aryan)

// Every object has one property __proto__  == Parent.Proptype

console.log(kalyani.__proto__=== Person.prototype)
console.log(aryan.__proto__ === Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

kalyani.display()
aryan.display()

console.log(aryan.country)
console.log(kalyani.country)

console.log(kalyani instanceof Person)
console.log(aryan instanceof Person)

console.log(aryan.hasOwnProperty('firstName'))
console.log(aryan.hasOwnProperty('country'))

