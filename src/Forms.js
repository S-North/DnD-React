const types = ["All", "Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
const crRange = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 30].sort(function(a,b) {return a-b});
const classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"].sort()
const races = ["Aarakocra", "Aasimar", "Bugbear", "Dragonborn", "Dwarf", "Elf", "Feral Teifling", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Halfling", "Half-Orc", "Hobgoblin", "Human", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Orc", "Orc of Exandria", "Satyr", "Tabaxi", "Teifling", "Tortle", "Triton", "Yuan-ti Pureblood"].sort()
const damageTypes = ["bludgeoning", "piercing", "slashing", "acid", "poison", "fire", "cold", "force", "lightning", "thunder", "necrotic", "psychic", "radiant"].sort()
const conditions = ["blinded", "charmed", "deafened", "frightened", "grappled", "incapacitated", "invisible", "paralysed", "petrified", "poisoned", "stunned", "unconcious"].sort()
const sizes =["tiny", "small", "medium", "large", "huge", "gargantuan"]
const abilityList = ["str", "dex", "con", "int", "wis", "cha"]
const skillList = ["acrobatics", "animal handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight of hand", "stealth", "survival"]
const skillToAbility = (skill) => {
    switch (true) {
        default:
            return "wis"
        case ["athletics"].includes(skill):
            return "str"
        case ["acrobatics", "sleight of hand", "stealth" ].includes(skill):
            return "dex"
        case ["arcana", "history", "investigation", "nature", "religion"].includes(skill):
            return "int"
        case ["deception", "intimidation", "performance", "persuasion"].includes(skill):
            return "cha"
    }
}
const sensesList = ["darkvision 30", "darkvision 60", "darkvision 120", "blindsight", "tremorsense", "truevision"]

export { types, crRange, classes, races, damageTypes, conditions, sizes, sensesList, abilityList, skillList, skillToAbility }