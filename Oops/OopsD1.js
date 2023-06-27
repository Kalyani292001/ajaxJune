// Oops


// Javascript 
// Object literal ----- one memory


let info = {
    // property:value
    // key:valye
       firstName:"chinmay",
       lastName:"deshpande",
       age:33,
       skills:["python","java","javascript"],
       firstName:"tanmay",
       display:function(){
           console.log(this.firstName + this.lastName)
       }
   }
   
   console.log(info)
   info.display()
   // Object -- the property will be always string 
   // Object will not store the value by index
   // There cannot be duplicate property inside a object
   
   // Four basic operation on object
   
   let info2 = {
       firstName:"sarika",
       lastName:"pansare",
       age:26,
       skills:["python","java","javascript"]
   }
   
   // Retrive  (dot notation and bracket notation)
   
   console.log(info2.firstName)
   console.log(info2['firstName'])
   
   // Update (dot notation and bracket notation)
   
   
   info2.lastName = "dani"
   info2['age'] = '28'
   
   // Add(dot notation and bracket notation)
   info2.city = "pune"
   info2['language'] = "hindi"
   console.log(info2)
   
   // Delete(dot notation and bracket notation)
   delete info2.firstName
   delete info2.lastName
   console.log(info2)
   
   
   //object  -- loop
   let cities = ['pune',"mumbai","banglore", "kolkata"]
   for(let i = 0 ; i < cities.length ; i++){
       //console.log(i)
       console.log(cities[i])
   }
   
   // defining one object 
   
   
   let vehicle = {
       color:"red",
       type:"SUV",
       city:"pune",
       regNo:123
   }
   
   console.log(vehicle[0])
   // dot notation will not work inside the  in loop
   // bracket notation will work
   
   for(let key in vehicle){
      // console.log(key)
       //console.log(vehicle.key)
       console.log(key , vehicle[key])
   }
   
   // item
   vehicle = {
       color:"red",
       type:"SUV",
       city:"pune",
       regNo:123
   }
   for(let x of Object.keys(vehicle)){
       console.log(x)
   }
   for(let y of Object.values(vehicle)){
       console.log(y)
   }
   for(let z of Object.entries(vehicle)){
       console.log(z)
   }