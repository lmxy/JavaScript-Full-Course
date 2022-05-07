// get = binds an object property to a function
//       when that property is accessed

class Car{
    constructor(power){
        this._gas = 50;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        if(this._gas == 50){
            return `${this._gas}L FULL`;
        }
        else if (this._gas == 0){
            return `${this._gas}L EMPTY!!`;
        }
        return `${this._gas}L (${this._gas /50 *100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50
        }
        else if(value < 0){
            value = 0
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = -30;

console.log(car.power);
console.log(car.gas);