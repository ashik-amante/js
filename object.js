var mycomputer = {
    brand : 'hp',
    price: 23000,
    color: 'black',
    processor: 'i3'
}

console.log(mycomputer.price);

var student = {
    name : 'ashik',
    roll: 53,
    dept: 'Ice',
    year: '15-16'
}

console.log(mycomputer.brand);

var  keys = Object.keys(student);
console.log(keys);

var values = Object.values(student);
console.log(values);

// diffrent types of assingment 

student.home = 'dhaka';

console.log(student);

var proname = 'headset';
mycomputer[proname] = 30;

console.log(mycomputer);


