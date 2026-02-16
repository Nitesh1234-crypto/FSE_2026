//
let user={
  name:"Nitesh",
  age:24
}
//1. using object literal
let user1:{name:string,age:number} ={
  name:"Nitesh",
  age:24
}
let user2:{name:string,age:number}={
    name:"sadfgh",
    age:234
}
//2. using interface
interface User{
    name:string,
    age:number,
    city:string
}
let user3:User={
    name:"asdfgh",
    age:2345,
    city:"delhi"
}
//3. using type 
type Person ={
    name:string
}
let p1:Person={
    name:"asdfgh"
}