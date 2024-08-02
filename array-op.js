function sumOfnum(array){
    let sum = 0;
    for(const  number of array){
        sum = sum + number;
    }
    return sum;
}

var number = [1,2,4,5];
var result = sumOfnum(number);
console.log(result);
