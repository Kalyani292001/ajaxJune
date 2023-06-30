//---------------------------------

function getUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    }).then(function(response){
        return response.data[0].id
    })
}

function getUserId(id){
    fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
       let el = response.data
       document.write(`<h1>${el.first_name + el.last_name}</h1>`)
       document.write(`<p>${el.id}:${el.email}</p>`)
       document.write(`<img src = ${el.avatar}>`)
    })
}


// getUsers(1)
// .then(function(id){
//     getUserId(id)
// })

async function getSingleUser(pageNumber){
    let id  = await getUsers(pageNumber)
    await getUserId(id)
}
getSingleUser(1)