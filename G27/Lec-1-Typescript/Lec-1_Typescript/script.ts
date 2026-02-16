//primitive data type ---> number, string, boolean, undefined, null

let a:number;
// console.log(a)
a=10;
console.log(a);

function isAllowedToVote(age:number){
    if(age<18){
        return false
    }
    return true;
}
let result = isAllowedToVote(10);
console.log(result);