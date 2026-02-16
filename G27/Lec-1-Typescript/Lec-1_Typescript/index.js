function isAllowedToVote(age){
    if(age<18){
        return false;
    }
    return true;
}
let result = isAllowedToVote();
console.log(result)

let user ={
    name:"Nitesh"
}
console.log(user.city)

console.log(isAllowedToVote(user.age))