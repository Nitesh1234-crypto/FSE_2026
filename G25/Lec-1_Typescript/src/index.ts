function isAllowedToVote(age:number):boolean{
    if(age<18){
        return false;
    }
    return true;
}
let result:boolean = isAllowedToVote(18);
console.log(result)