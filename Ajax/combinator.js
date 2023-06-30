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
proAll()
    .then(function (res) {
        console.log(res)
    })
    .catch(function (res) {
        console.log(res)
    })


//----------------------------

function getUserId(id) {
    fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
            let el = response.data
            document.write(`<h1>${el.first_name + el.last_name}</h1>`)
            document.write(`<p>${el.id}:${el.email}</p>`)
            document.write(`<img src = ${el.avatar}>`)
        })
}


async function getUsers() {
    let b = await Promise.all([
        getUserId(7),
        getUserId(3),
        getUserId(2),

    ])
    return b
}

getUsers()
    .then(function (response) {
        console.log(response)
    })
    .catch(function () {
        console.log('error ocuured')
    })