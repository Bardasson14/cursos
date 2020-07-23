function Car(maxSpeed=10, delta = 5) {
    //private attribute
    let currentSpeed = 0;

    this.speedUp = ()=>{
        if (currentSpeed + delta <= maxSpeed){
            currentSpeed += delta;
        }

        else{
            currentSpeed = maxSpeed;
        }
    };

    this.getCurrentSpeed = ()=>{
        return currentSpeed;
    }
}

const uno = new Car();
uno.speedUp();
console.log(uno.getCurrentSpeed());

const ferrari = new Car(350,20);
ferrari.speedUp();
console.log(ferrari.getCurrentSpeed());