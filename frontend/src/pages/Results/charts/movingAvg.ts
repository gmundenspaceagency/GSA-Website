/**
    * returns an array with moving average of the input array
    * @param array - the input array
    * @param count - the number of elements to include in the moving average calculation
    * @param qualifier - an optional function that will be called on each 
    * @returns Array<number>
    *  value to determine whether it should be used
    */
export default function movingAvg(array:Array<number|null>, count:number, qualifier:Function):Array<number|null>{

    // calculate average for subarray
    var avg = function(array:Array<number|null>, qualifier:Function){

        var sum = 0, count = 0, val;
        for (var i in array){
            val = array[i];
            if (!qualifier || qualifier(val)){
                sum += val ?? 0;
                count++;
            }
        }

        return sum / count;
    };

    var result = [], val;

    // pad beginning of result with null values
    for (var i=0; i < count-1; i++)
        result.push(null);

    // calculate average for each subarray and add to result
    for (var i=0, len=array.length - count; i <= len; i++){

        val = avg(array.slice(i, i + count), qualifier);
        if (isNaN(val))
            result.push(null);
        else
            result.push(val);
    }

    return result;
}