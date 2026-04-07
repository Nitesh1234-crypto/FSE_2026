let arr=[1,2,3];
console.log(arr[0])
let obj={
    "0":1,
    "1":2,
    "2":3

}
console.log({...arr})
let arr2 = new Array(5);
console.log({...arr2});
console.log("1" in obj);
console.log("0" in arr);
console.log("0" in arr2);

arr2[0] = 5;
let obj2={

}
obj2.a=10;
obj2[0] = 50

console.log(obj2);

let arr3 = [];
arr3[100] = 50;
console.log(arr3.length);
console.log({...arr3});

let arr4 =  Array.from({length:5});
console.log({...arr4});