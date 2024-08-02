// prob 1 

// function foo(){
//     console.log('foo');
//     bar();
// }
// function bar(){
//     console.log('bar');
// }

// foo();

// prob2 

// function makeAvg(num1, num2,num3){
//     var sum = num1 + num2 + num3;
//     var avg = sum/3;
//     return avg;
// }

// var output = makeAvg(1,2,3);
// console.log(output);


// prob 33333333333333333333333333333333333333

function makeAvg(array){
    if(array.length == 0){
        return 0;
    }
    var sum = 0;
    for(i = 0; i < array.length; i++){
        var number = array[i];
        sum += number;
        var avg = sum/array.length;
    }
    return avg;
}

var numbers = [1,2,3];
var output = makeAvg(numbers);
console.log(output);