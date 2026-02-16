//object
// let a=10
let user ={
    name:"Nitesh",
    age:24
}

//1. using object literal

let user2:{name:string,age:number}={
    name:"Ritik",
    age:25
}
let user3:{name:string,city:number};
// console.log(user2.city)

//2. using interface
interface User{
    name:string,
    age:number,
    city:string
}
let user4:User={
    name:"dasfdgh",
    age:23,
    city:"adfsgdh"
}
//using type
type Person ={
    name:string,
    age:number,
    email:string
}
let p1:Person={
    name:"ASDFG",
    age:12,
    email:"asdfg"
}

//array 

let numArr:number[] =[1,2,5];
let usersData:User[]= [{
    name:"dasfdgh",
    age:23,
    city:"adfsgdh"
},
{
    name:"Ritik",
    age:25,
    city:"faridabad"
},
{
    name:"Nitesh",
    age:24,
    city:"delhi"
}
]
// function printUserName(users){

// }
// printUserName(usersData)