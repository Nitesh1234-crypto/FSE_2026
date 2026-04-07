//type narrowing

//union --type widening

function someValue(arg:string | number | boolean){
   if(typeof arg =="string"){
        return arg.toLowerCase(); 
   }
   return arg;
}

someValue("ABBBDFSFSFS");
someValue(12345);
someValue(true)

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
    name:"sadfg",
    empId:"sadfgh",
    salary:234576,
    projectId:"dsfgh"
}
function retunPhone(arg:EmpOrTeamLead){
    if("phone" in arg){
        return arg.phone;
    }
    return 0;

}
retunPhone(e);
//instace of