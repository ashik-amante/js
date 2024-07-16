var num1 = 5;
var num2 = 654;
var num3 = 66;

if(num1 > num2){
    if(num1 > num3){
        console.log('largest',  num1);
    }
    else{
        console.log('lg : ', num3);
    }
    
}
else{
    if(num2 > num3){
        console.log('lg :', num2);
    }
        
    else{
        console.log('largest : ', num3);
    }
}