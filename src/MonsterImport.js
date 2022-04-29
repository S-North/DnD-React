const monsterManual = [
    {
    "name": "Tarrasque",
    "size": "G",
    "type": "monstrosity (titan)",
    "alignment": "Unaligned",
    "ac": "25 (natural armor)",
    "hp": "676 (33d20+330)",
    "speed": "walk 40 ft.",
    "str": "30",
    "dex": "11",
    "con": "30",
    "int": "3",
    "wis": "11",
    "cha": "11",
    "save": "Int +5, Wis +9, Cha +9",
    "skill": "Perception +3, Stealth +5",
    "passive": "10",
    "languages": "Auran, Aarakocra",
    "cr": "30",
    "resist": "fire, poison; bludgeoning, piercing, slashing from nonmagical attacks",
    "immune": "fire, poison; bludgeoning, piercing, slashing from nonmagical attacks",
    "vulnerable": "fire",
    "conditionImmune": "charmed, frightened, paralyzed, poisoned",
    "senses": "blindsight 60 ft., darkvision 120 ft.",
    "trait": [
        {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the tarrasque fails a saving throw, it can choose to succeed instead."
        },
        {
            "name": "Magic Resistance",
            "text": "The tarrasque has advantage on saving throws against spells and other magical effects."
        },
        {
            "name": "Reflective Carapace",
            "text": "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
        },
        {
            "name": "Siege Monster",
            "text": "The tarrasque deals double damage to objects and structures."
        }
    ],
    "action": [
        {
            "name": "Multiattack",
            "text": "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite."
        },
        {
            "name": "Bite",
            "text": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
            "attack": "Bite|+19|4d12+10"
        },
        {
            "name": "Claw",
            "text": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. 28 (4d8 + 10) slashing damage.",
            "attack": "Claw|+19|4d8+10"
        },
        {
            "name": "Horns",
            "text": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. 32 (4d10 + 10) piercing damage.",
            "attack": "Horns|+19|4d10+10"
        },
        {
            "name": "Tail",
            "text": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
            "attack": "Tail|+19|4d6+10"
        },
        {
            "name": "Frightful Presence",
            "text": "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
        },
        {
            "name": "Swallow",
            "text": [
                "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.",
                "If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
            ]
        }
    ],
    "legendary": [
        {
            "text": "The monstrosity (titan) can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The monstrosity (titan) regains spent legendary actions at the start of its turn."
        },
        {
            "name": "Attack",
            "text": "The tarrasque makes one claw attack or tail attack."
        },
        {
            "name": "Move",
            "text": "The tarrasque moves up to half its speed."
        },
        {
            "name": "Chomp (Costs 2 Actions)",
            "text": "The tarrasque makes one bite attack or uses its Swallow."
        }
    ],
    "description": "The legendary tarrasque is possibly the most dreaded monster of the Material Plane. It is widely believed that only one of these creatures exists, though no one can predict where and when it will strike.\nA scaly biped, the tarrasque is fifty feet tall and seventy feet long, weighing hundreds of tons. It carries itself like a bird of prey, leaning forward and using its powerful lashing tail for balance. Its cavernous maw yawns wide enough to swallow all but the largest creatures, and so great is its hunger that it can devour the populations of whole towns.\nLegendary Destruction. The destructive potential of the tarrasque is so vast that some cultures incorporate the monster into religious doctrine, weaving its sporadic appearance into stories of divine judgment and wrath.\nLegends tell how the tarrasque slumbers in its secret lair beneath the earth, remaining in a dormant state for decades or centuries. When it awakens in answer to some inscrutable cosmic call, it rises from the depths to obliterate everything in its path.\nSource: Monster Manual p. 286, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
    "environment": "urban"
},
{
    "name": "Faerie Dragon (Blue)",
    "size": "T",
    "type": "dragon",
    "alignment": "Chaotic Good",
    "ac": "15",
    "hp": "14 (4d4+4)",
    "speed": "walk 10 ft., fly 60 ft.",
    "str": "3",
    "dex": "20",
    "con": "13",
    "int": "14",
    "wis": "12",
    "cha": "16",
    "save": "",
    "skill": "Arcana +4, Perception +3, Stealth +7",
    "passive": "13",
    "languages": "Draconic, Sylvan",
    "cr": "2",
    "resist": "",
    "immune": "",
    "vulnerable": "",
    "conditionImmune": "",
    "senses": "darkvision 60 ft.",
    "trait": [
        {
            "name": "The Colors of Age",
            "text": [
                "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                "Red—5 years or less",
                "Orange—6–10 years",
                "Yellow—11–20 years",
                "Green—21–30 years",
                "Blue—31–40 years",
                "Indigo—41–50 years",
                "Violet—51 years or more",
                "A green or older faerie dragon's CR increases to 2."
            ]
        },
        {
            "name": "Superior Invisibility",
            "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
        },
        {
            "name": "Limited Telepathy",
            "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
        },
        {
            "name": "Magic Resistance",
            "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
        },
        {
            "name": "Innate Spellcasting",
            "text": [
                "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                "1/day each: color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion"
            ]
        }
    ],
    "action": [
        {
            "name": "Bite",
            "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
        },
        {
            "name": "Euphoria Breath (Recharge 5-6)",
            "text": [
                "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
            ]
        }
    ],
    "spells": "color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion",
    "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133",
    "environment": "forest"
},
{
    "name": "Archmage",
    "size": "M",
    "type": "humanoid (any race)",
    "alignment": "Any alignment",
    "ac": "12 (15 with mage armor)",
    "hp": "99 (18d8+18)",
    "speed": "walk 30 ft.",
    "str": "10",
    "dex": "14",
    "con": "12",
    "int": "20",
    "wis": "15",
    "cha": "16",
    "save": "Int +9, Wis +6",
    "skill": "Arcana +13, History +13",
    "passive": "12",
    "languages": "any six languages",
    "cr": "12",
    "resist": "damage from spells; nonmagical bludgeoning, piercing, slashing (from stoneskin)",
    "immune": "",
    "vulnerable": "",
    "conditionImmune": "",
    "senses": "",
    "trait": [
        {
            "name": "Magic Resistance",
            "text": "The archmage has advantage on saving throws against spells and other magical effects."
        },
        {
            "name": "Spellcasting",
            "text": [
                "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:",
                "At will: disguise self, invisibility",
                "Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp",
                "• 1st level (4 slots): detect magic, identify, mage armor*, magic missile",
                "• 2nd level (3 slots): detect thoughts, mirror image, misty step",
                "• 3rd level (3 slots): counterspell, fly, lightning bolt",
                "• 4th level (3 slots): banishment, fire shield, stoneskin*",
                "• 5th level (3 slots): cone of cold, scrying, wall of force",
                "• 6th level (1 slots): globe of invulnerability",
                "• 7th level (1 slots): teleport",
                "• 8th level (1 slots): mind blank*",
                "• 9th level (1 slots): time stop",
                "*The archmage casts these spells on itself before combat."
            ]
        }
    ],
    "action": [
        {
            "name": "Dagger",
            "text": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage.",
            "attack": "Dagger|+6|1d4+2"
        },
        {
            "name": "Variant: Familiars",
            "text": "Any spellcaster that can cast the find familiar spell (such as an archmage or mage) is likely to have a familiar. The familiar can be one of the creatures described in the spell (see the Player's Handbook) or some other Tiny monster, such as a crawling claw, imp, pseudodragon, or quasit."
        }
    ],
    "slots": "4, 3, 3, 3, 3, 1, 1, 1, 1",
    "spells": "disguise self, invisibility, fire bolt, light, mage hand, prestidigitation, shocking grasp, detect magic, identify, mage armor, magic missile, detect thoughts, mirror image, misty step, counterspell, fly, lightning bolt, banishment, fire shield, stoneskin, cone of cold, scrying, wall of force, globe of invulnerability, teleport, mind blank, time stop",
    "description": "Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption.\nAn archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.\nSource: Monster Manual p. 342, Curse of Strahd, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
    "environment": ""
}
]

export default monsterManual