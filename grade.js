var marks = [54,86,87,34,23];

for(i = 0; i< marks.length; i++){
    var mark = marks[i];
    if(mark >= 80 ){
        console.log( mark, 'A grade');
    }
    else if( mark >=60){
        console.log( mark, 'B grade');
    }
    else if(mark >=50){
        console.log( mark, 'C grade');
    }
    else if(mark >= 40){
        console.log( mark, 'D grade');
    }
    else{
        console.log( mark, 'F grade');
    }
}