function Animal(name,breed){
    this.name=name;
    this.breed=breed;
}
Animal.prototype.getAnimalName=()=>{
    return this.name;
}
let a1= new Animal("Dog","husky");
console.log(a1);
let a2= new Animal("cat","orangeCat");
console.log(a2);
let obj1={
    a:10
}
console.log(obj1);
