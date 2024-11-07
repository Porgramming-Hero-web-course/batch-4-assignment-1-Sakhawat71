{
    // problem 4 : calculate Shape Area


    // 3 type here : TCircle TRectangle TShape

    type TCircle = {
        shape: "circle";
        radius: number;
    };

    type TRectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type TShape = TCircle | TRectangle;



    const calculateShapeArea = (shapeProp: TShape): number => {

        const shape = shapeProp.shape;

        if (shape === 'circle') {

            const result = (Math.PI * (shapeProp.radius ** 2));
            return parseFloat(result.toFixed(2));

        }
        else if (shape === 'rectangle') {

            return (shapeProp.height * shapeProp.width);

        }
        else {
            return 0;
        }
    }



    const circleArea = calculateShapeArea({
        shape: "circle",
        radius: 5,
    })



    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    })

    // console.log(circleArea, rectangleArea)

}