/*--------
1st Problem  = radian to degree.
----------*/

function radianToDegree(radian){
    const degree = radian * (180 / Math.PI);
    return (degree.toFixed(2));
}

const num = radianToDegree(10);
console.log(num)

/*--------
2nd Problem  = isJavaScriptFile.
----------*/

function isJavaScriptFile(fileName){
    const file = fileName.slice(-3);
    if(file == '.js'){
        return true;
    }
}

const result = isJavaScriptFile('end.jpg.js');
console.log(result);

/*------------ -----
3rd Problem = oilPrice.
----------------------*/

function oilPrice(dieselQuantity, petrolQuantity , octaneQuantity){
    const perLitreDieselPrice = 114;
    const  perLitrePetrolPrice = 130;
    const perLitreOctanePrice = 135;

    const dieselPrice = dieselQuantity * perLitreDieselPrice;
    const petrolPrice = petrolQuantity * perLitrePetrolPrice;
    const octanePrice = octaneQuantity * perLitreOctanePrice;

    const totalCost = dieselPrice + petrolPrice + octanePrice;
    return totalCost;

}

const totalCost = oilPrice(0, 0, 1);
console.log(totalCost);


/*------------ -----
4th Problem = publicBusFare
----------------------*/

function publicBusFare(busQuantity, ){
    const busQuantity = 2 ;
    const busCapacity = 50;
    const busPassenger = busQuantity * busCapacity;
    const microPassenger = 11;
    const PublicBusTicketRate = 250;
    
    

}

const population = publicBusFare(100);