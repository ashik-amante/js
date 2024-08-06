function woodrequire(chair,table,bed){
    const chairwood = 3;
    const tablewod = 2;
    const bedwood = 45;

    const totalchairwood = chair * chairwood;
    const totaltablewood = table * tablewod;
    const totalbedwood = bed * bedwood;

    const totalwood = totalbedwood + totalchairwood + totaltablewood;


    return totalwood


}

console.log(woodrequire(0,0,2));