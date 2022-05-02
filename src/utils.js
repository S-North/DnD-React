import { damageTypes, conditions } from "./Forms"
import { crToXp } from "./Maths"

export const truncate = (string="", maxlength) => {
    if (string.length > maxlength) {
        return `${string.slice(0, maxlength)}...`
    } else {
        return string
    }
}

export const importMonster = (monster) => {
    const dcRegex = /DC\s\d+\s\w+/g
    const getSize = (size) => {
        switch (size) {
            default:
                return "couldn't figure this out"
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
        // parses a string for words in the damageTypes array & retuns an array of strings of those damage types
        // if none found, it returns an empty array
        const words = text.split(/\s+/)
        const damages = []
        words.forEach(word => {
            if (damageTypes.includes(word)) {
                if (word === "bludgeoning, piercing, slashing from nonmagical attacks") {word = "nonmagical b, p, s"}
                damages.push(word.trim())
            }
        });
        if (damages.length > 0) return damages
        else return []
    }

    const splitHitdice = (string) => {
        const damageDice = /[0-9]+d[0-9]+\s?[\+]?[\s]?[0-9]+?/gi // find patterns of type [numbers d numbers] and [numbers d numbers + numbers]
        let newString = damageDice.exec(string)[0]

        // split the string on letter d, put 1st in dice, 2nd on sides
        const dice = newString.split(/[d]/)[0]
        const sides =  newString.split(/[d/+]/)[1]
        // check for a bonus number and put it in bonus, else bonus = 0
        let bonus = 0
        // TODO: sometines there us a leading space e.g. 1d4 + 15. the below returns 1 instead of 15
        if (newString.split(/[/+]/).length > 1) {
            bonus =  newString.split(/[/+]/)[1]
        }
        return {
            hdDice: parseInt(dice), 
            hdSides: parseInt(sides),
            hdBonus: parseInt(bonus)}
        }

    const parseSaves = (saves) => {
        if (saves.length === 0) return []
        const splitOnComma = saves.split(/[,]/)
        const abilities = []
        splitOnComma.map(e => (
            abilities.push(e.trim().split(/\s+/)[0])
            ))
        return abilities // No need to return the bonuses, we can calulate them from profficiency bonus
    }

    const parseLanguages = (languages) => {
        const array = []
        const splitOnComma = languages.split(/[,;]/)
        splitOnComma.forEach(l => {
            if (l === "bludgeoning, piercing, slashing from nonmagical attacks") {l = "nonmagical b, p, s"}
            if (l.length > 0) array.push(l.trim())
        })
        return array
    }
    
    const parseResistances = (resistance) => {
        const splitOnColon = resistance.split(/[;]/)
        const temp = []
        splitOnColon[0].split(/[,]/).forEach(r => {
            if (r === "damage from spells") r = "spell damage"
            if (r.length > 0) temp.push(r.trim())
        })
        if (splitOnColon.length > 1) {
            temp.push("nonmagical b, p, s")
        }
        return temp
    }

    const parseActions = (actions) => {
        const data = []
        const removePlus = /\+/
        const damageDice = /[0-9]+d[0-9]+\s?[+]?[\s]?[0-9]+/gi
        const dcRegex = /DC\s\d+\s\w+/gi // e.g. DC 20 Wisdom

        // sometimes actions is an array of objects, sometimes its a single object (gad nabbit!!!)
        if (Array.isArray(actions) === false) actions = [actions]

        console.log(actions)

        // process each action
        actions.forEach(action => {
            console.log(action)

            let name = ""
            let description = ""
            let attack = 0
            let damage1 = {}
            let damage2 = {}
            let damage3 = {}
            let dc = {}
            
            // sometimes the text is a string, sometines its an array of strings
            // ((action.name && Array.isArray(action.name)) ? name = action.name.join() : name = action.name)
            if (action.name && Array.isArray(action.name)) {name = action.name.join()} else name = action.name
            // name = action.name
            console.log(name)

            // sometimes the text is a string, sometines its an array of strings
            if (action.text && Array.isArray(action.text)) {description = action.text.join()} else description = action.text
            // ((action.text && Array.isArray(action.text)) ? description = action.text.join() : description = action.text)
            console.log(description)
            
            if (action.attack) {
                // regex for + sign, and matching dice roll notation e.g. 1d4+6, 12d10 + 8.
                // sometimes the action.attack is string, sometimes its an array of strings (wtf man)
                if (typeof action.attack === "string") attack = parseInt(action.attack.split(/[|]/)[1].replace(removePlus, ""))
                if (typeof action.attack === "object" && action.attack.length > 0) attack = parseInt(action.attack[0].split(/[|]/)[1].replace(removePlus, ""))
            }

            // try to parse any damages in the description, only adds the first 3 found.
            const damagesText = description.match(damageDice)
            console.log(damagesText)
            const damages = []
            if (damagesText && damagesText.length > 0) {
                damagesText.forEach((d, i) => {
                    console.log(d)
                const damage = splitHitdice(d)
                console.log(damage)
                if (findDamageTypes(description)[i]) {damage.type = findDamageTypes(description)[i]}
                damages.push(damage)
            })}

            if (damages.length > 0) damage1 = damages[0]
            if (damages.length > 1) damage2 = damages[1]
            if (damages.length > 2) damage3 = damages[2]

            // find any DC saves
            
            const dcText = description.match(dcRegex)
            console.log(dcText)
            if (dcText && dcText.length > 0) {
                console.log(dcText[0].split(" ")[1])
                console.log(dcText[0].split(" ")[2])
                dc = {
                    dc: parseInt(dcText[0].split(" ")[1]), 
                    ability: dcText[0].split(" ")[2].slice(0,3).toLowerCase()
                }
            }
            console.log(dc)

            // try to find any conditions mentioned in the action
            // const conditionsText = description.match(conditions)
            // console.log(conditionsText)
            // if (conditionsText && conditionsText.length > 0) {console.log(conditionsText)}

            
            console.log({
                name: name,
                description: description,
                attack: attack,
                damage1: damage1,
                damage2: damage2,
                damage3: damage3,
                dc: dc
            })
            data.push(
                {
                    name: name,
                    description: description,
                    attack: attack,
                    damage1: damage1,
                    damage2: damage2,
                    damage3: damage3,
                    dc: dc
                }
            )
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
                // check to see if the is a name or text field, add an empty one if not
                if (!legend.text) legend = {...legend, text: ""}
                if (!legend.name) legend = {...legend, name: ""}
                // sometimes the text field is a string, sometimes an array dag nabbit! do something about this...

                let cost = 1
                let actions = 0
                if(costRegex.exec(legend.name) && costRegex.exec(legend.name).length > 0) {
                    cost = parseInt(costDigits.exec(costRegex.exec(legend.name)[0])[0])
                    // console.log(cost)
                }

                const regex = /\d legendary actions/i;
                if (regex.exec(legend.text)) {
                    cost = 0
                    actions = regex.exec(legend.text)
                }
                
                if (actions > 0) {
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

    const parseSpellSlots = (spellSlotString) => {
        // spells is a comma separated values string
        if (spellSlotString) {
            const spellSlots = spellSlotString.split(",")
            // console.log(spellSlots)
            return spellSlots
        } else return []
    }

    const parseSpells = (spellsString) => {
        // spells is a comma separated values string
        if (spellsString) {
            const spells = spellsString.split(",")
            const spellsTrimmed = spells.map(s => (s = s.trim()))
            return spellsTrimmed
        } else return []
    }

    const parseTraits = (traits) => {
        if (!traits) return []
        if (Object.prototype.toString.call(traits) === '[object Object]') traits = [traits]
        const buildTraits = []
        traits.forEach(trait => {
            if (!trait.name) trait.name = ""
            if (!trait.text) trait.text = ""
            if (Array.isArray(trait.text)) trait.text = trait.text.join(' ')

            buildTraits.push({name: trait.name, description: trait.text})
        })
        return buildTraits
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
        maxHp: parseInt(monster.hp.split(' ')[0]),
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
        vulnerabilities: parseResistances(monster.vulnerable),
        conditionImmunity: parseLanguages(monster.conditionImmune),
        senses: parseLanguages(monster.senses),
        traits: parseTraits(monster.trait),
        actions: parseActions(monster.action),
        legendary: parseLegendary(monster.legendary), // problem in the data for out data model. May need to do some manual data entry :( think some more... 
        legendaryCount: parseLegendaryActionCount(monster.legendary),
        legendaryActions: [],
        spellSlots: parseSpellSlots(monster.slots),
        spells: parseSpells(monster.spells)
    }
}