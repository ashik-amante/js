var  shoppingCart = {
    glass : 1,
    pen : 23,
    shirt: 56,
    shoes: 3,
    mouse : 34,
    keyboard : 334
}

// var keys = Object.keys(shoppingCart);

// for(i = 0; i< keys.length; i++){
//     var proname = keys[i];
//     var provalue = shoppingCart[proname];
//     console.log(proname, provalue);
// }

// for in 

for (var proname in shoppingCart){
    var provalue = shoppingCart[proname]
    console.log(proname,  provalue);
}