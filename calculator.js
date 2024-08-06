function add(a,b){
    return a+b;
}

function subtrac(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}

function calculator(a,b, operation){
    if(operation === 'add'){
        return add(a,b)
    }
    else if(operation === 'subtrac'){
        return subtrac(a,b)
    }
    else if(operation === 'multiply'){
        return multiply(a,b)
    }
    else if(operation === 'division'){
        return division(a,b)
    }
    else{
        return 'you can only perform add, sub,mul and division'
    }
}

console.log(calculator(30,4, 'multiply'));
console.log(calculator(30,4, 'add'));
console.log(calculator(30,4, 'subtrac'));
console.log(calculator(30,4, 'division'));