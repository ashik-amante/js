var numbers = [12,3,43,545,66,77,43,23,12];

for ( i= 0; i < numbers.length; i++){
    var element = numbers[i];
    if( element > 50){
        continue;
    }
    console.log(element);
}