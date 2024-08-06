function discount(quantity){
    if(quantity <= 100){
        let total = quantity *100;
        return total
    }
    else if( quantity <=200){
        let total =  quantity * 90;
        return total
    }
    else if(quantity > 200){
        let total = quantity *70;
        return total;
    }
}

console.log(discount(10));
console.log(discount(200));
console.log(discount(1000));