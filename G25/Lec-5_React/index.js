window.name="Nitesh"

let user={
    name:"Ritik",
    greet:function(){
        console.log(this.name)
    }
}
user.greet()
let greet = user.greet;
greet()//name-->Ritik