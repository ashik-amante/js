function even(array){
    var sum = 0;
    for(var num of array){
        if(num % 2 == 0){
            sum = sum + num;
        }
        
    }
    return sum;
}

var number = [1,2,3,4,5];
var result = even(number);
console.log(result);


// break    new code ...............
console.log('break    new code ');


function evenarray(array){
    var even =[];
    for(var num of array){
        if(num % 2 == 0){
            even.push(num)
        }
    }
    return even;
}

var number  = [1,2,3,4,5,6,7,8,9,0];
var output = evenarray(number);
console.log(output);