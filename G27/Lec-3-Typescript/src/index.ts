//create a function which accept 1 parameter ---> either number[] or string[];

type numOrStr= number | string
function firstValue(arg:numOrStr[]){
    return arg[0];
}
let val = firstValue(["A","BBB","C"]);
// val.toLowerCase();


//using generics
function firstValue2<T>(arg:T[]){
    return arg[0];
}
let val2 = firstValue2<string>([]);
val2?.toLocaleLowerCase();
let val3 = firstValue2<number>([1,2,3]);
val3?.toString();

//what does ? mark represent---> optional
interface User{
    name:string,
    age:number,
    phone?:number
}

let u1:User={
name:"ghjkl",
age:23,
// phone:678987654567
}
console.log(u1.phone);

let a:number;
// a=undefined;