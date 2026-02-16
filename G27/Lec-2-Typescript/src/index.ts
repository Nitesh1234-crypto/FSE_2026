//union type
// let a = 10;
// a="18"
type numberorstring = number | string;
let a:numberorstring;
a=10;
a="18"

interface Employee{
 name:string,
 empId:string,
 age:number,
 dept:string,
 salary:number,
 phone:number
}
type TeamLead={
 name:string,
 empId:string,
 age:number,
 dept:string,
 salary:number, 
 projectId:number,
 projectName:string,
 isActive:boolean
}

//union of employee and teamlead
type EmpOrTeam = Employee | TeamLead;

let emp1:EmpOrTeam ={
    name:"Nitesh",
    empId:"ABC_2025_cb",
    age:24,
    dept:"PM",
    salary:2345,
    phone:9999999999,
    projectId:23454345,
    projectName:"fgdjfdjf",
    isActive:true

}

//intersaction type ---> &
type EmpAndTeam = Employee & TeamLead
let emp2:EmpAndTeam ={
    name:"Nitesh",
    empId:"ABC_2025_cb",
    age:24,
    dept:"PM",
    salary:2345,
    phone:9999999999,
    projectId:23454345,
    projectName:"fgdjfdjf",
    bloodGroup:"A+",
    isActive:true

}

//can i create union or intersaction type using interface
// interface EmpOrTeam2 =Employee | TeamLead;

//2. interface is expandable but not type
interface Employee{
    bloodGroup:string
}
let emp3:Employee={
    name:"Ritik",
    empId:"dsfg21345",
    age:25,
    dept:"dsfghg",
    salary:1234456,
    phone:123456754,
    bloodGroup:"A+"
}
console.log(emp1.age);
// type TeamLead={
    
// }