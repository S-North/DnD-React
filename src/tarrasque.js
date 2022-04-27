const tarrasque = {
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
    "skill": "",
    "passive": "10",
    "languages": "",
    "cr": "30",
    "resist": "",
    "immune": "fire, poison; bludgeoning, piercing, slashing from nonmagical attacks",
    "vulnerable": "",
    "conditionImmune": "charmed, frightened, paralyzed, poisoned",
    "senses": "blindsight 120 ft.",
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
}

export default tarrasque;