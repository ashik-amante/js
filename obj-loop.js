var  shoppingCart = {
    glass : 1,
    pen : 23,
    shirt: 56,
    shoes: 3
}
// Get keys

var keys = Object.keys(shoppingCart);
console.log(keys);


//  update the object

shoppingCart.mouse = 10;
console.log(shoppingCart);

var proname = 'mouse';
var provalue = shoppingCart[proname];
console.log(provalue);

// set property value

shoppingCart['mouse'] = 80;
console.log(shoppingCart);