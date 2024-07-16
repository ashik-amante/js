// problems
// 2

// for(i  =0 ; i <= 98; i++){
//     if(i >= 58 && i<= 98){
//         console.log(i);
//     }
// }


// 3
// show all even number btw 412 to 356 

// for(i = 412; i<= 456; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

 
// 4 show all odd number btw 581 to 623


// for(i = 581; i <= 623; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 6. Declare an array for all the topics that you have learned last few days display then as output


// var subjects = ['array', 'loop', 'if-else', 'for'];
// for(i = 0; i< subjects.length; i++){
//     var elemenr = subjects[i];
//     console.log(elemenr);
// }

// 7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop


// var phones = ['samsung', 'nokia', 'iphone','texhno'];
// var i = 0;
// while(i < phones.length){
//     var element = phones[i]
//     console.log(element);
//     i++
// }



// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44


// for(i = 30; i <= 86; i++){
//     if( i> 44){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }




// 9. Write the price of the books that you have. Display the prices if the prices is lower than 200


// var price = [23,45,545,555,133,54,5];

// for(i = 0; i< price.length; i++){
//     var element = price[i];
//     if(element > 200){
//         continue;
//     }
//     else{
//         console.log(element);
//     }
// }




//  problem            for                  array

// Add an element at the first position of an array

// var numbers= [2,3,4,5,6];

// var newelement = 1;
// numbers.unshift(newelement);

// console.log('new aray :', numbers);



// 12. Remove the first element of an array

// var array = [1,2,3,4,5,6,7];

// var removeelement = array.shift();

// console.log('update arrray :' , array);
// console.log('remove element :', removeelement);



//  condition ]


// 4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac if more than 60,000 then you will by gaming laptop

var taka  = 40000;

if(taka >= 80000){
    console.log('mac');
}
else if(taka >=60000){
    console.log('gaming laptop');
}
else{
    console.log('dont have enough money ');
}