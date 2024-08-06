const  biranikhor = ['abul', 'babul', 'kabul','lalu', 'kalu','abul','jamil'];


function Khor(array){
    let unique = [];
    for(let element of array){
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique
}

let result =Khor(biranikhor);
console.log(result);