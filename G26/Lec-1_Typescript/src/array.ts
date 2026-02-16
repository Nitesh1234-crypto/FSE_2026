let numArr:number[] =[1,2];
// int[] arr
type User={
    name:string,
    age:number
}
let users:User[]=[{
    name:"Nitesh",
    age:24
},
{
    name:"Ritik",
    age:25
},
{
    name:"Pratiyush",
    age:25
},
]

function printUserName(users:User[]):void{
    users.forEach((user:User):void=>{
        console.log(user.name)
    })

}
printUserName(users)