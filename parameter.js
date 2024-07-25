//  without return 

// function sum(a,b,c){
//     console.log(a,b,c);
//     var sum = a+b+c;
//     console.log(sum);
// }

// sum(1,2,3);



//  with return

// function add(num1, num2){
//     var sum = num1 + num2;
//     return sum;

// }

// var output = add(20,80);
// console.log(output);





// extra

function cost(money){
    var singara = 10;
    var singaraprice = 7;
    var total = singara * singaraprice;
    var back = money - total;

    return back;
}

var output = cost(100);
console.log(output);