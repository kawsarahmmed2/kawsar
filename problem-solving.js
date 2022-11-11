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


     
    function publicBusFare(total) {
        const bus = 50
        const micro = 11
        const totalPassenger = total;
        const tk = 250
        if(50 <= total){
            // console.log('run')
            let  = total / 50
            const abc = Math.floor()
            let bus = total - 50 * abc 
            if (11 <= bus) {
                const car = bus / 11
                const abc = Math.floor(car)
                let cars = bus - 11 * abc 
                const result = 250 * cars
                console.log(result)
                return result
            }
            else{
                const result = 250 * bus
                return result
            }
    
        }
     
     
        
    }
    
    const ab = pu(55)
    
    console.log(ab)


