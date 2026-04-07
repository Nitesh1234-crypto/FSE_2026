function outer(){
    let a=10;
    function inner(){
        a++;
        console.log(a);
    }
   return inner;
}
let fn=outer();
let fn1=outer();
fn();
fn1();