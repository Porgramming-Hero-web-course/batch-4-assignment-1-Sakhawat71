{
    // problem 7 : get Car Age 

    class Car {

        constructor(
            public make: string,
            public model: string,
            public year: number
        ) { }

        getCarAge(){
            const currentYear = new Date().getFullYear;
        }

    }

    const car = new Car('s','y',4)
    console.log(car.getCarAge());

}