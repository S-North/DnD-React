export const truncate = (string="", maxlength) => {
    if (string.length > maxlength) {
        return `${string.slice(0, maxlength)}...`
    } else {
        return string
    }
}

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

const abilityModifier = (int) => {
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

const crToXp = (cr) => {
    // console.log(cr)
    // console.log(typeof xp)
    cr = parseFloat(cr)
    // console.log(cr)
    // console.log(typeof cr)
    switch(cr) {
        case 0: return 10;
        case 0.125: return 25;
        case 0.25: return 50;
        case 0.5: return 100;
        case 1: return 200;
        case 2: return 450;
        case 3: return 700;
        case 4: return 1100;
        case 5: return 1800;
        case 6: return 2300;
        case 7: return 2900;
        case 8: return 3900;
        case 9: return 5000;
        case 10: return 5900;
        case 11: return 7200;
        case 12: return 8400;
        case 13: return 10000;
        case 14: return 11500;
        case 15: return 13000;
        case 16: return 15000;
        case 17: return 18000;
        case 18: return 20000;
        case 19: return 22000;
        case 20: return 25000;
        case 21: return 33000;
        case 22: return 41000;
        case 23: return 50000;
        case 24: return 62000;
        case 25: return 75000;
        case 26: return 90000;
        case 27: return 105000;
        case 28: return 120000;
        case 29: return 135000;
        case 30: return 155000;
        default: return 0
    }
}

const calculateProficiencyBonus = (cr) => {
    switch (true) {
        default:
            return 9
        case cr < 5:
            return 2
        case cr < 9:
            return 3
        case cr < 13:
            return 4
        case cr < 17:
            return 5
        case cr < 21:
            return 6
        case cr < 25:
            return 7
        case cr < 29:
            return 8      
    }
}

export { randInt, diceRoll, averageHP, abilityModifier, xpToLevel, crToXp, calculateProficiencyBonus  }
