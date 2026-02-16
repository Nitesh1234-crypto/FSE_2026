//primitve data type --> number, boolean, string, undefined, null;

let b:undefined;
let c:null;

let a:number;
// console.log(a);
a=10;
let d;
d=10;
d="hello"
// d="hello"

// a="hello world"
console.log(a);
function isAllowedToVote(age:number):boolean{
    if(age<18){
        return false;
    }
    return true;
}

let result = isAllowedToVote(18);
// result="hello"

//function return type;
function print():void{
    console.log("hello world")
}

//type infer

//any type 

let z:any;
z="gfhdjsak";
z=true;
