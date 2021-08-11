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

const xpToLevel = (xp) => {
    console.log(typeof xp)
    xp = parseInt(xp)
    console.log(typeof xp)
    switch(true) {
        case xp < 301: return 1;
        case xp < 901: return 2;
        case xp < 2701: return 3;
        case xp < 6501: return 4;
        case xp < 14001: return 5;
        case xp < 23001: return 6;
        case xp < 34001: return 7;
        case xp < 48001: return 8;
        case xp < 64001: return 9;
        case xp < 85001: return 10;
        case xp < 100001: return 11;
        case xp < 120001: return 12;
        case xp < 140001: return 13;
        case xp < 165001: return 14;
        case xp < 195001: return 15;
        case xp < 225001: return 16;
        case xp < 265000: return 17;
        case xp < 305001: return 18;
        case xp < 355001: return 19;
        default: return 20
    }
}

export { randInt, diceRoll, averageHP, abiilityModifier, xpToLevel }
