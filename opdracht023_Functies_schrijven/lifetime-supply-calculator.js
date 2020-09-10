const calculateSupply = function (age, amountPerDay) {
    let maxAge = 100;
    let amount = (amountPerDay * 365) * (maxAge - age);
    let totalcalculation = 'You will need ' + amount
        + ' to last you until the ripe old age of ' + maxAge
    console.log(totalcalculation)
}

calculateSupply(30, 5.5);
calculateSupply(98, 10);
calculateSupply(40, 1);
