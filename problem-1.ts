
{
    function sumArray (array:number[]) : number {

        let sum = 0;
        array.map((num : number) => sum += num);
        return sum;
    }

    const output = sumArray([1,2,3,4,5,6]);
    console.log(output);
    
}