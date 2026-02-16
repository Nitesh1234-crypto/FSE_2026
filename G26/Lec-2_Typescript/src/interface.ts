// we use interface to implements class

interface Vehichle{
    model:string,
    color:string,
    mileage:number,
    topSpeed:number,
    brand:string,
    wheel:number,
    getTopSpeed:()=>number,
    // openSeatBealt:()=>void,
    // openAirBags:()=>void
}

class Car implements Vehichle{
    model:string;
    color:string;
    mileage:number;
    topSpeed:number;
    brand:string;
    wheel:number;
    constructor(model:string,color:string,mileage:number,topSpeed:number,brand:string,wheel:number){
        this.brand=brand;
        this.color=color;
        this.mileage=mileage;
        this.topSpeed=topSpeed;
        this.wheel=wheel
        this.model=model
    }
    getTopSpeed():number{
        return this.topSpeed
    }
    openAirBags(){
        console.log("air bag opened")
    }
    openSeatBealt(){
        console.log("seatbelt opened")
    }
}

class bike implements Vehichle{
     model:string;
    color:string;
    mileage:number;
    topSpeed:number;
    brand:string;
    wheel:number;
    constructor(model:string,color:string,mileage:number,topSpeed:number,brand:string,wheel:number){
        this.brand=brand;
        this.color=color;
        this.mileage=mileage;
        this.topSpeed=topSpeed;
        this.wheel=wheel
        this.model=model
    }
    getTopSpeed():number{
        return this.topSpeed
    }
    // openAirBags(){
    //     // console.log("air bag opened")
    // }
    // openSeatBealt(){
    //     console.log("seatbelt opened")
    // }
}
let bikeObj :bike = new bike()