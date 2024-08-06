let products = [
    {id:1 , name: 'hp laptop', price: 23000},
    {id:2 , name: 'lenovo laptop', price: 23000},
    {id:3 , name: 'samsung laptop', price: 23000},
    {id:4, name: 'iphone', price: 23000},
    {id:5 , name: 'samsung galaxy phone', price: 23000},
]

function matched(products, search){
    let matched= [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}

let result = matched(products, 'phone');
console.log(result);