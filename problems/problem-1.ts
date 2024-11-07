{
    // provlem 1 sumArray

    const sumArray = (array: number[]): number => {

        return array.reduce((pre: number, curr: number): number => pre + curr, 0)

    }

    const myArray : number[] = [1,5,9,8,7];
    console.log(sumArray(myArray));






    // 
}