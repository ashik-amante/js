// task 1 

function multiply(a,b,c,d){
    var result = a*b*c*d;
    return result;
}

var output = multiply(1,2,3,4);
console.log(output);
    

console.log('new task 2');
console.log('');
console.log('');
// task 2   ...............

function evenOrOdd(number){
    if(number % 2 != 0){
        return 'odd', number *2;
    }
    else{
        return 'even', number/2;
    }
}
var output = evenOrOdd(66);
console.log(output);


console.log('');
console.log('');




// task 3
console.log('task    ......... 3');
console.log('');
console.log('');


function make_avg(array){
    console.log('the size of the array:', array.length);
    var sum = 0;
    for(var i = 0; i< array.length; i++){
        var element = array[i];
        sum = sum + element;
    }
    return sum/array.length;
}
var numbers = [1,2,3,4,5];
var avg = make_avg(numbers);
console.log(avg);



// task 4 
console.log('new pr');
console.log('new pr 4');

function count_zero(bString){
    var zero = [];
    for(i = 0; i<bString.length; i++){
        var element = bString[i];
        if(element == 0){
            zero.push(element)
        }
    }
    return zero.length;

}

var string = '0101110101010110100';
var z = count_zero(string);
console.log(z);



// task 5
console.log('new pr');
console.log('new pr 5');


function odd_even(number){
    if(number % 2 == 0){
        return 'even';
    }
    else{
        return 'odd' ;
    }
}

var eo = odd_even(54);
console.log(eo);