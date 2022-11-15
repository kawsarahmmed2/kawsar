/*--------
1st Problem  = radian to degree.
----------*/

function radianToDegree(radian) {
    const degree = radian * (180 / Math.PI);
    return (degree.toFixed(2));
}

const num = radianToDegree(10);
console.log(num)

/*--------
2nd Problem  = isJavaScriptFile.
----------*/

function isJavaScriptFile(fileName) {
    const file = fileName.slice(-3);
    if (file == '.js') {
        return true;
    }
}

const result = isJavaScriptFile('end.jpg.js');
console.log(result);

/*------------ -----
3rd Problem = oilPrice.
----------------------*/

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const perLitreDieselPrice = 114;
    const perLitrePetrolPrice = 130;
    const perLitreOctanePrice = 135;

    const dieselPrice = dieselQuantity * perLitreDieselPrice;
    const petrolPrice = petrolQuantity * perLitrePetrolPrice;
    const octanePrice = octaneQuantity * perLitreOctanePrice;

    const totalCost = dieselPrice + petrolPrice + octanePrice;
    return totalCost;

}

const totalCost = oilPrice(1, 0, 0);
console.log(totalCost);


/*------------ -----
4th Problem = publicBusFare
----------------------*/
function publicBusFare(sum) {
    const busCapacity = 50;
    const carCapacity = 11;
    const publicBusTicket = 250;

    if (50 <= sum) {
        const busNumber = sum / 50
        const busQuantity = Math.floor(busNumber)
        const restPeople = sum - 50 * busQuantity
        if (11 <= restPeople) {
            const carNumber = restPeople / 11;
            const carQuantity = Math.floor(carNumber)
            const publicPassenger = restPeople - 11 * carQuantity;
            const amount = publicPassenger * publicBusTicket
            return amount;
        }
        else {
            const result = restPeople * publicBusTicket
            return result
        }

    }
    else if (11 <= sum) {
        const carNumber = sum / 11;
        const carQuantity = Math.floor(carNumber)
        const ultimateRestPeople = sum - 11 * carQuantity;
        const cost = ultimateRestPeople * publicBusTicket
        return cost;
    }
    else {
        const cost = sum * publicBusTicket;
        return cost
    }
}

const total = publicBusFare(10);
console.log(total);


/*-----------------
5th Problem = isBestFriend
--------------------*/

function isBestFriend(a, b) {
    const name1 = a
    const name2 = b
    console.log(name1, name2)
    if (name1.name == name2.friend && name2.name == name1.friend) {
        return true
    }
    return false
}

const ab = isBestFriend(
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
)

console.log(ab)