var lyrics = 'kallu mama mastan hote chai , ogochore se furti korte chai';

var searchname = 'MasTannnnnnnnnnn';

var doesexist = lyrics.toLowerCase().includes(searchname.toLowerCase());
console.log(doesexist);


// ..........................................

// indexOf()


if(lyrics.indexOf('mama' != -1)){
    console.log('exixt');
}
else{
    console.log('dosent exist');
}

// startwith and endwith                             
console.log(lyrics.startsWith('kallu'));
console.log(lyrics.endsWith('mama'));




var fileName = 'nyfile.pdf';
console.log(fileName.endsWith('.pdf'));