var username =  'Kallumama';
var userinput = 'kallumama';

if(username.toLowerCase == userinput.toLowerCase){
    console.log('match');
}
else{
    console.log('invalid user');
};

console.log(username.length);
for(i = 0 ; i< username.length; i++){
    var element = username[i]
    console.log(element);
}

console.log(typeof userinput);