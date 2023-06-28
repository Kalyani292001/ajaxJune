// OOps Types
// 1 Object literal
// 2 Function constrautor
// 3 Es6 class
// 4 object.create()

// object literal

let Kalyani = {
    firstName: "Kalyani",
    lastName: "Hadole",
    age: 23
}

console.log(Kalyani)

// function constructor

function Person(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag

    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let Aryan = new Person("Aryan", "Pawar", 12)
console.log(Aryan)
Aryan.display()

// Es6 class

class PersonA {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }

    display() {
        console.log(this.firstName + this.lastName)
    }
}

let dhanvi = new Person("Dhanavi", "Bangal", 7)
console.log(dhanvi)
dhanvi.display()


// object.create()

let obj = {
    init: function (fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    },

    display: function () {
        console.log(this.firstName + this.lastName)
    },
    country: "India"
}

let Prasad = Object.create(obj)
Prasad.init("Prasad", "Pawar", 13)
console.log(Prasad)
Prasad.display()
console.log(Prasad.country)

// program2

let objA = {
    init: function (fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    },
    display: function () {
        console.log(this.firstName + this.lastName)
    },
    langauage:"Marathi"
}

let amruta=Object.create(objA)
amruta.init("Amruta","pawar",28)
console.log(amruta)
amruta.display()
console.log(amruta.langauage)
