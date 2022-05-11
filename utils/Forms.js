const types = ["aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead"];
const crRange = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].sort(function(a,b) {return a-b});
const classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"].sort()
const races = ["Aarakocra", "Aasimar", "Bugbear", "Dragonborn", "Dwarf", "Elf", "Feral Teifling", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Halfling", "Half-Orc", "Hobgoblin", "Human", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Orc", "Orc of Exandria", "Satyr", "Tabaxi", "Teifling", "Tortle", "Triton", "Yuan-ti Pureblood"].sort()
const damageTypes = ["bludgeoning", "piercing", "slashing", "acid", "poison", "fire", "cold", "force", "lightning", "thunder", "necrotic", "psychic", "radiant", "nonmagical b, p, s", "spell damage"]
const conditions = ["blinded", "charmed", "deafened", "frightened", "grappled", "incapacitated", "invisible", "paralyzed", "petrified", "poisoned", "stunned", "unconcious"].sort()
const sizes =["tiny", "small", "medium", "large", "huge", "gargantuan"]
const abilityList = ["Str", "Dex", "Con", "Int", "Wis", "Cha"]
const languagesList = ["Aarakocra", "Auran", "Common", "Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc", "Abyssal", "Celestial", "Deep Speech", "Draconic", "Infernal", "Primordial", "Sylvan", "Undercommon"]
const skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
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
const sensesList = ["darkvision 30 ft.", "darkvision 60 ft.", "darkvision 120 ft.", "blindsight 60 ft.", "tremorsense", "truevision"]
const monsterTemplate = {
    "name": "",
    "size": "",
    "titan": false,
    "description": "",
    "environment": "",
    "type": "",
    "alignment": "",
    "ac": undefined,
    "hitDice": {
      "hdDice": undefined,
      "hdSides": undefined,
      "hdBbonus": undefined
    },
    "speed": undefined,
    "str": undefined,
    "dex": undefined,
    "con": undefined,
    "int": undefined,
    "wis": undefined,
    "cha": undefined,
    "saves": [],
    "skills": [],
    "passive": undefined,
    "languages": [],
    "cr": undefined,
    "vulnerabilities": [],
    "resistances": [],
    "damageImmunity": [],
    "conditionImmunity": [],
    "senses": [],
    "traits": [],
    "actions": [],
    "legendary": [],
    "legendaryCount": undefined,
    "legendaryActions": [],
    "equipment": []
  }
export { types, crRange, classes, races, damageTypes, conditions, sizes, sensesList, abilityList, skillList, skillToAbility, monsterTemplate, languagesList }