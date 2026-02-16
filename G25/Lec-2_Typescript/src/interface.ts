//interface is user to implement class

interface Vehicle{
    brandName:string,
    getBrandName:()=> string
}
class Bike implements Vehicle{
    brandName: string;
    constructor(brandName:string){
        this.brandName=brandName;
    }
    getBrandName():string{
        return this.brandName;
    }

}
class Car implements Vehicle{
    brandName: string;
    constructor(brandName:string){
        this.brandName=brandName;
    }
    getBrandName():string{
        return this.brandName;
    }
    openAirBags():void{
        console.log("air bags opend")
    }
}