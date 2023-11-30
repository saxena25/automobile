function autoMobile(brand, year,fueltype){
    this.brand = brand;
    this.year = year;
    this.fueltype = fueltype;
}

autoMobile.prototype.engine = function(){
    console.log(`${this.brand} Engine is Using ${this.fueltype}`);
}

function Fourwheel(brand,year,fueltype,nofwheels){
    autoMobile.call(this,brand,year,fueltype);
    this.nofwheels = nofwheels;
}

Object.setPrototypeOf(Fourwheel.prototype,autoMobile.prototype);

Fourwheel.prototype.checklight = function(){
    console.log(`${this.brand} car is showing Engine CheckLight, manufactured in year ${this.year} having ${this.nofwheels} wheels`);
}

let car1 = new Fourwheel('BMW','2021','CNG',4);

car1.engine();
car1.checklight();
