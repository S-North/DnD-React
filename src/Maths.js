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
    let b = parseInt(bonus);
    let i;
    let rolls = [];
    let total = 0;
    for (i = 0; i < number; ++i) {
        let roll = randInt(1, sides);
        // console.log(`Roll is ${roll}`) // template literal strings, like f'strings. Uses backticks, not single quotes
        rolls.push((roll));
        total += roll;
    }
    total += b;
    return [rolls, bonus, total]
}

export { randInt, diceRoll }