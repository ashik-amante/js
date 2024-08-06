let height = [12,23,1,2,3,4];

function tallest(array){
    let max = array[0];
    for(let num of array){
        if(num > max){
            max = num
        }
    }
    return max
}

console.log(tallest(height));