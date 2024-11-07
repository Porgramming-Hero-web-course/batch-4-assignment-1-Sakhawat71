{
    // problem 7 : get Car Age 

    class Car {

        constructor(
            public make: string,
            public model: string,
            public year: number
        ) { }

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }

    }

    const car = new Car("Honda", "Civic", 2018);
    // console.log(car.getCarAge());

}