let buttonA = document.querySelector('button')
buttonA.addEventListener('click',function(){
    getUsers(2)
})

function getUsers(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            response.data.forEach(function (el) {
                //console.log(el)
                document.write(`<h1>${el.first_name + el.last_name}</h1>`)
                document.write(`<p>${el.id}:${el.email}</p>`)
                document.write(`<img src = ${el.avatar}>`)
            })

        })

}