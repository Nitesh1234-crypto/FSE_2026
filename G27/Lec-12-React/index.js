// // window.name="ritik";
// // let user = {
// //     name:"Nitesh",
// //     greet:function(){
// //         console.log("Name is " + " "+this.name);
// //     }
// // }
// // user.greet();
// // let greet = user.greet.bind(user);
// // greet();

// // let u1={
// //     name:"upnit",
// //     // getName:function getName(){
// //     // console.log(this.name)
// // // }
// // }
// // let u2={
// //     name:"shivansh",
// //     // getName:function getName(){
// //     // console.log(this.name)
// // // }
// // }
// // function getName(){
// //     console.log(this.name)
// // }
// // getName();
// // // u1.getName();//"upnit"
// // // u2.getName() ; //"shivansh"

// // //call , apply or bind
// // //explicit binding
// // getName.call(u1);
// // getName.call(u2);

// //how this keyword behave in arrow function


// let user = {
//     name:"Nitesh",
//     greet:
//     ()=>{
//         console.log("Name is " + " "+this.name);
//     }
    
 
// }
// user.greet();

function outer(){
    let a=10;
    function inner(){
        a++;
        console.log(a);
    }
    inner();
}
outer()

