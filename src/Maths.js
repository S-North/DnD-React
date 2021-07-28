// generate a random integer, takes in the lowest and highest integer as "start" and "end"
//returns a single integer
const randInt = (start, end) => {
    start = Math.floor(start);
    end = Math.floor(end) + 1;
    return Math.floor(Math.random() * (end - start) + start)
}

// roll any numer of dice, with any number of sides, then add an optional bonus integer
// takes in 2 mandatory integers, and an optional integer for the bonus
// returns an array containing an array of all the dice results, followed by the plus, then a single integer of the total
const diceRoll = (number, sides, bonus=0) => {
    console.log(number,sides,bonus);
    let n = parseInt(number);
    let s = parseInt(sides);
    let b = parseInt(bonus);
    let i;
    let rolls = [];
    let total = 0;
    for (i = 0; i < n; ++i) {
        let roll = randInt(1, s);
        console.log(`Roll is ${roll}`) // template literal strings, like f'strings. Uses backticks, not single quotes
        rolls.push((roll));
        total += roll;
    }
    total += b;
    return [rolls, b, total]
}

// calculate average hitpoints. sides +1, /2 to get average dice roll, multiply by number of dice rolls, + bonus
const averageHP = (number, sides, bonus=0) => {
    let n = parseInt(number);
    let s = parseInt(sides);
    let b = parseInt(bonus);
    console.log(n,s,b);
    let total = (((s + 1)/2)*n)+b;
    return total     
}

const abiilityModifier = (int) => {
    // take in an ability score and return a modifier
    if (int > 9) {
        // munbers 10 or greater we can just deduct 10, divide my 2 and round down
        return Math.floor((int -10) / 2)
    } else {
        // numbers below 10, deduct 11, divide by 2 and round up
        return Math.ceil((int - 11) / 2)
    }
}

export { randInt, diceRoll, averageHP, abiilityModifier }
