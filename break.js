for(i = 0; i <=20; i++){
    if(i >= 10){
        break
    }
    console.log(i);
}

var gadget = ['pen','glass', 'oil', 'perfumr'];

for(i=0; i< gadget.length; i++){
    var element = gadget[i];
    if(element == 'glass'){
        break;
    }
    console.log(element);
}