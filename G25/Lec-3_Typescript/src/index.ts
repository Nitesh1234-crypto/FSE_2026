//type anyvar = (number | string | boolean)[];
//number[] | string[] | boolean[]

type numStrBool = number | string  | boolean
function firstValue(arg:numStrBool[]):numStrBool | undefined{
    return arg[0];
}

let res1= firstValue([]);
let res2 = firstValue(["a","cd","b"]);
let res3= firstValue([true,false,false]);
// let res4 = firstValue([1,"b",true]);

//res2=="a";
// res1?.toString();
// res2.toUpperCase();
// res2?.toString();

//union and intersaction , information about type lost--> union does not preserved type

function firstValueGeneric<T>(arg:T[]){
    return arg[0];
}
let out1= firstValueGeneric<string>(["a","bd","c"]);

out1?.toUpperCase();

// ? is used to make property optional;
interface User{
    readonly adharNumber:number,
    name:string,
    email:string,
    password:number,
    phone?:number
}
let user:User={
    adharNumber:456789086,
    name:"asdfg",
    email:"asdfghj",
    phone:23456,
    password:234567
}
let user2:User={
    adharNumber:45678986,
    name:"asdfg",
    email:"asdfghj",
    password:234567
}
// user2.adharNumber =3456789876545;