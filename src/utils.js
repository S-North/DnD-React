import { damageTypes } from "./Forms"
import { crToXp } from "./Maths"

export const truncate = (string="", maxlength) => {
    if (string.length > maxlength) {
        return `${string.slice(0, maxlength)}...`
    } else {
        return string
    }
}

export const importMonster = (monster) => {
    const getSize = (size) => {
        switch (size) {
            default:
                return "couldn't figure this out        "
            case "T":
                return "tiny"
            case "S":
                return "small"
            case "M":
                return "medium"
            case "L":
                return "large"
            case "H":
                return "huge"
            case "G":
            return "gargantuan"
        }
    }

    const getTitan = () => {
        if (monster.type.includes("(titan)")) {
            return true} 
            else return false
    }

    const findDamageTypes = (text) => {
        const words = text.split(/\s+/)
        console.log(words)
        const damages = []
        words.forEach(word => {
            if (damageTypes.includes(word)) {damages.push(word.trim())}
        });
        console.log(damages)
        if (damages.length > 0) return damages
        else return [""]
    }

    const splitHitdice = (string) => {
        const damageDice = /[0-9]+d[0-9]+\+?[[0-9]+]?/gi // find patterns of type [numbers d numbers] and [numbers d numbers + numbers]
        let newString = damageDice.exec(string)[0]

        // split the string on letter d, put 1st in dice, 2nd on sides
        const dice = newString.split(/[d]/)[0]
        const sides =  newString.split(/[d/+]/)[1]
        // check for a bonus number and put it in bonus, else bonus = 0
        let bonus = 0
        if (newString.split(/[/+]/).length > 1) {
            bonus =  newString.split(/[/+]/)[1]
        }
        return {
            hdDice: parseInt(dice), 
            hdSides: parseInt(sides),
            hdBbonus: parseInt(bonus)}
        }

    const parseSaves = (saves) => {
        const splitOnComma = saves.split(/[,]/)
        const abilities = []
        splitOnComma.map(e => (
            abilities.push(e.trim().split(/\s+/)[0])
            ))
        const bonuses = []
        splitOnComma.map(e => (
            bonuses.push(e.trim().split(/\s+/)[1])
        ))
        return abilities // No need to return the bonuses, we can calulate them from profficiency bonus
    }

    const parseLanguages = (languages) => {
        const splitOnComma = languages.split(/[,;]/)
        return splitOnComma.forEach(l => {
            if (l === "bludgeoning, piercing, slashing from nonmagical attacks") {l = "nonmagical b, p, s"}
            l.trim()
        })
    }
    
    const parseResistances = (resistance) => {
        const splitOnColon = resistance.split(/[;]/)
        const temp = []
        splitOnColon[0].split(/[,]/).forEach(r => {
            if (r === "bludgeoning, piercing, slashing from nonmagical attacks") {r = "nonmagical b, p, s"}
            temp.push(r.trim())
        })
        if (splitOnColon.length > 1) {
                temp.push(splitOnColon[1].trim())
        }
        return temp
    }

    const parseActions = (actions) => {
        const data = []
        actions.forEach(action => {
            if (action.attack) {
                const damage = action.attack.split(/[|]/)[2]
                const dice = damage.split(/[d]/)[0]
                const sides =  damage.split(/[d/+]/)[1]
                const bonus =  damage.split(/[/+]/)[1]
                const type = findDamageTypes(action.text)[0]
                const removePlus = /\+/
                data.push(
                    {
                        name: action.name,
                        description: action.text,
                        attack: action.attack.split(/[|]/)[1].replace(removePlus, ""),
                        damage: {dice: dice, sides: sides, bonus: bonus, type: type}
                    }
                )
            }
            else data.push({
                name: action.name,
                description: action.text
            })
        });
        return data
    }

    const parseLegendaryActionCount = (text) => {
        if (text && Array.isArray(text)) {
            const regex = /\d legendary actions/i;
            return parseInt(regex.exec(text[0].text)[0].split(/\s+/)[0])
        } else return 0
    }

    const parseLegendary = (legendary) => {
        const data = []
        const costRegex = /Costs\s[0-9]+\sActions/i
        const costDigits = /\d+/
        if (legendary) {
            legendary.forEach(legend => {
                console.log(legend.text)
                // console.log(costRegex.exec(legend.name))
                let cost = 1
                let actions = null
                if(costRegex.exec(legend.name) && costRegex.exec(legend.name).length > 0) {
                    cost = costDigits.exec(costRegex.exec(legend.name)[0])[0]
                    console.log(cost)
                }

                const regex = /\d legendary actions/i;
                if (regex.exec(legend.text)) {
                    cost = 0
                    actions = regex.exec(legend.text)
                }
                
                if (actions) {
                    data.push({
                        name: legend.name,
                        text: legend.text,
                        cost: cost,
                        actions: parseInt(costDigits.exec(actions[0])[0])
                    })
                }
                else {
                    data.push({
                        name: legend.name,
                        text: legend.text,
                        cost: cost
                    })
                }
            });
        }
        return data
            
    }

    return {
        name: monster.name,
        size: getSize(monster.size),
        titan: getTitan(monster.type),
        description: monster.description,
        environment: monster.environment,
        type: monster.type.split(/\s+/)[0],
        alignment: monster.alignment,
        ac: parseInt(monster.ac.split(/\s+/)[0]),
        hitDice: splitHitdice(monster.hp),
        maxHp: monster.hp,
        speed: 0, // need to parse this e.g. "walk 40 ft."
        str: parseInt(monster.str),
        dex: parseInt(monster.dex),
        con: parseInt(monster.con),
        int: parseInt(monster.int),
        wis: parseInt(monster.wis),
        cha: parseInt(monster.cha),
        saves: parseSaves(monster.save),
        skills: parseSaves(monster.skill), // skills can be profficient or expert. Might be able to calc by checking the written bonus against abilityBonus+proficiencyBonus(cr)
        passive: parseInt(monster.passive), // passive what, maybe perception. Probably dont need this as they can be calculated
        languages: parseLanguages(monster.languages),
        cr: parseInt(monster.cr),
        xp: crToXp(monster.cr),
        resistances: parseResistances(monster.resist),
        damageImmunity: parseResistances(monster.immune),
        vulnerabilities: parseLanguages(monster.vulnerable),
        conditionImmunity: parseLanguages(monster.conditionImmune),
        senses: parseLanguages(monster.senses),
        traits: monster.trait.map(t => (
            {name: t.name, description: t.text}
        )),
        actions: parseActions(monster.action),
        legendary: parseLegendary(monster.legendary), // problem in the data for out data model. May need to do some manual data entry :( think some more... 
        legendaryCount: parseLegendaryActionCount(monster.legendary),
        legendaryActions: []
    }
}