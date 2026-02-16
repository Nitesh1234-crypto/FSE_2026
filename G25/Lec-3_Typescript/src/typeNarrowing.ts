
//typeNarrowing
function foo(arg:string| number | boolean){
    if(typeof(arg)=="string"){
      return  arg.toUpperCase();
    }
    return arg;
}
foo("a");

interface User{
    name:string,
    email:string,
    password:string,
    phone?:number
}
let user1:User={
    name:"sdfgh",
    email:"sdfgh",
    password:"asdfghjkl",
    phone:1234567
}
let user2:User={
    name:"sdfgh",
    email:"sdfgh",
    password:"asdfghjkl",
 
}
function getPhone(user:User){
    if("phone" in user){
    return user.phone;
    }
    return 0;
}
let phone:number=getPhone(user2);