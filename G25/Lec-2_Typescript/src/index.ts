//difference between type and interface  --> to give type to object

//Union type   ->  combination of multiple type; *cannot do this using interface

type numOrStr = number | string | boolean;
// let a:number;
// a=10;
// // a="hello"
let a:numOrStr;
a=10;
a=true;
a="hello";

type role = "user" | "admin";

let r:role;
r="admin";
r="user";
// r="dfghjkl"
interface Emp{
    name:string,
    empId:string,
    salary:number,
    phone:number
}
interface TeamLead{
   name:string,
    empId:string,
    salary:number,
    projectId:string 
}

type EmpOrTeamLead = Emp | TeamLead;

let e:EmpOrTeamLead={
    name:"Nitesh",
    empId:"gfhj",
    salary:234567,
    phone:46578976,
    projectId:"adsfg"
}

//intersaction
type empAndTeamLead = Emp & TeamLead;
let e1:empAndTeamLead ={
    name:"gfhjkl",
    empId:"dfghjk",
    salary:12345678,
    phone:123456,
    projectId:"dsfgh"
}


//2. 
//interface are expandable
interface User{
    name:string,
}
interface User{
    age:number
}
let u:User={
    name:"nitesh",
    age:24
}
//type is not expandable
// type Person={
//     name:string
// }
// type Person={

// }
