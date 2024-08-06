let price = [1222,2300,4500,760,6767,90000];

function cheapest(array){
    let min = array[0];

    for(let num of array){
        if(num < min){
            min = num
        }

    }
    return min;
}

console.log(cheapest(price));


let mobile = [
    {name : 'samsung', price: 2223000, camera: '12mp', color: 'black', quantty:3},
    {name : 'iphone', price: 233000, camera: '12mp', color: 'black', quantty:3},
    {name : 'xiomi', price: 2300, camera: '12mp', color: 'black', quantty:3},
    {name : 'oppo', price: 23000, camera: '12mp', color: 'black', quantty:3},
]

function getcheapPhone(phones){
    let minimum = phones[0];
    for(let phone of phones){
        if(phone.price < minimum.price){
            minimum = phone
        }
    }
    return minimum
}

function premium(phones){
    let max= phones[0];
    for(let phone of phones){
        if(phone.price > max.price){
            max = phone
        }
    }
    return max;
}


console.log(premium(mobile));
console.log(getcheapPhone(mobile));