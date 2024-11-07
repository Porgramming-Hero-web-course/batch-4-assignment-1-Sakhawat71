{
    // problem 2 : removeDuplicates

    const removeDuplicates = (array: number[]): number[] => {
        return array.filter((num,index )=> array.indexOf(num) === index);
    }

    // console.log(removeDuplicates([4,4,8,8,6,7,5,6]));

    //
}