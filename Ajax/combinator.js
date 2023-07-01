// promise.all()
// program 1
async function proAll() {
    let a = await Promise.all([
        Promise.resolve('hello'),
        Promise.resolve('hi'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(a)
}
//proAll()


// program 2
async function proAll() {
    let a = await Promise.all([
        Promise.resolve('hello'),
        Promise.resolve('hello'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    return a
}
// proAll()
//     .then(function (res) {
//         console.log(res)
//     })
//     .catch(function (res) {
//         console.log(res)
//     })


//----------------------------

// function getUserId(id) {
//     fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (response) {
//             console.log(response)
//             return response.json()
//         })
//         .then(function (response) {
//             let el = response.data
//             document.write(`<h1>${el.first_name + el.last_name}</h1>`)
//             document.write(`<p>${el.id}:${el.email}</p>`)
//             document.write(`<img src = ${el.avatar}>`)
//         })
// }


async function getUsers() {
    let b = await Promise.all([
        getUserId(7),
        getUserId(3),
        getUserId(2),

    ])
    return b
}

// getUsers()
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function () {
//         console.log('error ocuured')
//     })



// promise.race()

// give first occurance condition is resolve aur reject

// program 1
async function getR() {
    let s = Promise.race([
        Promise.resolve('Hello'),
        Promise.reject('Hi'),
        Promise.reject('Bye')
    ])
    return s
}

// getR().then(function(e){
//     console.log(e)
// })
// .catch(function(e){
//     console.log(e)
// })

// program 2

async function getR() {
    let k = Promise.race([
        new Promise(function (resolve, reject) {

            setTimeout(function () {
                resolve('after 3sec')
            }, 3000),
    
                setTimeout(function () {
                    reject('after 2sec')
                }, 2000)
        })
    ])
    
    return k

}

// getR().then(function(e){
//     console.log(e)
// })
// .catch(function(e){
//     console.log(e)
// })


// promise.any()
// give first resolve condition
// program 1

async function getA() {
    let s = Promise.any([
        Promise.reject('Hi'),
        Promise.resolve('Hello'),
        Promise.reject('Bye')
    ])
    return s
}
// getA().then(function (e) {
//     console.log(e)
// })
//     .catch(function (e) {
//         console.log(e)
//     })


// Promise.allSettled()
// give both consition resolve or reject
async function getS() {
    let a = Promise.allSettled([

        Promise.resolve("hello"),
        Promise.reject("bye"),
        Promise.resolve("hello2"),
        Promise.reject("bye2"),

    ])
    return a 
} 
getS()
.then(function(e){
    console.log(e)
})