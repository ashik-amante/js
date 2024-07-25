var  shoppingCart = {
    glass : 1,
    pen : 23,
    shirt: 56,
    shoes: 3
}

// when im sure about the properti is insile of the object
var pencount = shoppingCart.pen;
console.log(pencount);


// when i m not sure about thr property

var shoescount = shoppingCart['shoes'];
console.log(shoescount);

var property = Object.keys(shoppingCart);
console.log(property);

var propertyvalue = Object.values(shoppingCart);
console.log(propertyvalue);