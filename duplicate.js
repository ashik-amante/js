const  biranikhor = ['abul', 'babul', 'kabul','lalu', 'kalu','abul','jamil'];

function duplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) == false){
            unique.push(item);
        }
    }
    return unique
}

var result = duplicate(biranikhor);
console.log(result);