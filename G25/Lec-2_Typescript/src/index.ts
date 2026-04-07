//difference between type and interface

// suppose you want to create a varibale which can store number as well as string

// let a =10;
// a="Hello"

//Union type ---> combine multiple type using | operator



type numOrStr = number | string;
let x:numOrStr ;
x=10;
x="18";
x="hello world";
// x=true;
type Move = "up" | "down" | "left" | "right";

function play(move:Move){
    if(move=="up"){

    }else if(move=="down"){

    }else if(move=="left"){

    }else if(move=="right"){

    }
}
play("up")

//intersaction type by combining multiple type using &;
interface Employee{
    empId:string,
    name:string,
    salary:number,
    phone:number
}
type TeamLead={
    empId:string,
    name:string,
    salary:number,
    projectId:string 
}

//create a type which has Employee property or TeamLead or both;
//union
type EmpOrTeamLead = Employee | TeamLead;

let obj:EmpOrTeamLead={
   empId:"cb2023_Project" ,
   name:"Nitesh",
   salary:1234567,
   projectId:"sadfgh",
   phone:2134567

}



