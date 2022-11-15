function publicBusFare(total) {
    const bus = 50
    const mir = 11
    const p = total;
    const tk = 250
    if(50 <= total){
        // console.log('dfd')
        let busNumber = total / 50
        const busQuantity = Math.floor(busNumber);
        let bus = total - 50 * busQuantity; 
        if (11 <= bus) {
            const car = bus / 11
            const abc = Math.floor(car)
            let publicPassenger = bus - 11 * abc 
            const result = 250 * publicPassenger
            // console.log(result)
            return result
        }
        else{
            const result = 250 * bus
            return result;
        }
    }
    else if (11 <= total) {
        const car = total / 11
        const carNumber = Math.floor(car)
        let restPeople = total - 11 * carNumber 
        const result = 250 * restPeople
        // console.log(abc)
        return result
    }
    
}

const publicBusCost = publicBusFare(10);
console.log(publicBusCost);