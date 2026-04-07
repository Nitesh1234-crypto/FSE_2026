// arg ---> string[] or number[]

//string[] | number[] ----> (string | number)[]
type strOrNum = string | number | boolean
function firstValue(arg:strOrNum[]){
   return arg[0]
}
let val = firstValue(["a","b","c"]);
let val2 = firstValue([1,2,3]);
let val3 = firstValue([1,"b",3]);

//val ---> a;
// val.toUpperCase();

//generic
function firstValue2<T>(arg:T[]){
    return arg[0];
}

let resultVal = firstValue2<string>(["a","b","c"]);
let resultVal2 = firstValue2<number>([1,2,3,4]);
let resultVal3 = firstValue2<string>([])
resultVal?.toUpperCase();
resultVal2?.toString();

//HashMap<> map = new HashMap<>();
// map1
// 1:[],
// 2:[],
// 3:[]

// map2
// "a":2,
// "b":3

//? 

//requirement --> if user dont want phone dont store it
interface User{
   readonly name:string,
    email:string,
    phone?:number //optional
}
let user:User ={
    name:"fghjkl",
    email:"ghjakls",
    phone:456789
}
// user.name="fghkjljfd"
let user2:User={
    name:"fhkj",
    email:"dfhkjlkljh",
    // phone:undefined
}
console.log(user2.phone)

//read only