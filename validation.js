function multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'enter a valid number '
    }
    return num1 * num2;

}

console.log(multiply('we',4));

// .............................................................

function fullName(firstName, lastName){
    if (typeof firstName !== 'string' || typeof lastName !== 'string'){
        return ' must enter a string';
    }
    let full = firstName + ' ' + lastName;
    return full
}

console.log(fullName('Abdullah Al', 45));

// .....................................................................

function getprice(products){
    if(typeof products !== 'object'){
        return 'pls provide an object'
    }
    return products.price
}

let obj = {name: 'janina ', price:300, color:'red'}
console.log(getprice(obj));

// ....................................................

function cart(product){
    if(Array.isArray(product) === false){
        return 'enter an array'
    }
    let second = product[1];
    return second
}

console.log(cart({name:'ashik', roll: 53}));