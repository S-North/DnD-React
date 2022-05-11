const monsterManual = [
    {
        "name": "Shadow Demon",
        "size": "M",
        "type": "fiend (demon)",
        "alignment": "Chaotic Evil",
        "ac": "13",
        "hp": "66 (12d8+12)",
        "speed": "walk 30 ft., fly 30 ft.",
        "str": "1",
        "dex": "17",
        "con": "12",
        "int": "14",
        "wis": "13",
        "cha": "14",
        "save": "Dex +5, Cha +4",
        "skill": "Stealth +7",
        "passive": "11",
        "languages": "Abyssal, telepathy 120 ft.",
        "cr": "4",
        "resist": "acid, fire, necrotic, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "cold, lightning, poison",
        "vulnerable": "radiant",
        "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Incorporeal Movement",
                "text": "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                "name": "Light Sensitivity",
                "text": "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Shadow Stealth",
                "text": "While in dim light or darkness, the demon can take the Hide action as a bonus action."
            }
        ],
        "action": {
            "name": "Claws",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 10 (2d6 + 3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6 + 3) psychic damage.",
            "attack": "Claws|+5|2d6+3"
        },
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 64, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Shambling Mound",
        "size": "L",
        "type": "plant",
        "alignment": "Unaligned",
        "ac": "15 (natural armor)",
        "hp": "136 (16d10+48)",
        "speed": "walk 20 ft., swim 20 ft.",
        "str": "18",
        "dex": "8",
        "con": "16",
        "int": "5",
        "wis": "10",
        "cha": "5",
        "save": "",
        "skill": "Stealth +2",
        "passive": "10",
        "languages": "",
        "cr": "5",
        "resist": "cold, fire",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "blinded, deafened, exhaustion",
        "senses": "blindsight 60 ft. (blind beyond this radius)",
        "trait": {
            "name": "Lightning Absorption",
            "text": "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 13 (2d8 + 4) bludgeoning damage.",
                "attack": "Slam|+7|2d8+4"
            },
            {
                "name": "Engulf",
                "text": "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.",
                "attack": "Engulf||2d8+4"
            }
        ],
        "description": "A shambling mound, sometimes called a shambler, trudges ponderously through bleak swamps, dismal marshes, and rain forests, consuming any organic matter in its path. This rotting heap of animated vegetation looms up half again as tall as a human, tapering into a faceless \"head\" at its top.\nAll-Consuming Devourers. A shambling mound feeds on any organic material, tirelessly consuming plants as it moves and devouring animals that can't escape it. Only the shambling mounds' rarity and plodding speed prevent them from overwhelming entire ecosystems. Even so, their presence leeches natural environments of plant and animal life, and an unsettling quiet pervades the swamps and woods haunted by these ever-hungry horrors.\nUnseen Hunters. Composed of decaying leaves, vines, roots, and other natural swamp and forest compost, shamblers can blend into their environs. Because they move slowly, they rarely attempt to pursue and catch creatures. Rather, they remain in place, sustaining themselves by absorbing nutrients from their surroundings as they wait for prey to come to them. When a creature passes near or alights upon a shambling mound, the monster comes to life, seizing and absorbing the unwary prey.\nSpawned by Lightning. A shambling mound results from a phenomenon in which lightning or fey magic invigorates an otherwise ordinary swamp plant. As the plant is reborn into its second life, it chokes the life from plants and animals around it, mulching their corpses in a heap around its roots. Those roots eventually give up their reliance on the soil, directing the shambling mound to seek out new sources of food.\nThe Weed that Walks. The instinct that drives a shambling mound is its central root-stem, buried somewhere inside its ponderous form. The rest of a shambler consists of the rotting heap that it simultaneously accumulates and feeds on, which protects the root-stem and animates to smash and smother the life from any creature.\nThe dense mass of a shambling mound's body shrugs off the effects of cold and fire. Lightning reinvigorates the root-stem, strengthening the shambling mound and bolstering its consumptive drive.\nDespite its monstrous form, the shambling mound is a living plant that requires air and nourishment. Although it doesn't sleep the way an animal does, it can lie dormant for days on end before rising to hunt for food.\nA Resurgent Menace. If a shambling mound faces defeat before an overwhelming foe, the root-stem can feign death, collapsing the remains of its mound. If not subsequently killed, the root-stem beds down in the shambler's remains to slowly regrow its full body, then once again sets out to consume all it can. In this way, shambling mound infestations long thought destroyed can recur time and again.\nSource: Monster Manual p. 270, Curse of Strahd, Hoard of the Dragon Queen, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros",
        "environment": "forest, swamp"
    },
    {
        "name": "Shield Guardian",
        "size": "L",
        "type": "construct",
        "alignment": "Unaligned",
        "ac": "17 (natural armor)",
        "hp": "142 (15d10+60)",
        "speed": "walk 30 ft.",
        "str": "18",
        "dex": "8",
        "con": "18",
        "int": "7",
        "wis": "10",
        "cha": "3",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "understands commands given in any language but can't speak",
        "cr": "7",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "trait": [
            {
                "name": "Bound",
                "text": "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian."
            },
            {
                "name": "Regeneration",
                "text": "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point."
            },
            {
                "name": "Spell Storing",
                "text": "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The guardian makes two fist attacks."
            },
            {
                "name": "Fist",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) bludgeoning damage.",
                "attack": "Fist|+7|2d6+4"
            }
        ],
        "reaction": {
            "name": "Shield",
            "text": "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer."
        },
        "description": "Wizards and other spellcasters create shield guardians for protection. A shield guardian treads beside its master, absorbing damage to keep its master alive as long as possible.\nMaster's Amulet. Every shield guardian has an amulet magically linked to it. A shield guardian can have only one corresponding amulet, and if that amulet is destroyed, the shield guardian is incapacitated until a replacement amulet is created. A shield guardian's amulet is subject to direct attack if it isn't being worn or carried. It has AC 10, 10 hit points, and immunity to poison and psychic damage. Crafting an amulet requires 1 week and costs 1,000 gp in components.\nA shield guardian's solitary focus is to protect the amulet's wearer. The amulet's wearer can command the guardian to attack its enemies or to guard the wielder against attack. If an attack threatens to injure the wearer, the construct can magically absorb the blow into its own body, even at a distance.\nA spellcaster can store a single spell within a shield guardian, which can then cast the spell on command or under specific conditions. Many a wizard has been rendered helpless by enemies, only to surprise those foes when its shield guardian unleashes potent magical power.\nMagnificent Treasure. Because a shield guardian's ownership can be transferred by giving its matching amulet to another creature, some wizards collect exorbitant sums from princes, nobles, and crime lords to create shield guardians for them. At the same time, a shield guardian makes a mighty prize for anyone who slays its master and claims its amulet.\nConstruct Nature. A shield guardian doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 271, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden",
        "environment": "urban"
    },
    {
        "name": "Shrieker",
        "size": "M",
        "type": "plant",
        "alignment": "Unaligned",
        "ac": "5",
        "hp": "13 (3d8)",
        "speed": "walk 0 ft.",
        "str": "1",
        "dex": "1",
        "con": "10",
        "int": "1",
        "wis": "3",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "6",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "blinded, deafened, frightened",
        "senses": "blindsight 30 ft. (blind beyond this radius)",
        "trait": {
            "name": "False Appearance",
            "text": "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
        },
        "action": {
            "name": "Shriek",
            "text": "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward."
        },
        "description": "A shrieker is a human-sized mushroom that emits a piercing screech to drive off creatures that disturb it. Other creatures use the fungi as an alarm to signal the approach of prey, and various intelligent races of the Underdark cultivate shriekers on the outskirts of their communities to discourage trespassers.\nFungi. With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.\nFungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.\nNot needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.\nSource: Monster Manual p. 138, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh",
        "environment": "underdark"
    },
    {
        "name": "Silver Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "17 (natural armor)",
        "hp": "45 (6d8+18)",
        "speed": "walk 30 ft., fly 60 ft.",
        "str": "19",
        "dex": "10",
        "con": "17",
        "int": "12",
        "wis": "11",
        "cha": "15",
        "save": "Dex +2, Con +5, Wis +2, Cha +4",
        "skill": "Perception +4, Stealth +2",
        "passive": "14",
        "languages": "Draconic",
        "cr": "2",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 9 (1d10 + 4) piercing damage.",
                "attack": "Bite|+6|1d10+4"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Cold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
                    "• Paralyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||4d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 118, Storm King's Thunder, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Skeleton",
        "size": "M",
        "type": "undead",
        "alignment": "Lawful Evil",
        "ac": "13 (armor scraps)",
        "hp": "13 (2d8+4)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "14",
        "con": "15",
        "int": "6",
        "wis": "8",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "understands all languages it spoke in life but can't speak",
        "cr": "1/4",
        "resist": "",
        "immune": "poison",
        "vulnerable": "bludgeoning",
        "conditionImmune": "exhaustion, poisoned",
        "senses": "darkvision 60 ft.",
        "action": [
            {
                "name": "Shortsword",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Shortsword|+4|1d6+2"
            },
            {
                "name": "Shortbow",
                "text": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Shortbow|+4|1d6+2"
            }
        ],
        "description": "Skeletons arise when animated by dark magic. They heed the summons of spellcasters who call them from their stony tombs and ancient battlefields, or rise of their own accord in places saturated with death and loss, awakened by stirrings of necromantic energy or the presence of corrupting evil.\nAnimated Dead. Whatever sinister force awakens a skeleton infuses its bones with a dark vitality, adhering joint to joint and reassembling dismantled limbs. This energy motivates a skeleton to move and think in a rudimentary fashion, though only as a pale imitation of the way it behaved in life. An animated skeleton retains no connection to its past, although resurrecting a skeleton restores it body and soul, banishing the hateful undead spirit that empowers it.\nWhile most skeletons are the animated remains of dead humans and other humanoids, skeletal undead can be created from the bones of other creatures besides humanoids, giving rise to a host of terrifying and unique forms.\nObedient Servants. Skeletons raised by spell are bound to the will of their creator. They follow orders to the letter, never questioning the tasks their masters give them, regardless of the consequences. Because of their literal interpretation of commands and unwavering obedience, skeletons adapt poorly to changing circumstances. They can't read, speak, emote, or communicate in any way except to nod, shake their heads, or point. Still, skeletons are able to accomplish a variety of relatively complex tasks.\nA skeleton can fight with weapons and wear armor, can load and fire a catapult or trebuchet, scale a siege ladder, form a shield wall, or dump boiling oil. However, it must receive careful instructions explaining how such tasks are accomplished.\nAlthough they lack the intellect they possessed in life, skeletons aren't mindless. Rather than break its limbs attempting to batter its way through an iron door, a skeleton tries the handle first. If that doesn't work, it searches for another way through or around the obstacle.\nHabitual Behaviors. Independent skeletons temporarily or permanently free of a master's control sometimes pantomime actions from their past lives, their bones echoing the rote behaviors of their former living selves. The skeleton of a miner might lift a pick and start chipping away at stone walls. The skeleton of a guard might strike up a post at a random doorway. The skeleton of a dragon might lie down on a pile of treasure, while the skeleton of a horse crops grass it can't eat. Left alone in a ballroom, the skeletons of nobles might continue an eternally unfinished dance.\nWhen skeletons encounter living creatures, the necromantic energy that drives them compels them to kill unless they are commanded by their masters to refrain from doing so. They attack without mercy and fight until destroyed, for skeletons possess little sense of self and even less sense of self-preservation.\nUndead Nature. A skeleton doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 272, Curse of Strahd, Lost Mine of Phandelver, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy, Infernal Machine Rebuild, Tasha's Cauldron of Everything",
        "environment": "urban"
    },
    {
        "name": "Slaad Tadpole",
        "size": "T",
        "type": "aberration",
        "alignment": "Chaotic Neutral",
        "ac": "12",
        "hp": "10 (4d4)",
        "speed": "walk 30 ft.",
        "str": "7",
        "dex": "15",
        "con": "10",
        "int": "3",
        "wis": "5",
        "cha": "3",
        "save": "",
        "skill": "Stealth +4",
        "passive": "7",
        "languages": "understands Slaad but can't speak",
        "cr": "1/8",
        "resist": "acid, cold, fire, lightning, thunder",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Magic Resistance",
            "text": "The slaad has advantage on saving throws against spells and other magical effects."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) piercing damage.",
            "attack": "Bite|+4|1d4+2"
        },
        "description": "In the Ever-Changing Chaos of Limbo, bits of forest and meadow, ruined castles, and isolated islands drift through a tumult of fire, water, earth, and wind. The foremost inhabitants of this inhospitable plane are the toad-like slaadi. Slaadi are undisciplined and have no formal hierarchy, although weaker slaadi obey stronger ones under threat of annihilation.\nThe Spawning Stone. Long ago, Primus, overlord of the modrons, created a gigantic, geometrically complex stone imbued with the power of law. He then cast it adrift in Limbo, believing that the stone would bring order to the chaos of that plane and halt the spread of chaos to other planes. As the stone's power grew, it became possible for creatures with ordered minds, such as modrons and githzerai, to create enclaves in Limbo. However, Primus's creation had an unforeseen side effect: the chaotic energy absorbed by the stone spawned the horrors that came to be known as slaadi. Sages refer to Primus's massive creation as the Spawning Stone for this reason.\nThe slaadi wiped out every last modron enclave in Limbo. As creatures of utter chaos, slaadi loathe modrons and attack them on sight. Nonetheless, Primus stands by his creation and either doesn't perceive the slaadi as threats or chooses to ignore them.\nBirth and Transformation. Slaadi have horrific cycles of reproduction. Slaadi reproduce either by implanting humanoid hosts with eggs or by infecting them with a transformative disease called chaos phage. Each color of slaad reproduces or transforms in a different way, with red slaadi spawning blue and green slaadi, and blue slaadi spawning red and green. Each green slaad undergoes a lifelong cycle of transformation into the more powerful gray and death slaadi. With each transformation, the slaad retains its memories.\nShapechangers. Some slaadi can transform into the humanoid creatures from which they were originally spawned. These slaadi return to the Material Plane to sow discord in the guise of their former selves.\nControl Gem. Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled. Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.\nA greater restoration spell cast on the slaad destroys the gem without harming the slaad.\nSomeone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.\nSource: Monster Manual p. 276, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Smoke Mephit",
        "size": "S",
        "type": "elemental",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "22 (5d6+5)",
        "speed": "walk 30 ft., fly 30 ft.",
        "str": "6",
        "dex": "14",
        "con": "12",
        "int": "10",
        "wis": "10",
        "cha": "11",
        "save": "",
        "skill": "Perception +2, Stealth +4",
        "passive": "12",
        "languages": "Auran, Ignan",
        "cr": "1/4",
        "resist": "",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Death Burst",
                "text": "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute."
            },
            {
                "name": "Innate Spellcasting (1/Day)",
                "text": [
                    "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma.",
                    "At will: dancing lights"
                ]
            }
        ],
        "action": [
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 4 (1d4 + 2) slashing damage.",
                "attack": "Claws|+4|1d4+2"
            },
            {
                "name": "Cinder Breath (Recharge 6)",
                "text": "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded until the end of the mephit's next turn."
            },
            {
                "name": "Variant: Summon Mephits (1/Day)",
                "text": "The mephit has a 25 chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
            }
        ],
        "spells": "dancing lights",
        "description": "Elemental Nature. A mephit doesn't require food, drink, or sleep.\nSource: Monster Manual p. 217, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage",
        "environment": "urban"
    },
    {
        "name": "Solar",
        "size": "L",
        "type": "celestial",
        "alignment": "Lawful Good",
        "ac": "21 (natural armor)",
        "hp": "243 (18d10+144)",
        "speed": "walk 50 ft., fly 150 ft.",
        "str": "26",
        "dex": "22",
        "con": "26",
        "int": "25",
        "wis": "25",
        "cha": "30",
        "save": "Int +14, Wis +14, Cha +17",
        "skill": "Perception +14",
        "passive": "24",
        "languages": "all, telepathy 120 ft.",
        "cr": "21",
        "resist": "radiant; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "necrotic, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened, poisoned",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Angelic Weapons",
                "text": "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
            },
            {
                "name": "Divine Awareness",
                "text": "The solar knows if it hears a lie."
            },
            {
                "name": "Magic Resistance",
                "text": "The solar has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:",
                    "At will: detect evil and good, invisibility (self only)",
                    "3/day each: blade barrier, dispel evil and good, resurrection",
                    "1/day each: commune, control weather"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The solar makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "text": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.",
                "attack": "Greatsword|+15|4d6+8"
            },
            {
                "name": "Slaying Longbow",
                "text": "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
                "attack": "Slaying Longbow|+13|2d8+6"
            },
            {
                "name": "Flying Sword",
                "text": "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
            },
            {
                "name": "Healing Touch (4/Day)",
                "text": "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            }
        ],
        "legendary": [
            {
                "text": "The celestial can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The celestial regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Teleport",
                "text": "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                "name": "Searing Burst (Costs 2 Actions)",
                "text": "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "Blinding Gaze (Costs 3 Actions)",
                "text": "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
            }
        ],
        "spells": "detect evil and good, invisibility, blade barrier, dispel evil and good, resurrection, commune, control weather",
        "description": "An angel is a celestial agent sent forth into the planes to further its god's agenda for weal or woe. Its sublime beauty and presence can drive awestruck onlookers to their knees. Yet angels are destroyers too, and their appearance portends doom as often as it signals hope.\nShards of the Divine. Angels are formed from the astral essence of benevolent gods and are thus divine beings of great power and foresight.\nAngels act out the will of their gods with tireless devotion. Even chaotic good deities command lawful good angels, knowing that the angels' dedication to order best allows them to fulfill divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good.\nAn angel slays evil creatures without remorse. As the embodiment of law and good, an angel is almost never mistaken in its judgments. This quality can create a sense of superiority in an angel, a sense that comes to the fore when an angel's task conflicts with the goals of another creature. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send their angels among mortals only in response to the most dire circumstances.\nFallen Angels. An angel's moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen in the hierarchy of the Nine Hells. Zariel, the ruler of the first layer of the Nine Hells, is such a creature. Rather than rebel, some fallen angels resign themselves to an isolated existence on the Material Plane, living in disguise as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service.\nImmortal Nature. An angel doesn't require food, drink, or sleep.\nSolar. A solar is godlike in its glory and power.\nOn the battlefield, the solar's sword flies into the fray on its own, and a single arrow from a solar's bow can strike a target dead on contact. So great is a solar's celestial might that even demon princes shrink at its resonant commands.\nIt is said that only twenty-four solars exist. The few solars that are known are stewards of specific deities. The others rest in a state of contemplation, waiting for the time when their services are needed to stave off some cosmic threat to the cause of good.\nSource: Monster Manual p. 18, Baldur's Gate: Descent Into Avernus",
        "environment": ""
    },
    {
        "name": "Spectator",
        "size": "M",
        "type": "aberration",
        "alignment": "Lawful Neutral",
        "ac": "14 (natural armor)",
        "hp": "39 (6d8+12)",
        "speed": "walk 0 ft., fly 30 ft.",
        "str": "8",
        "dex": "14",
        "con": "14",
        "int": "13",
        "wis": "14",
        "cha": "11",
        "save": "",
        "skill": "Perception +6",
        "passive": "16",
        "languages": "Deep Speech, Undercommon, telepathy 120 ft.",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "prone",
        "senses": "darkvision 120 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. 2 (1d6 - 1) piercing damage.",
                "attack": "Bite|+1|1d6-1"
            },
            {
                "name": "Eye Rays",
                "text": [
                    "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn.",
                    "1. Confusion Ray. The target must succeed on a DC 13 Wisdom saving throw, or it can't take reactions until the end of its next turn. On its turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on its turn.",
                    "2. Paralyzing Ray. The target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "3. Fear Ray. The target must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.",
                    "4. Wounding Ray. The target must make a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as much damage on a successful one."
                ],
                "attack": "Eye Rays||3d10"
            },
            {
                "name": "Create Food and Water",
                "text": "The spectator magically creates enough food and water to sustain itself for 24 hours."
            }
        ],
        "reaction": {
            "name": "Spell Reflection",
            "text": "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
        },
        "description": "A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the ritual's magic. Appropriately, a spectator has four eyestalks, two on each side of the wide eye at the center of its four-foot diameter body.\nMagical Guardians. A summoned spectator guards a location or a treasure of its summoner's choice for 101 years, allowing no creature but its summoner to enter the area or access the item, unless the summoner instructed otherwise. If the item is stolen or destroyed before the years have all passed, a summoned spectator vanishes. It otherwise never abandons its post.\nGlimmers of Madness. Though it can speak, a spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.\nLike any beholder, a spectator views itself as the epitome of its kind, and it has an intense hatred of other spectators. If two spectators encounter one another, they almost always fight to the death.\nFreed from Service. When a spectator has fulfilled its service, it is free to do as it pleases. Many take up residence in the places they previously guarded, especially if their summoners have died. With the spectator's loss of purpose, the flickers of madness it displayed during its servitude flourish.\nSource: Monster Manual p. 30, Lost Mine of Phandelver, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, The Lost Dungeon of Rickedness: Big Rick Energy, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Specter",
        "size": "M",
        "type": "undead",
        "alignment": "Chaotic Evil",
        "ac": "12",
        "hp": "22 (5d8)",
        "speed": "walk 0 ft., fly 50 ft.",
        "str": "1",
        "dex": "14",
        "con": "11",
        "int": "10",
        "wis": "10",
        "cha": "11",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "understands all languages it knew in life but can't speak",
        "cr": "1",
        "resist": "acid, cold, fire, lightning, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "necrotic, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Incorporeal Movement",
                "text": "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "action": {
            "name": "Life Drain",
            "text": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
            "attack": "Life Drain|+4|3d6"
        },
        "description": "A specter is the angry, unfettered spirit of a humanoid that has been prevented from passing to the afterlife. Specters no longer possess connections to who or what they were, yet are condemned to walk the world forever. Some are spawned when dark magic or the touch of a wraith rips a soul from a living body.\nBeyond Redemption. When a ghost's unfinished business is completed, it can rest at last. No such rest or redemption awaits a specter. It is doomed to the Material Plane, its only end the oblivion that comes with the destruction of its soul. Until then, it bears out its lonely life in forlorn places, carrying on forgotten through the ages of the world.\nUndying Hatred. Living creatures remind the specter that life is beyond its grasp. The mere sight of the living overwhelms a specter with sorrow and wrath, which can be abated only by destroying said life. A specter kills quickly and mercilessly, for only by depriving others of life can it gain the slightest satisfaction. However, no matter how many lives it extinguishes, a specter always succumbs to its hatred and sorrow.\nDwellers in Darkness. Sunlight represents a source of life that no specter can ever hope to douse, and it pains them. When night falls, they leave their final resting places in search of living creatures to slay, knowing that few weapons can harm them in return.\nAt the first light of dawn, they retreat back into the darkness, where they remain until night falls again.\nUndead Nature. A specter doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 279, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "underdark, urban"
    },
    {
        "name": "Spider",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "1 (1d4-1)",
        "speed": "walk 20 ft., climb 20 ft.",
        "str": "2",
        "dex": "14",
        "con": "8",
        "int": "1",
        "wis": "10",
        "cha": "2",
        "save": "",
        "skill": "Stealth +4",
        "passive": "10",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 30 ft.",
        "trait": [
            {
                "name": "Spider Climb",
                "text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "text": "The spider ignores movement restrictions caused by webbing."
            }
        ],
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
            "attack": "Bite|+4|1d4"
        },
        "description": "Source: Monster Manual p. 337, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage",
        "environment": ""
    },
    {
        "name": "Spined Devil",
        "size": "S",
        "type": "fiend (devil)",
        "alignment": "Lawful Evil",
        "ac": "13 (natural armor)",
        "hp": "22 (5d6+5)",
        "speed": "walk 20 ft., fly 40 ft.",
        "str": "10",
        "dex": "15",
        "con": "12",
        "int": "11",
        "wis": "14",
        "cha": "8",
        "save": "",
        "skill": "",
        "passive": "12",
        "languages": "Infernal, telepathy 120 ft.",
        "cr": "2",
        "resist": "cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Devil's Sight",
                "text": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Flyby",
                "text": "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach."
            },
            {
                "name": "Limited Spines",
                "text": "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest."
            },
            {
                "name": "Magic Resistance",
                "text": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 5 (2d4) slashing damage.",
                "attack": "Bite|+2|2d4"
            },
            {
                "name": "Fork",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 3 (1d6) piercing damage.",
                "attack": "Fork|+2|1d6"
            },
            {
                "name": "Tail Spine",
                "text": "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. 4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage.",
                "attack": "Tail Spine|+4|1d4+2"
            }
        ],
        "description": "Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.\nLords of Tyranny. Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.\nDevils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.\nObedience and Ambition. In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.\nAt the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.\nDark Dealers and Soul Mongers. Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.\nTo own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.\nThe Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.\nA supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.\nIf it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.\nArchdevils. The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.\nGreater Devils. The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.\nLesser Devils. The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.\nLemures. The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.\nPromotion and Demotion. When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.\nLow-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.\nDemotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.\nNo devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.\nInfernal Hierarchy\nRank | Devil(s)\n1. | lemure\n2. (Lesser devils) | imp\n3. | spined devil\n4. | bearded devil\n5. | barbed devil\n6. | chain devil\n7. | bone devil\n8. (Greater devils) | horned devil\n9. | erinyes\n10. | ice devil\n11. | pit fiend\n12. (Archdevils) | duke or duchess\n13. | archduke or archduchess\nThe Nine Hells\nThe Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.\nLayers and Lords of the Nine Hells Layer\nLayer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants\n1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils\n2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils\n3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils\n4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils\n5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps\n6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps\n7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps\n8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends\n9 | Nessus | Asmodeus | — | All devils\nDevil True Names and Talismans.\n------\nThough devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.\nA mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.\nHowever it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.\n------\nSummon Devil (1/Day)\nThe devil chooses what to summon and attempts a magical summoning.\nSource: Monster Manual p. 78, Tomb of Annihilation, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus",
        "environment": ""
    },
    {
        "name": "Spirit Naga",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "75 (10d10+20)",
        "speed": "walk 40 ft.",
        "str": "18",
        "dex": "17",
        "con": "14",
        "int": "16",
        "wis": "15",
        "cha": "16",
        "save": "Dex +6, Con +5, Wis +5, Cha +6",
        "skill": "",
        "passive": "12",
        "languages": "Abyssal, Common",
        "cr": "8",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Rejuvenation",
                "text": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:",
                    "Cantrips (at will): mage hand, minor illusion, ray of frost",
                    "• 1st level (4 slots): charm person, detect magic, sleep",
                    "• 2nd level (3 slots): detect thoughts, hold person",
                    "• 3rd level (3 slots): lightning bolt, water breathing",
                    "• 4th level (3 slots): blight, dimension door",
                    "• 5th level (2 slots): dominate person"
                ]
            }
        ],
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.",
            "attack": [
                "Bite|+7|1d6+4",
                "Bite||7d8"
            ]
        },
        "slots": "4, 3, 3, 3, 2",
        "spells": "mage hand, minor illusion, ray of frost, charm person, detect magic, sleep, detect thoughts, hold person, lightning bolt, water breathing, blight, dimension door, dominate person",
        "description": "Spirit nagas live in gloom and spitefulness, constantly plotting vengeance against creatures that have wronged them-or that they believe have wronged them. Lairing in dismal caverns and ruins, they devote their time to developing new spells and enslaving the mortals with which they surround themselves. A spirit naga likes to charm its foes, drawing them close so that it can sink its poisonous fangs into their flesh.\nNagas. Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.\nThe first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.\nNagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.\nBenevolent Dictators and Brutal Tyrants. A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.\nRivalry. Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.\nImmortal Nature. A naga doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 234, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "underdark"
    },
    {
        "name": "Sprite",
        "size": "T",
        "type": "fey",
        "alignment": "Neutral Good",
        "ac": "15 (leather armor)",
        "hp": "2 (1d4)",
        "speed": "walk 10 ft., fly 40 ft.",
        "str": "3",
        "dex": "18",
        "con": "10",
        "int": "14",
        "wis": "13",
        "cha": "11",
        "save": "",
        "skill": "Perception +3, Stealth +8",
        "passive": "13",
        "languages": "Common, Elvish, Sylvan",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 1 slashing damage."
            },
            {
                "name": "Shortbow",
                "text": "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
            },
            {
                "name": "Heart Sight",
                "text": "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
            },
            {
                "name": "Invisibility",
                "text": "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
            }
        ],
        "description": "In secret groves and shaded glens, tiny sprites with dragonfly wings flutter. For all their fey splendor, however, sprites lack warmth and compassion. They are aggressive and hardy warriors, taking severe measures to ward strangers away from their homes. Interlopers that come too close have their moral character judged, then are put to sleep or frightened off.\nForest Protectors. Sprites build little villages in the boughs of trees and willing treants, in verdant glades brightened by moss, wild flowers, and toadstools. Wild nature thrives, and the sprites allow no trespassers. When intruders are spotted, the sprites lead them astray with ominous rustling from the bushes and distant snapping twigs. Creatures foolish enough to persist in intruding on a sprite's territory are stung with poisoned arrows and lulled into a senseless sleep. While they slumber, the sprites make good their escape, retreating to an even more secluded area of the forest.\nHeart Seers. Sprites can sense whether a creature is good or evil by the sound and feeling of its beating heart. Weighing the balance of a creature's past actions, a sprite can tell whether its heart beats rapidly in love or flags in sorrow, or whether it is darkened by hate or greed. The sprite's power to perceive the heart always shows the truth, because the heart can't lie.\nPoison Brewers. In their forest domains, sprites brew toxins, unguents, antidotes, and poisons, including the sleep poison with which they coat their arrows. They venture far into the woods to harvest rare flowers, mosses, and fungi, sometimes crossing dangerous territory to do so. If desperate, sprites even steal their ingredients from the gardens of hags.\nGood-Hearted. Because they are judges of the heart and favor good creatures, sprites oppose the will of evil fey and pledge to thwart evil archfey at every turn. If they encounter adventurers on a quest to rid their forest of an evil fey creature or goblinoid menace, they will pledge their support and even come to their aid when the adventurers least expect it.\nUnlike pixies, sprites rarely indulge in frivolous merriment and fun. They are firm warriors, protectors, and judges, and their stern bent causes other fey to consider them overly dour and serious. However, fey that respect the sprites' territory find them staunch allies in times of trouble.\nSource: Monster Manual p. 283, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild",
        "environment": "forest"
    },
    {
        "name": "Spy",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "12",
        "hp": "27 (6d8)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "15",
        "con": "10",
        "int": "12",
        "wis": "14",
        "cha": "16",
        "save": "",
        "skill": "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of hand +4, Stealth +4",
        "passive": "16",
        "languages": "any two languages",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Cunning Action",
                "text": "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
            },
            {
                "name": "Sneak Attack (1/Turn)",
                "text": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The spy makes two melee attacks."
            },
            {
                "name": "Shortsword",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Shortsword|+4|1d6+2"
            },
            {
                "name": "Hand Crossbow",
                "text": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Hand Crossbow|+4|1d6+2"
            }
        ],
        "description": "Rulers, nobles, merchants, guildmasters, and other wealthy individuals use spies to gain the upper hand in a world of cutthroat politics. A spy is trained to secretly gather information. Loyal spies would rather die than divulge information that could compromise them or their employers.\nSource: Monster Manual p. 349, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Steam Mephit",
        "size": "S",
        "type": "elemental",
        "alignment": "Neutral Evil",
        "ac": "10",
        "hp": "21 (6d6)",
        "speed": "walk 30 ft., fly 30 ft.",
        "str": "5",
        "dex": "11",
        "con": "10",
        "int": "11",
        "wis": "10",
        "cha": "12",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Aquan, Ignan",
        "cr": "1/4",
        "resist": "",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Death Burst",
                "text": "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage."
            },
            {
                "name": "Innate Spellcasting (1/Day)",
                "text": [
                    "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.",
                    "At will: blur"
                ]
            }
        ],
        "action": [
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. 2 (1d4) slashing damage plus 2 (1d4) fire damage.",
                "attack": "Claws|+2|1d4"
            },
            {
                "name": "Steam Breath (Recharge 6)",
                "text": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.",
                "attack": "Steam Breath (Recharge 6)||1d8"
            },
            {
                "name": "Variant: Summon Mephits (1/Day)",
                "text": "The mephit has a 25 chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
            }
        ],
        "spells": "blur",
        "description": "Elemental Nature. A mephit doesn't require food, drink, or sleep.\nSource: Monster Manual p. 217, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Explorer's Guide to Wildemount",
        "environment": "underwater"
    },
    {
        "name": "Stirge",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "14 (natural armor)",
        "hp": "2 (1d4)",
        "speed": "walk 10 ft., fly 40 ft.",
        "str": "4",
        "dex": "16",
        "con": "11",
        "int": "2",
        "wis": "8",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "action": {
            "name": "Blood Drain",
            "text": [
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.",
                "The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
            ],
            "attack": "Blood Drain|+5|1d4+3"
        },
        "description": "This horrid flying creature looks like a cross between a large bat and an oversized mosquito. Its legs end in sharp pincers, and its long, needle-like proboscis slashes the air as it seeks its next meal.\nStirges feed on the blood of living creatures, attaching and draining them slowly. Although they pose little danger in small numbers, packs of stirges can be a formidable threat, reattaching as quickly as their weakening prey can pluck them off.\nBlood Drain. A stirge attacks by landing on a victim, finding a vulnerable spot, and plunging its proboscis into the flesh while using its pincer legs to latch on to the victim. Once the stirge has sated itself, it detaches and flies off to digest its meal.\nSource: Monster Manual p. 284, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy, Infernal Machine Rebuild, Explorer's Guide to Wildemount",
        "environment": "grassland, forest, swamp, hill, urban, desert, coastal, mountain, underdark"
    },
    {
        "name": "Stone Giant",
        "size": "H",
        "type": "giant",
        "alignment": "Neutral",
        "ac": "17 (natural armor)",
        "hp": "126 (11d12+55)",
        "speed": "walk 40 ft.",
        "str": "23",
        "dex": "15",
        "con": "20",
        "int": "10",
        "wis": "12",
        "cha": "9",
        "save": "Dex +5, Con +8, Wis +4",
        "skill": "Athletics +12, Perception +4",
        "passive": "14",
        "languages": "Giant",
        "cr": "7",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Stone Camouflage",
            "text": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The giant makes two greatclub attacks."
            },
            {
                "name": "Greatclub",
                "text": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. 19 (3d8 + 6) bludgeoning damage.",
                "attack": "Greatclub|+9|3d8+6"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
                "attack": "Rock|+9|4d10+6"
            },
            {
                "name": "Variant: New Giant Options",
                "text": [
                    "Some adult stone giants like to grab enemies and fling them through the air. They can also roll boulders across the ground, striking multiple enemies in a line. These abilities are represented by the following action options.",
                    "Fling. The giant tries to throw a Small or Medium creature within 10 feet of it. The target must succeed on a DC 17 Dexterity saving throw or be hurled up to 60 feet horizontally in a direction of the giant's choice and land prone, taking 3 (1d6) bludgeoning damage for every 10 feet it was thrown.",
                    "Rolling Rock. The giant sends a rock tumbling along the ground in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 17 Dexterity saving throw, taking 22 (3d10 + 6) bludgeoning damage and falling prone on a failed save"
                ]
            }
        ],
        "reaction": {
            "name": "Rock Catching",
            "text": "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it."
        },
        "description": "Old as Legend\nIn remote regions of the world, the last remaining plinths, monoliths, and statues of the great giant empires bow their heads in desolate obscurity. Where once those empires sprawled across all lands, now the giants dwell in isolated tribes and clans.\nGiants are almost as old as dragons, which were still young when the giants' heavy feet first shook the foundations of the world. As they spread across new lands, giants and dragons fought bitter generational wars that nearly brought both sides low. No living giant remembers what started the conflict, but myths and tales of their race's glorious dawn are still sung in their steadings and holdfasts, vilifying the primeval wyrms. Giants and dragons continue to harbor grudges against one another, and it is seldom that they will meet or occupy the same area without a fight.\nThe Ordning\nEach of the main giant races-the cloud, fire, frost, hill, stone, and storm giants-are related by common elements of history, religion, and culture. They view one another as kindred, keeping any inherent animosity over territory and ambition to a minimum.\nGiants belong to a caste structure called the ordning. Based on social class and highly organized, the ordning assigns a social rank to each giant. By understanding its place in the ordning, a giant knows which other giants are inferior or superior to it, since no two giants are equal. Each of the giant races analyzes a different combination of skills or qualities to determine the ordning. Giants make excelling in these qualities the purpose of their lives.\nAt the highest level of the ordning, the races of the giants are also ranked according to status. Storm giants are the highest in the ordning, followed by cloud giants, fire giants, frost giants, stone giants, hill giants, and finally giant kin such as fomorians, ettins, and ogres.\nRegardless of a giant's rank among its own race, the chief of a hill giant tribe is inferior to the most common of stone giants. The lowest ranked giant of any type is superior to the highest ranked giant of an inferior type. It isn't considered evil to disrespect or even betray a giant of another type, merely rude.\nGiant Gods\nWhen the giants' ancient empires fell, Annam, father of all giants, forsook his children and the world. He swore never to look upon either again until the giants had returned to their glory and reclaimed their birthright as rulers of the world. As a result, giants pray not to Annam but to his divine children, along with a host of hero-deities and godly villains that make up the giants' pantheon.\nChief among these gods are the children of Annam, whose sons represent each type of giant: Stronmaus for storm giants, Memnor for cloud giants, Skoraeus Stonebones for stone giants, Thrym for frost giants, Surtur for fire giants, and Grolantor for hill giants. Not all giants automatically revere their kind's primary deity, however. Many good cloud giants refuse to worship the deceitful Memnor, and a storm giant dwelling in the icy mountains of the north might pay more homage to Thrym than Stronmaus. Other giants feel a stronger connection to Annam's daughters, who include Hiatea, the huntress and home warden; Iallanis, goddess of love and peace; and Diancastra, an impetuous and arrogant trickster.\nSome giants abandon their own gods and fall prey to demon cults, paying homage to Baphomet or Kostchtchie. To worship them or any other non-giant deity is a great sin against the ordning, and almost certain to make a giant an outcast.\nSource: Monster Manual p. 156, Hoard of the Dragon Queen, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros",
        "environment": "underdark, mountain, hill"
    },
    {
        "name": "Stone Golem",
        "size": "L",
        "type": "construct",
        "alignment": "Unaligned",
        "ac": "17 (natural armor)",
        "hp": "178 (17d10+85)",
        "speed": "walk 30 ft.",
        "str": "22",
        "dex": "9",
        "con": "20",
        "int": "3",
        "wis": "11",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "understands the languages of its creator but can't speak",
        "cr": "10",
        "resist": "",
        "immune": "poison, psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Immutable Form",
                "text": "The golem is immune to any spell or effect that would alter its form."
            },
            {
                "name": "Magic Resistance",
                "text": "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The golem's weapon attacks are magical."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The golem makes two slam attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 19 (3d8 + 6) bludgeoning damage.",
                "attack": "Slam|+10|3d8+6"
            },
            {
                "name": "Slow (Recharge 5-6)",
                "text": "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        "description": "Stone golems display great variety in shape and form, cut and chiseled from stone to appear as tall, impressive statues. Though most bear humanoid features, stone golems can be carved in any form the sculptor can imagine. Ancient stone golems found in sealed tombs or flanking the gates of lost cities sometimes take the forms of giant beasts.\nLike other golems, stone golems are nearly impervious to spells and ordinary weapons. Creatures that fight a stone golem can feel the ebb and flow of time slow down around them, almost as though they were made of stone themselves.\nGolems. Golems are made from humble materials-clay, flesh and bones, iron, or stone-but they possess astonishing power and durability. A golem has no ambitions, needs no sustenance, feels no pain, and knows no remorse. An unstoppable juggernaut, it exists to follow its creator's orders, and it protects or attacks as that creator demands.\nTo create a golem, one requires a manual of golems (see the Dungeon Master's Guide). The comprehensive illustrations and instructions in a manual detail the process for creating a golem of a particular type.\nElemental Spirit in Material Form. The construction of a golem begins with the building of its body, requiring great command of the craft of sculpting, stonecutting, ironworking, or surgery. Sometimes a golem's creator is the master of the art, but often the individual who desires a golem must enlist master artisans to do the work.\nAfter constructing the body from clay, flesh, iron, or stone, the golem's creator infuses it with a spirit from the Elemental Plane of Earth. This tiny spark of life has no memory, personality, or history. It is simply the impetus to move and obey. This process binds the spirit to the artificial body and subjects it to the will of the golem's creator.\nA golem can be created with a special amulet or other item that allows the possessor of the item to control the golem. Golems whose creators are long dead can thus be harnessed to serve a new master.\nA golem can't think or act for itself. Though it understands its commands perfectly, it has no grasp of language beyond that understanding, and can't be reasoned with or tricked with words.\nAgeless Guardians. Golems can guard sacred sites, tombs, and treasure vaults long after the deaths of their creators, carrying out their appointed tasks for all eternity while brushing off physical damage and ignoring all but the most potent spells.\nBlind Obedience. When its creator or possessor is on hand to command it, a golem performs flawlessly. If the golem is left without instructions or is incapacitated, it continues to follow its last orders to the best of its ability. When it can't fulfill its orders, a golem might react violently-or stand and do nothing. A golem that has been given conflicting orders sometimes alternates between them.\nConstructed Nature. A golem doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 170, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild",
        "environment": ""
    },
    {
        "name": "Storm Giant",
        "size": "H",
        "type": "giant",
        "alignment": "Chaotic Good",
        "ac": "16 (scale mail)",
        "hp": "230 (20d12+100)",
        "speed": "walk 50 ft., swim 50 ft.",
        "str": "29",
        "dex": "14",
        "con": "20",
        "int": "16",
        "wis": "18",
        "cha": "18",
        "save": "Str +14, Con +10, Wis +9, Cha +9",
        "skill": "Arcana +8, Athletics +14, History +8, Perception +9",
        "passive": "19",
        "languages": "Common, Giant",
        "cr": "13",
        "resist": "cold",
        "immune": "lightning, thunder",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The giant can breathe air and water."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
                    "At will: detect magic, feather fall, levitate, light",
                    "3/day each: control weather, water breathing"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The giant makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "text": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 30 (6d6 + 9) slashing damage.",
                "attack": "Greatsword|+14|6d6+9"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. 35 (4d12 + 9) bludgeoning damage.",
                "attack": "Rock|+14|4d12+9"
            },
            {
                "name": "Lightning Strike (Recharge 5-6)",
                "text": "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Strike (Recharge 5-6)||12d8"
            },
            {
                "name": "Variant: New Giant Options",
                "text": [
                    "Some adult storm giants can channel thunderous power through their bodies and release it with a deafening stomp. This ability is represented by the following action option.",
                    "Thunderous Stomp (Recharge 6). The storm giant stomps the ground, triggering a thunderclap. All other creatures within 15 feet of the giant must succeed on a DC 17 Constitution saving throw or take 33 (6d10) thunder damage and be deafened until the start of the giant's next turn. On a successful save, a creature takes half as much damage and isn't deafened. The thunderclap can be heard out to a range of 1,200 feet."
                ]
            }
        ],
        "spells": "detect magic, feather fall, levitate, light, control weather, water breathing",
        "description": "Old as Legend\nIn remote regions of the world, the last remaining plinths, monoliths, and statues of the great giant empires bow their heads in desolate obscurity. Where once those empires sprawled across all lands, now the giants dwell in isolated tribes and clans.\nGiants are almost as old as dragons, which were still young when the giants' heavy feet first shook the foundations of the world. As they spread across new lands, giants and dragons fought bitter generational wars that nearly brought both sides low. No living giant remembers what started the conflict, but myths and tales of their race's glorious dawn are still sung in their steadings and holdfasts, vilifying the primeval wyrms. Giants and dragons continue to harbor grudges against one another, and it is seldom that they will meet or occupy the same area without a fight.\nThe Ordning\nEach of the main giant races-the cloud, fire, frost, hill, stone, and storm giants-are related by common elements of history, religion, and culture. They view one another as kindred, keeping any inherent animosity over territory and ambition to a minimum.\nGiants belong to a caste structure called the ordning. Based on social class and highly organized, the ordning assigns a social rank to each giant. By understanding its place in the ordning, a giant knows which other giants are inferior or superior to it, since no two giants are equal. Each of the giant races analyzes a different combination of skills or qualities to determine the ordning. Giants make excelling in these qualities the purpose of their lives.\nAt the highest level of the ordning, the races of the giants are also ranked according to status. Storm giants are the highest in the ordning, followed by cloud giants, fire giants, frost giants, stone giants, hill giants, and finally giant kin such as fomorians, ettins, and ogres.\nRegardless of a giant's rank among its own race, the chief of a hill giant tribe is inferior to the most common of stone giants. The lowest ranked giant of any type is superior to the highest ranked giant of an inferior type. It isn't considered evil to disrespect or even betray a giant of another type, merely rude.\nGiant Gods\nWhen the giants' ancient empires fell, Annam, father of all giants, forsook his children and the world. He swore never to look upon either again until the giants had returned to their glory and reclaimed their birthright as rulers of the world. As a result, giants pray not to Annam but to his divine children, along with a host of hero-deities and godly villains that make up the giants' pantheon.\nChief among these gods are the children of Annam, whose sons represent each type of giant: Stronmaus for storm giants, Memnor for cloud giants, Skoraeus Stonebones for stone giants, Thrym for frost giants, Surtur for fire giants, and Grolantor for hill giants. Not all giants automatically revere their kind's primary deity, however. Many good cloud giants refuse to worship the deceitful Memnor, and a storm giant dwelling in the icy mountains of the north might pay more homage to Thrym than Stronmaus. Other giants feel a stronger connection to Annam's daughters, who include Hiatea, the huntress and home warden; Iallanis, goddess of love and peace; and Diancastra, an impetuous and arrogant trickster.\nSome giants abandon their own gods and fall prey to demon cults, paying homage to Baphomet or Kostchtchie. To worship them or any other non-giant deity is a great sin against the ordning, and almost certain to make a giant an outcast.\nSource: Monster Manual p. 156, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Mythic Odysseys of Theros",
        "environment": "coastal"
    },
    {
        "name": "Succubus",
        "size": "M",
        "type": "fiend (shapechanger)",
        "alignment": "Neutral Evil",
        "ac": "15 (natural armor)",
        "hp": "66 (12d8+12)",
        "speed": "walk 30 ft., fly 60 ft.",
        "str": "8",
        "dex": "17",
        "con": "13",
        "int": "15",
        "wis": "12",
        "cha": "20",
        "save": "",
        "skill": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
        "passive": "15",
        "languages": "Abyssal, Common, Infernal, telepathy 60 ft.",
        "cr": "4",
        "resist": "cold, fire, lightning, poison; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Telepathic Bond",
                "text": "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
            },
            {
                "name": "Shapechanger",
                "text": "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            }
        ],
        "action": [
            {
                "name": "Claw (Fiend Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage.",
                "attack": "Claw (Fiend Form Only)|+5|1d6+3"
            },
            {
                "name": "Charm",
                "text": [
                    "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.",
                    "The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
                ]
            },
            {
                "name": "Draining Kiss",
                "text": "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                "attack": "Draining Kiss||5d10+5"
            },
            {
                "name": "Etherealness",
                "text": "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
            }
        ],
        "description": "Succubi and incubi inhabit all of the Lower Planes, and the lascivious dark-winged fiends can be found in service to devils, demons, night hags, rakshasas, and yugoloths. Asmodeus, ruler of the Nine Hells, uses these fiends to tempt mortals to perform evil acts. The demon lord Graz'zt keeps succubi and incubi as advisers and consorts.\nThough legend speaks of them separately, any succubus can become an incubus, and vice versa. Most of these fiends do have a preference for one form or the other. Mortals only rarely see a succubus or incubus in its true form, however, for the fiend typically begins its corruption in veiled, insidious ways.\nBeautiful Corrupters. A succubus or incubus first appears in ethereal form, passing through walls like a ghost to lurk next to a mortal's bedside and whisper forbidden pleasures. Sleeping victims are tempted to give in to their darkest desires, indulge in taboos, and feed forbidden appetites. As the fiend fills the victim's dreams with debauched images, the victim becomes more susceptible to temptation in everyday life.\nInevitably, the fiend enters the mortal realm in tempting form to directly influence a creature's actions. Appearing in the guise of a humanoid who has previously appeared only in the victim's dreams, the succubus or incubus seduces or befriends its victim, indulging all its desires so that it performs evil acts of its own free will.\nA mortal bequeaths its soul to the fiend not by formal pledge or contract. Instead, when a succubus or incubus has corrupted a creature completely-some say by causing the victim to commit the three betrayals of thought, word, and deed-the victim's soul belongs to the fiend. The more virtuous the fiend's prey, the longer the corruption takes, but the more rewarding the downfall. After successfully corrupting a victim, the succubus or incubus kills it, and the tainted soul descends into the Lower Planes.\nThe succubus or incubus resorts to charming a victim magically only when necessary, usually as a form of self-defense. A charmed creature isn't responsible for its actions, so forcing it to behave against its will won't bring the fiend closer to the ultimate prize: the victim's soul.\nDeadly Kiss. The kiss of a succubus or incubus is an echo of the emptiness that is the fiend's longing for a corrupted soul. Likewise, the recipient of the fiend's kiss gains no satisfaction from it, experiencing only pain and the profound emptiness that the fiend imparts. The kiss is nothing short of an attack, usually delivered as a final farewell before the fiend escapes.\nFiendish Offspring. Succubi and incubi can reproduce with one another to spawn more of their kind. Less commonly, a succubus or incubus reproduces with a humanoid. From this unholy union, a cambion child is conceived. Invariably, the fiendish offspring is as wicked as its fiendish parent.\nSource: Monster Manual p. 285, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "urban"
    },
    {
        "name": "Swarm of Bats",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "22 (5d8)",
        "speed": "walk 0 ft., fly 30 ft.",
        "str": "5",
        "dex": "15",
        "con": "10",
        "int": "2",
        "wis": "12",
        "cha": "4",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "1/4",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 60 ft.",
        "trait": [
            {
                "name": "Echolocation",
                "text": "The swarm can't use its blindsight while deafened."
            },
            {
                "name": "Keen Hearing",
                "text": "The swarm has advantage on Wisdom (Perception) checks that rely on hearing."
            },
            {
                "name": "Swarm",
                "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+4|2d4"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 337, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount",
        "environment": "underdark, mountain, hill, urban"
    },
    {
        "name": "Swarm of Beetles",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "22 (5d8)",
        "speed": "walk 20 ft., burrow 5 ft., climb 20 ft.",
        "str": "3",
        "dex": "13",
        "con": "10",
        "int": "1",
        "wis": "7",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "1/2",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 10 ft.",
        "trait": {
            "name": "Swarm",
            "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+3|4d4"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338",
        "environment": "underdark, grassland, forest, swamp, hill, urban, desert"
    },
    {
        "name": "Swarm of Centipedes",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "22 (5d8)",
        "speed": "walk 20 ft., climb 20 ft.",
        "str": "3",
        "dex": "13",
        "con": "10",
        "int": "1",
        "wis": "7",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "1/2",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 10 ft.",
        "trait": {
            "name": "Swarm",
            "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        "action": {
            "name": "Bites",
            "text": [
                "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
                "A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way."
            ],
            "attack": "Bites|+3|4d4"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338, Curse of Strahd, Hoard of the Dragon Queen, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark, grassland, forest, swamp, hill, urban, desert"
    },
    {
        "name": "Swarm of Insects",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "22 (5d8)",
        "speed": "walk 20 ft., climb 20 ft.",
        "str": "3",
        "dex": "13",
        "con": "10",
        "int": "1",
        "wis": "7",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "1/2",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 10 ft.",
        "trait": {
            "name": "Swarm",
            "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+3|4d4"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338, Curse of Strahd, Hoard of the Dragon Queen, Tomb of Annihilation, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount",
        "environment": "underdark, grassland, forest, swamp, hill, urban, desert"
    },
    {
        "name": "Swarm of Poisonous Snakes",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "14",
        "hp": "36 (8d8)",
        "speed": "walk 30 ft., swim 30 ft.",
        "str": "8",
        "dex": "18",
        "con": "11",
        "int": "1",
        "wis": "10",
        "cha": "3",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "2",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 10 ft.",
        "trait": {
            "name": "Swarm",
            "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
        },
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.",
            "attack": [
                "Bites|+6|2d6",
                "Bites||4d6"
            ]
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338, Curse of Strahd, Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Sleeping Dragon's Wake, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "forest, swamp"
    },
    {
        "name": "Swarm of Quippers",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "13",
        "hp": "28 (8d8-8)",
        "speed": "walk 0 ft., swim 40 ft.",
        "str": "13",
        "dex": "16",
        "con": "9",
        "int": "1",
        "wis": "7",
        "cha": "2",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "1",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Blood Frenzy",
                "text": "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                "name": "Swarm",
                "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points."
            },
            {
                "name": "Water Breathing",
                "text": "The swarm can breathe only underwater."
            }
        ],
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+5|4d6"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Sleeping Dragon's Wake, Locathah Rising",
        "environment": "underwater"
    },
    {
        "name": "Swarm of Rats",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "10",
        "hp": "24 (7d8-7)",
        "speed": "walk 30 ft.",
        "str": "9",
        "dex": "11",
        "con": "9",
        "int": "2",
        "wis": "10",
        "cha": "3",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "1/4",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "darkvision 30 ft.",
        "trait": [
            {
                "name": "Keen Smell",
                "text": "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Swarm",
                "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+2|2d6"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 339, Curse of Strahd, Hoard of the Dragon Queen, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything",
        "environment": "swamp, urban"
    },
    {
        "name": "Swarm of Ravens",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "24 (7d8-7)",
        "speed": "walk 10 ft., fly 50 ft.",
        "str": "6",
        "dex": "14",
        "con": "8",
        "int": "3",
        "wis": "12",
        "cha": "6",
        "save": "",
        "skill": "Perception +5",
        "passive": "15",
        "languages": "",
        "cr": "1/4",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "",
        "trait": {
            "name": "Swarm",
            "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points."
        },
        "action": {
            "name": "Beaks",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Beaks|+4|2d6"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 339, Curse of Strahd, Rise of Tiamat, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Sleeping Dragon's Wake, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "forest, swamp, hill, urban"
    },
    {
        "name": "Swarm of Spiders",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "22 (5d8)",
        "speed": "walk 20 ft., climb 20 ft.",
        "str": "3",
        "dex": "13",
        "con": "10",
        "int": "1",
        "wis": "7",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "1/2",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 10 ft.",
        "trait": [
            {
                "name": "Swarm",
                "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
            },
            {
                "name": "Spider Climb",
                "text": "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "text": "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "text": "The swarm ignores movement restrictions caused by webbing."
            }
        ],
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+3|4d4"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338, Curse of Strahd, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Mythic Odysseys of Theros",
        "environment": "underdark, grassland, forest, swamp, hill, urban, desert"
    },
    {
        "name": "Swarm of Wasps",
        "size": "M",
        "type": "swarm of Medium beasts",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "22 (5d8)",
        "speed": "walk 5 ft., fly 30 ft.",
        "str": "3",
        "dex": "13",
        "con": "10",
        "int": "1",
        "wis": "7",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "1/2",
        "resist": "bludgeoning, piercing, slashing",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "blindsight 10 ft.",
        "trait": {
            "name": "Swarm",
            "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        "action": {
            "name": "Bites",
            "text": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
            "attack": "Bites|+3|4d4"
        },
        "description": "The Nature of Swarms.\n------\nThe swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a yuan-ti abomination might have swarms of poisonous snakes slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.\n------\nSource: Monster Manual p. 338, Curse of Strahd, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh",
        "environment": "underdark, grassland, forest, swamp, hill, urban, desert"
    },
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
    },
    {
        "name": "Thri-kreen",
        "size": "M",
        "type": "humanoid (thri-kreen)",
        "alignment": "Chaotic Neutral",
        "ac": "15 (natural armor)",
        "hp": "33 (6d8+6)",
        "speed": "walk 40 ft.",
        "str": "12",
        "dex": "15",
        "con": "13",
        "int": "8",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "Perception +3, Stealth +4, Survival +3",
        "passive": "13",
        "languages": "Thri-kreen",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Chameleon Carapace",
                "text": "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide."
            },
            {
                "name": "Standing Leap",
                "text": "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The thri-kreen makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. 4 (1d6 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                "attack": "Bite|+3|1d6+1"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 6 (2d4 + 1) slashing damage.",
                "attack": "Claws|+3|2d4+1"
            },
            {
                "name": "Variant: Thri-kreen Weapons and Psionics",
                "text": [
                    "Some thri-kreen employ special martial weapons. A gythka is a two-handed polearm with a blade at each end. A chatkcha is a flat, triangular wedge with three serrated blades (a light thrown weapon). A thri-kreen armed with a gythka and chatkchas gains the following action options:",
                    "Weapons Multiattack. The thri-kreen makes two gythka attacks or two chatkcha attacks.",
                    "Gythka. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 5 (1d8 + 1) slashing damage.",
                    "Chatkcha. Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. 5 (1d6 + 2) slashing damage.",
                    "A few thri-kreen manifest psionic abilities, using their powers to aid the hunt and communicate more easily with outsiders.",
                    "A psionic thri-kreen has telepathy out to a range of 60 feet and gains the following additional trait:",
                    "Innate Spellcasting (Psionics). The thri-kreen's innate spellcasting ability is Wisdom. The thri-kreen can innately cast the following spells, requiring no components:",
                    "• At will: mage hand (the hand is invisible)",
                    "• 1/day: invisibility (self only)",
                    "• 2/day each: blur, magic weapon"
                ]
            }
        ],
        "description": "Thri-kreen wander the deserts and savannas of the world, avoiding all other races.\nThri-Kreen Communication. Thri-kreen employ a language without words. To show emotion and reaction, a thri-kreen clacks its mandibles and waves its antennae, giving other thri-kreen a sense of what it is thinking and feeling. Other creatures find this manner of communication difficult to interpret and impossible to duplicate.\nWhen forced to interact with creatures of other intelligent species, thri-kreen employ alternative methods of communication, such as drawing pictures in sand or making pictures out of twigs or blades of grass.\nLimited Emotions. Thri-kreen experience the full range of emotions but aren't as prone to emotional outbursts as humans. Thri-kreen with psionic ability often demonstrate a wider range of emotions, particularly if they live near or interact with humans or other highly emotional creatures.\nIsolationists and Wanderers. Thri-kreen consider all other living creatures as potential nourishment, and they love the taste of elf flesh in particular. If a creature might be useful for something other than food, the thri-kreen aren't likely to attack it on sight. Thri-kreen kill to survive, never for sport.\nSleepless. Thri-kreen don't require sleep and can rest while remaining alert and performing light tasks. Their inability to sleep is thought to be the reason why thri-kreen have such short lifespans, the average thri-kreen life expectancy being only thirty years.\nSource: Monster Manual p. 288",
        "environment": "grassland, desert"
    },
    {
        "name": "Thug",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Non-Good Alignment",
        "ac": "11 (leather armor)",
        "hp": "32 (5d8+10)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "11",
        "con": "14",
        "int": "10",
        "wis": "10",
        "cha": "11",
        "save": "",
        "skill": "Intimidation +2",
        "passive": "10",
        "languages": "any one language (usually Common)",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Pack Tactics",
            "text": "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The thug makes two melee attacks."
            },
            {
                "name": "Mace",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 5 (1d6 + 2) bludgeoning damage.",
                "attack": "Mace|+4|1d6+2"
            },
            {
                "name": "Heavy Crossbow",
                "text": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. 5 (1d10) piercing damage.",
                "attack": "Heavy Crossbow|+2|1d10"
            }
        ],
        "description": "Thugs are ruthless enforcers skilled at intimidation and violence. They work for money and have few scruples.\nSource: Monster Manual p. 350, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Tiger",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "37 (5d10+10)",
        "speed": "walk 40 ft.",
        "str": "17",
        "dex": "15",
        "con": "14",
        "int": "3",
        "wis": "12",
        "cha": "8",
        "save": "",
        "skill": "Perception +3, Stealth +6",
        "passive": "13",
        "languages": "",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Keen Smell",
                "text": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pounce",
                "text": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 8 (1d10 + 3) piercing damage.",
                "attack": "Bite|+5|1d10+3"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 7 (1d8 + 3) slashing damage.",
                "attack": "Claw|+5|1d8+3"
            }
        ],
        "description": "Source: Monster Manual p. 339, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Mythic Odysseys of Theros",
        "environment": "grassland, forest"
    },
    {
        "name": "Treant",
        "size": "H",
        "type": "plant",
        "alignment": "Chaotic Good",
        "ac": "16 (natural armor)",
        "hp": "138 (12d12+60)",
        "speed": "walk 30 ft.",
        "str": "23",
        "dex": "8",
        "con": "21",
        "int": "12",
        "wis": "16",
        "cha": "12",
        "save": "",
        "skill": "",
        "passive": "13",
        "languages": "Common, Druidic, Elvish, Sylvan",
        "cr": "9",
        "resist": "bludgeoning, piercing",
        "immune": "",
        "vulnerable": "fire",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "False Appearance",
                "text": "While the treant remains motionless, it is indistinguishable from a normal tree."
            },
            {
                "name": "Siege Monster",
                "text": "The treant deals double damage to objects and structures."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The treant makes two slam attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 16 (3d6 + 6) bludgeoning damage.",
                "attack": "Slam|+10|3d6+6"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. 28 (4d10 + 6) bludgeoning damage.",
                "attack": "Rock|+10|4d10+6"
            },
            {
                "name": "Animate Trees (1/Day)",
                "text": "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
            }
        ],
        "description": "Treants are awakened trees that dwell in ancient forests. Although treants prefer to while away the days, months, and years in quiet contemplation, they fiercely protect their woodland demesnes from outside threats.\nThe Sleeping Tree Awakens. A tree destined to become a treant meditates through a long cycle of seasons, living normally for decades or centuries before realizing its potential. Trees that awaken do so only under special circumstances and in places steeped with nature's magic. Treants and powerful druids can sense when a tree has the spark of potential, and they protect such trees in secret groves as they draw near the moment of their awakening. During the long process of awakening, a tree acquires face-like features in its bark, a division of the lower trunk into legs, and long branches bending downward to serve as its arms. When it is ready, the tree pulls its legs free from the clutching earth and joins its fellows in protecting its woodland home.\nLegendary Guardians. After a treant awakens, it continues to grow exactly as it did when it was a tree. Treants created from the mightiest trees can reach great sizes while developing an innate magical power over plants and animals. Such treants can animate plants, using them to ensnare and trap intruders. They can call wild creatures to aid them or carry messages across great distances.\nProtectors of the Wild. Even after awakening, a treant spends much of its time living as a tree. While rooted in place, a treant remains aware of its surroundings, and can perceive the effects of events taking place miles away based on subtle changes nearby.\nWoodcutters who avoid culling healthy living trees and hunters who take only what they need of the forest's bounty are unlikely to arouse a treant's ire. Creatures careless with fire, those who poison the forest, and those who destroy great trees, especially a tree close to awakening, face the treant's wrath.\nSource: Monster Manual p. 289, Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "forest"
    },
    {
        "name": "Tribal Warrior",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "12 (hide armor)",
        "hp": "11 (2d8+2)",
        "speed": "walk 30 ft.",
        "str": "13",
        "dex": "11",
        "con": "12",
        "int": "8",
        "wis": "11",
        "cha": "8",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "any one language",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Pack Tactics",
            "text": "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "action": {
            "name": "Spear",
            "text": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
            "attack": "Spear|+3|1d6+1"
        },
        "description": "Tribal warriors live beyond civilization, most often subsisting on fishing and hunting. Each tribe acts in accordance with the wishes of its chief, who is the greatest or oldest warrior of the tribe or a tribe member blessed by the gods.\nSource: Monster Manual p. 350, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Triceratops",
        "size": "H",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "95 (10d12+30)",
        "speed": "walk 50 ft.",
        "str": "22",
        "dex": "9",
        "con": "17",
        "int": "2",
        "wis": "11",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "5",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Trampling Charge",
            "text": "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
        },
        "action": [
            {
                "name": "Gore",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 24 (4d8 + 6) piercing damage.",
                "attack": "Gore|+9|4d8+6"
            },
            {
                "name": "Stomp",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. 22 (3d10 + 6) bludgeoning damage",
                "attack": "Stomp|+9|3d10+6"
            }
        ],
        "description": "One of the most aggressive of the herbivorous dinosaurs, a triceratops has a skull that flares out to form a protective plate of bone. With its great horns and formidable speed, a triceratops gores and tramples would-be predators to death.\nDinosaurs. Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.\nDinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.\nSource: Monster Manual p. 80, Tomb of Annihilation",
        "environment": "grassland"
    },
    {
        "name": "Tridrone",
        "size": "M",
        "type": "construct",
        "alignment": "Lawful Neutral",
        "ac": "15 (natural armor)",
        "hp": "16 (3d8+3)",
        "speed": "walk 30 ft.",
        "str": "12",
        "dex": "13",
        "con": "12",
        "int": "9",
        "wis": "10",
        "cha": "9",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Modron",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Axiomatic Mind",
                "text": "The tridrone can't be compelled to act in a manner contrary to its nature or its instructions."
            },
            {
                "name": "Disintegration",
                "text": "If the tridrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The tridrone makes three fist attacks or three javelin attacks."
            },
            {
                "name": "Fist",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) bludgeoning damage.",
                "attack": "Fist|+3|1d4+1"
            },
            {
                "name": "Javelin",
                "text": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120 ft., one target. 4 (1d6 + 1) piercing damage.",
                "attack": "Javelin|+3|1d6+1"
            },
            {
                "name": "Variant: Rogue Modrons",
                "text": [
                    "A modron unit sometimes becomes defective, either through natural decay or exposure to chaotic forces. Rogue modrons don't act in accordance with Primus's wishes and directives, breaking laws, disobeying orders, and even engaging in violence. Other modrons hunt down such rogues.",
                    "A rogue modron loses the Axiomatic Mind trait and can have any alignment other than lawful neutral. Otherwise, it has the same statistics as a regular modron of its rank."
                ]
            }
        ],
        "description": "Tridrones are shaped like inverted pyramids. They lead lesser modrons in battle.\nModrons. Modrons are beings of absolute law that adhere to a hive-like hierarchy. They inhabit the plane of Mechanus and tend its eternally revolving gears, their existence a clockwork routine of perfect order.\nAbsolute Law and Order. Under the direction of their leader, Primus, modrons increase order in the multiverse in accordance with laws beyond the comprehension of mortal minds. Their own minds are networked in a hierarchal pyramid, in which each modron receives commands from superiors and delegates orders to underlings. A modron carries out commands with total obedience, utmost efficiency, and an absence of morality or ego. Modrons have no sense of self beyond what is necessary to fulfill their duties. They exist as a unified collective, divided by ranks, yet they always refer to themselves collectively. To a modron, there is no \"I,\" but only \"we\" or \"us.\"\nAbsolute Hierarchy. Modrons communicate only with their own rank and the ranks immediately above and below them. Modrons more than one rank away are either too advanced or too simple to understand.\nCogs of the Great Machine. If a modron is destroyed, its remains disintegrate. A replacement from the next lowest rank then transforms in a flash of light, gaining the physical form of its new rank. The promoted modron is replaced by one of its underlings in the same manner, all the way to the lowest levels of the hierarchy. There, a new modron is created by Primus, with a steady stream of monodrones leaving the Great Modron Cathedral on Mechanus as a result.\nThe Great Modron March. When the gears of Mechanus complete seventeen cycles once every 289 years, Primus sends a vast army of modrons across the Outer Planes, ostensibly on a reconnaissance mission. The march is long and dangerous, and only a small number of modrons returns to Mechanus.\nSource: Monster Manual p. 225, Tomb of Annihilation",
        "environment": ""
    },
    {
        "name": "Troglodyte",
        "size": "M",
        "type": "humanoid (troglodyte)",
        "alignment": "Chaotic Evil",
        "ac": "11 (natural armor)",
        "hp": "13 (2d8+4)",
        "speed": "walk 30 ft.",
        "str": "14",
        "dex": "10",
        "con": "14",
        "int": "6",
        "wis": "10",
        "cha": "6",
        "save": "",
        "skill": "Stealth +2",
        "passive": "10",
        "languages": "Troglodyte",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Chameleon Skin",
                "text": "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
            },
            {
                "name": "Stench",
                "text": "Any creature other than a troglodyte that starts its turn within 5 feet of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The troglodyte makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) piercing damage.",
                "attack": "Bite|+4|1d4+2"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) slashing damage.",
                "attack": "Claw|+4|1d4+2"
            }
        ],
        "description": "The savage, degenerate troglodytes squat in the shallow depths of the Underdark in a constant state of war against their neighbors and one another. They mark the borders of their territories with cracked bones and skulls, or with pictographs painted in blood or dung.\nPerhaps the most loathsome of all humanoids, troglodytes eat anything they can stomach. They dwell in filth. The walls of their cavern homes are smeared with grime, oily secretions, and the debris of their foul feasting.\nSimpleminded Brutes. Troglodytes have a simple, communal culture devoted almost entirely to procuring food. Too simple to plan more than a few days into the future, troglodytes rely on constant raids and hunting to survive. They take sadistic pleasure in hunting intelligent creatures weaker than themselves and show no mercy toward those they capture and drag back to their lairs to be devoured. The largest and toughest troglodytes lead the hunt and become the leaders of their tribes. However, if a leader shows any weakness or hesitation, other troglodytes attack and eat it in a frenzy.\nTroglodytes make little and build less, scavenging their possessions from their prey. They understand the value of metal weapons and armor, and fight among one another for the right to have such items. A troglodyte tribe might be torn apart by battles over a single longsword.\nDevotees of Laogzed. Some troglodytes venerate Laogzed, a demonic, monstrously fat toad-lizard that slumbers in the Abyss. Laogzed offers the troglodytes nothing in return except aspiration, for it is the dream of his troglodyte worshipers to become as fat, well-fed, and wearily content as he seems to be.\nSource: Monster Manual p. 290, Hoard of the Dragon Queen, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Troll",
        "size": "L",
        "type": "giant",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "84 (8d10+40)",
        "speed": "walk 30 ft.",
        "str": "18",
        "dex": "13",
        "con": "20",
        "int": "7",
        "wis": "9",
        "cha": "7",
        "save": "",
        "skill": "Perception +2",
        "passive": "12",
        "languages": "Giant",
        "cr": "5",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Keen Smell",
                "text": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Regeneration",
                "text": "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The troll makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 7 (1d6 + 4) piercing damage.",
                "attack": "Bite|+7|1d6+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claw|+7|2d6+4"
            },
            {
                "name": "Variant: Loathsome Limbs",
                "text": [
                    "Whenever the troll takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it:",
                    "• 1–10: Nothing else happens.",
                    "• 11–14: One leg is severed from the troll if it has any legs left.",
                    "• 15–18: One arm is severed from the troll if it has any arms left.",
                    "• 19–20: The troll is decapitated, but the troll dies only if it can't regenerate. If it dies, so does the severed head.",
                    "If the troll finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on the troll's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and the troll's Regeneration trait.",
                    "A severed leg is unable to attack and has a speed of 5 feet.",
                    "A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless the troll can see the arm and its target. Each time the troll loses an arm, it loses a claw attack.",
                    "If its head is severed, the troll loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet and the troll's Keen Smell trait. It can make a bite attack but only against a target in its space.",
                    "The troll's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed."
                ]
            }
        ],
        "description": "Born with horrific appetites, trolls eat anything they can catch and devour. They have no society to speak of, but they do serve as mercenaries to orcs, ogres, ettins, hags, and giants. As payment, trolls demand food and treasure. Trolls are difficult to control, however, doing as they please even when working with more powerful creatures.\nRegeneration. Smashing a troll's bones and slashing through its rubbery hide only makes it angry. A troll's wounds close quickly. If the monster loses an arm, a leg, or even its head, those dismembered parts can sometimes act with a life of their own. A troll can even reattach severed body parts, untroubled by its momentary disability. Only acid and fire can arrest the regenerative properties of a troll's flesh. The trolls, enraged, will attack individuals making acid and fire attacks against them above all other prey.\nTroll Freaks. Their regenerative capabilities make trolls especially susceptible to mutation. Although uncommon, such transformations can result from what the troll has done or what has been done to it. A decapitated troll might grow two heads from the stump of its neck, while a troll that eats a fey creature might gain one or more of that creature's traits.\nSource: Monster Manual p. 291, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Storm Lord's Wrath, Explorer's Guide to Wildemount",
        "environment": "underdark, mountain, forest, swamp, hill, arctic"
    },
    {
        "name": "Twig Blight",
        "size": "S",
        "type": "plant",
        "alignment": "Neutral Evil",
        "ac": "13 (natural armor)",
        "hp": "4 (1d6+1)",
        "speed": "walk 20 ft.",
        "str": "6",
        "dex": "13",
        "con": "12",
        "int": "4",
        "wis": "8",
        "cha": "3",
        "save": "",
        "skill": "Stealth +3",
        "passive": "9",
        "languages": "understands Common but can't speak",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "fire",
        "conditionImmune": "blinded, deafened",
        "senses": "blindsight 60 ft. (blind beyond this radius)",
        "trait": {
            "name": "False Appearance",
            "text": "While the blight remains motionless, it is indistinguishable from a dead shrub."
        },
        "action": {
            "name": "Claws",
            "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) piercing damage.",
            "attack": "Claws|+3|1d4+1"
        },
        "description": "Awakened plants gifted with the powers of intelligence and mobility, blights plague lands contaminated by darkness. Drinking that darkness from the soil, a blight carries out the will of ancient evil and attempts to spread that evil wherever it can.\nRoots of the Gulthias Tree. Legends tell of a vampire named Gulthias who worked terrible magic and raised up an abominable tower called Nightfang Spire. Gulthias was undone when a hero plunged a wooden stake through his heart, but as the vampire was destroyed, his blood infused the stake with a dreadful power. In time, tendrils of new growth sprouted from the wood, growing into a sapling infused with the vampire's evil essence. It is said that a mad druid discovered the sapling, transplanting it to an underground grotto where it could grow. From this Gulthias tree came the seeds from which the first blights were sown.\nDark Conquest. Wherever a tree or plant is contaminated by a fragment of an evil mind or power, a Gulthias tree can rise to infest and corrupt the surrounding forest. Its evil spreads through root and soil to other plants, which perish or transform into blights. As those blights spread, they poison and uproot healthy plants, replacing them with brambles, toxic weeds, and others of their kind. In time, an infestation of blights can turn any land or forest into a place of corruption.\nIn forests infested with blights, trees and plants grow with supernatural speed. Vines and undergrowth rapidly spread through buildings and overrun trails and roads. After blights have killed or driven off their inhabitants, whole villages can disappear in the space of days.\nControlled by Evil. Blights are independent creatures, but most act under a Gulthias tree's control, often displaying the habits and traits of the life force or spirit that spawned them. By attacking their progenitor's old foes or seeking out treasures valuable to it, they carry on the legacy of long-lost evil.\nTwig Blight. Twig blights can root in soil, which they do when living prey are scarce. While rooted, they resemble woody shrubs. When it pulls its roots free of the ground to move, a twig blight's branches twist together to form a humanoid-looking body with a head and limbs.\nTwig blights seek out campsites and watering holes, rooting there to set up ambushes for potential victims coming to drink or rest. Huddled together in groups, twig blights blend in with an area's natural vegetation or with piles of debris or firewood.\nGiven how dry they are, twig blights are particularly susceptible to fire.\nSource: Monster Manual p. 32, Curse of Strahd, Lost Mine of Phandelver, Tales from the Yawning Portal, Ghosts of Saltmarsh, The Lost Dungeon of Rickedness: Big Rick Energy",
        "environment": "forest"
    },
    {
        "name": "Tyrannosaurus Rex",
        "size": "H",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "136 (13d12+52)",
        "speed": "walk 50 ft.",
        "str": "25",
        "dex": "10",
        "con": "19",
        "int": "2",
        "wis": "12",
        "cha": "9",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "",
        "cr": "8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Multiattack",
                "text": "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.",
                "attack": "Bite|+10|4d12+7"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 20 (3d8 + 7) bludgeoning damage.",
                "attack": "Tail|+10|3d8+7"
            }
        ],
        "description": "This enormous predator terrorizes all other creatures in its territory. Despite its size and weight, a tyrannosaurus is a swift runner. It chases anything it thinks it can eat, and there are few creatures it won't try to devour whole. While prowling for substantial prey, a tyrannosaurus subsists on carrion, and on any smaller creatures that try to dart in to steal its meal.\nDinosaurs. Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.\nDinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.\nSource: Monster Manual p. 80, Tomb of Annihilation, Explorer's Guide to Wildemount",
        "environment": "grassland"
    },
    {
        "name": "Ultroloth",
        "size": "M",
        "type": "fiend (yugoloth)",
        "alignment": "Neutral Evil",
        "ac": "19 (natural armor)",
        "hp": "153 (18d8+72)",
        "speed": "walk 30 ft., fly 60 ft.",
        "str": "16",
        "dex": "16",
        "con": "18",
        "int": "18",
        "wis": "15",
        "cha": "19",
        "save": "",
        "skill": "Intimidation +9, Perception +7, Stealth +8",
        "passive": "17",
        "languages": "Abyssal, Infernal, telepathy 120 ft.",
        "cr": "13",
        "resist": "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "acid, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, poisoned",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The ultroloth has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The ultroloth's weapon attacks are magical."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The ultroloth's innate spellcasting ability is Charisma (spell save DC 17). The ultroloth can innately cast the following spells, requiring no material components:",
                    "At will: alter self, clairvoyance, darkness, detect magic, detect thoughts, dispel magic, invisibility (self only), suggestion",
                    "3/day each: dimension door, fear, wall of fire",
                    "1/day each: fire storm, mass suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The ultroloth can use its Hypnotic Gaze and makes three melee attacks."
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
                "attack": "Longsword|+8|1d8+3"
            },
            {
                "name": "Hypnotic Gaze",
                "text": "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours."
            },
            {
                "name": "Teleport",
                "text": "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
            },
            {
                "name": "Variant: Yugoloth Summoning",
                "text": [
                    "Some yugoloths have an action option that allows them to summon other yugoloths.",
                    "Summon Yugoloth (1/Day). The yugoloth chooses what to summon and attempts a magical summoning.",
                    "An ultroloth has a 50 chance of summoning 1d6 mezzoloth, 1d4 nycaloth, or one ultroloth.",
                    "A summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it."
                ]
            }
        ],
        "spells": "alter self, clairvoyance, darkness, detect magic, detect thoughts, dispel magic, invisibility, suggestion, dimension door, fear, wall of fire, fire storm, mass suggestion",
        "description": "Yugoloths are fickle fiends that inhabit the planes of Acheron, Gehenna, Hades, and Carceri. They act as mercenaries and are notorious for their shifting loyalties. They are the embodiments of avarice. Before serving under anyone's banner, a yugoloth asks the only question on its mind: What's in it for me?\nSpawn of Gehenna. The first yugoloths were created by a sisterhood of night hags on Gehenna. It is widely believed that Asmodeus, Lord of the Nine Hells, commissioned the work, in the hope of creating an army of fiends that were not bound to the Nine Hells. In the course of making this new army, the hags crafted four magic tomes and recorded the true names of every yugoloth they created, save one, the General of Gehenna. These tomes were called the Books of Keeping. Since knowing a fiend's true name grants power over it, the hags used the books to ensure the yugoloths' loyalty. They also used the books to capture the true names of other fiends that crossed them. It is rumored that the Books of Keeping contain the true names of a few demon lords and archdevils as well.\nPetty jealousies and endless bickering caused the sisterhood to dissolve, and in the ensuing power grab, the Books of Keeping were lost or stolen. No longer indentured to anyone, the yugoloths gained independence, and they now offer their services to the highest bidder.\nFiendish Mercenaries. Summoned yugoloths demand much for their time and loyalty. Whatever promises a yugoloth makes are quickly broken when a better opportunity presents itself. Unlike demons, yugoloths can be reasoned with, but unlike devils, they are rarely true to their word.\nYugoloths can be found anywhere, but the high cost of maintaining a yugoloth army's loyalty typically exceeds what any warlord on the Material Plane can pay. Being self-serving creatures, yugoloths quarrel among themselves constantly. A yugoloth army is more organized than a ravening horde of demons, but far less orderly and regimented than a legion of devils. Without a powerful leader to keep them in line, yugoloths fight simply to indulge their violent predilections, and only as long as it benefits them to do so.\nBack to Gehenna. When a yugoloth dies, it dissolves into a pool of ichor and reforms at full strength on the Bleak Eternity of Gehenna. Only on its native plane can a yugoloth be destroyed permanently. A yugoloth knows this and acts accordingly. When summoned to other planes, a yugoloth fights without concern for its own well-being. On Gehenna, it is more apt to retreat or plead for mercy if its demise seems imminent.\nWhen a yugoloth is permanently destroyed, its name vanishes from every Book of Keeping. If a yugoloth is re-created by way of an unholy ritual requiring the expenditure of souls, its name reappears in the books.\nThe Books of Keeping. When all four copies of the Books of Keeping disappeared, Asmodeus and the night hags lost control of their yugoloth creations. Each Book of Keeping still exists, drifting from plane to plane, where the brave and the foolish occasionally stumble upon them. A yugoloth summoned using its true name, as inscribed in the Books of Keeping, is forced to serve its summoner obediently. The yugoloth hates being controlled in this manner and isn't shy about making its displeasure known. Like a petulant child, it will follow its instructions to the letter while looking for opportunities to misinterpret them.\nThe General of Gehenna. Somewhere in the brimstone wastes of Gehenna, there roams an ultroloth so strong that none contests his power: the General of Gehenna. Many yugoloths search for this great general in the hope of serving with him. They believe that service with the General of Gehenna grants power and prestige among lower planar entities.\nWhatever the case, no fiend finds the General unless the General desires it. His personal name is unknown, and even the Books of Keeping contain no mention of this powerful, thoroughly evil entity.\nSource: Monster Manual p. 314, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": ""
    },
    {
        "name": "Umber Hulk",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Chaotic Evil",
        "ac": "18 (natural armor)",
        "hp": "93 (11d10+33)",
        "speed": "walk 30 ft., burrow 20 ft.",
        "str": "20",
        "dex": "13",
        "con": "16",
        "int": "9",
        "wis": "10",
        "cha": "10",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Umber Hulk",
        "cr": "5",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft., tremorsense 60 ft.",
        "trait": [
            {
                "name": "Confusing Gaze",
                "text": [
                    "When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated.",
                    "On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action but uses all its movement to move in a random direction. On a 7 or 8, the creature makes one melee attack against a random creature, or it does nothing if no creature is within reach.",
                    "Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the umber hulk until the start of its next turn, when it can avert its eyes again. If the creature looks at the umber hulk in the meantime, it must immediately make the save."
                ]
            },
            {
                "name": "Tunneler",
                "text": "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The umber hulk makes three attacks: two with its claws and one with its mandibles."
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 9 (1d8 + 5) slashing damage.",
                "attack": "Claw|+8|1d8+5"
            },
            {
                "name": "Mandibles",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 14 (2d8 + 5) slashing damage.",
                "attack": "Mandibles|+8|2d8+5"
            }
        ],
        "description": "An abominable horror from deep beneath the earth, an umber hulk burrows into cave complexes, dungeons, or Underdark settlements in search of food. Those lucky enough to survive an umber hulk attack often remember precious little of the incident, thanks to the umber hulk's mind-scrambling gaze.\nDevious Delvers. Umber hulks can burrow through solid rock, forming new tunnels in their wake. The steel-hard chitin of its body can withstand the cave-ins, tunnel collapses, and rock falls that commonly follow it.\nBurrowing into the wall of a cavern or passageway, an umber hulk lies in wait for creatures to pass by on the other side, its hair-like feelers sensing any movement around it. When it explodes out in a shower of earth and rock, its unsuspecting quarry turns to face the oncoming threat-and is entranced by the umber hulk's bewildering eyes, forced to stand helpless as its mandibles snap shut.\nMind Scrambler. Many survivors of an umber hulk encounter recollect little about the attack, because the monster's confusing gaze scrambles their memory of the event. Those who have fought and killed umber hulks recognize the signs. For other denizens of the Underdark, grisly tales of vanished explorers and wanton destruction speak of an unknown foe. Umber hulks take on supernatural status in these harrowing stories, many of which convey the same warning: once an umber hulk has been spotted, it is already too late to escape it.\nSource: Monster Manual p. 292, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Unicorn",
        "size": "L",
        "type": "celestial",
        "alignment": "Lawful Good",
        "ac": "12",
        "hp": "67 (9d10+18)",
        "speed": "walk 50 ft.",
        "str": "18",
        "dex": "14",
        "con": "15",
        "int": "11",
        "wis": "17",
        "cha": "16",
        "save": "",
        "skill": "",
        "passive": "13",
        "languages": "Celestial, Elvish, Sylvan, telepathy 60 ft.",
        "cr": "5",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, paralyzed, poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Charge",
                "text": "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            },
            {
                "name": "Magic Resistance",
                "text": "The unicorn has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The unicorn's weapon attacks are magical."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:",
                    "At will: detect evil and good, druidcraft, pass without trace",
                    "1/day each: calm emotions, dispel evil and good, entangle"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The unicorn makes two attacks: one with its hooves and one with its horn."
            },
            {
                "name": "Hooves",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) bludgeoning damage.",
                "attack": "Hooves|+7|2d6+4"
            },
            {
                "name": "Horn",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 8 (1d8 + 4) piercing damage.",
                "attack": "Horn|+7|1d8+4"
            },
            {
                "name": "Healing Touch (3/Day)",
                "text": "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
            },
            {
                "name": "Teleport (1/Day)",
                "text": "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
            }
        ],
        "legendary": [
            {
                "text": "The celestial can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The celestial regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Hooves",
                "text": "The unicorn makes one attack with its hooves."
            },
            {
                "name": "Shimmering Shield (Costs 2 Actions)",
                "text": "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
            },
            {
                "name": "Heal Self (Costs 3 Actions)",
                "text": "The unicorn magically regains 11 (2d8 + 2) hit points."
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "Transformed by the creature's celestial presence, the domain of a unicorn might include any of the following magical effects:",
                    "• Open flames of a non magical nature are extinguished within the unicorn's domain. Torches and campfires refuse to burn, but closed lanterns are unaffected.",
                    "• Creatures native to the unicorn's domain have an easier time hiding; they have advantage on all Dexterity (Stealth) checks made to hide.",
                    "• When a good-aligned creature casts a spell or uses a magical effect that causes another good-aligned creature to regain hit points, the target regains the maximum number of hit points possible for the spell or effect.",
                    "• Curses affecting any good-aligned creature are suppressed.",
                    "If the unicorn dies, these effects end immediately."
                ]
            }
        ],
        "spells": "detect evil and good, druidcraft, pass without trace, calm emotions, dispel evil and good, entangle",
        "description": "Unicorns dwell in enchanted forests. Unrelated to the horses it resembles, a unicorn is a celestial creature that wanders sylvan realms, its white form glimmering like starlight.\nA unicorn's brow sports a single spiraling horn of ivory whose magical touch can heal the sick and the injured. Its ears catch the words and whispers of the creatures that share its domain, and it knows the tongues of elves and sylvan folk. Unicorns allow good-hearted creatures to enter their woods to hunt or gather food, but they hold evil ever at bay. Foul-hearted creatures seldom leave a unicorn's domain alive.\nDivine Guardians. Good deities placed unicorns on the Material Plane to ward away evil and preserve and protect sacred places. Most unicorns protect a bounded realm such as an enchanted forest. However, the gods sometimes send a unicorn to guard sacred artifacts or protect specific creatures. When the forces of darkness strike against an individual the gods wish to protect, they might send that individual to a unicorn's forest, where evil creatures pursue at their peril.\nUnicorns most often serve deities of the forest and woodlands, including the gods of benevolent fey.\nAlthough all unicorns have natural healing power, some serve the gods in greater capacities, performing miracles normally reserved for high priests.\nForest Lords. A unicorn's forest is a celestial realm where nothing that occurs beneath the sun-dappled leaves escapes the creature's notice. A unicorn hears each breathy tune sung by the elves that reside amid the treetops. It senses where every caterpillar spins its cocoon, each leaf and branch upon which a bright butterfly rests its tired wings.\nIn a unicorn's forest, a sense of calm pervades. From wolves and foxes to birds, squirrels, and tiny insects, the creatures of a unicorn's domain seem quite tame.\nPixies, sprites, satyrs, dryads, and other normally mercurial fey loyally serve a unicorn when they dwell within its woods. Under a unicorn's protection, creatures feel safe from the threat of encroaching civilization and the insidious spread of evil.\nA unicorn roams its domain constantly, moving ever so carefully so as not to disturb other denizens. A creature might catch a passing glimpse of the unicorn then suddenly see nothing but the wild woods.\nSacred Horns. A unicorn's horn is the focus of its power, a shard of divine magic wrought in spiraling ivory. Wands of unicorn horn channel powerful magic, while unicorn horn weapons strike with divine force.\nWizards can work powdered unicorn horn into potent potions and scroll ink, or use it as a component in eldritch rituals. However, any creature that takes a role, no matter how small, in slaying a unicorn is likely to become the target of divine retribution.\nBlessed Mounts. When darkness and evil threaten to overwhelm the mortal world, the gods sometimes see fit to pair a unicorn mount with a champion. A paladin astride a unicorn is a sign of the gods' direct intervention in the affairs of the mortal realm. It is a holy alliance made to cleave the heads from demons and banish devils back to the Nine Hells.\nAs long as the troubled times of darkness persist, the unicorn stays by the champion, its horn shining brightly to drive back the night. However, if the gods' champion falls from grace or turns from the cause of righteousness and good, the unicorn departs, never to return.\nA Unicorn's Lair. A unicorn's lair might be an ancient ruin overgrown with vines, a misty clearing surrounded by mighty oaks, a flower-covered hilltop alive with butterflies, or some other serene woodland location.\nSource: Monster Manual p. 294, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "forest"
    },
    {
        "name": "Vampire",
        "size": "M",
        "type": "undead (shapechanger)",
        "alignment": "Lawful Evil",
        "ac": "16 (natural armor)",
        "hp": "144 (17d8+68)",
        "speed": "walk 30 ft.",
        "str": "18",
        "dex": "18",
        "con": "18",
        "int": "17",
        "wis": "15",
        "cha": "18",
        "save": "Dex +9, Wis +7, Cha +9",
        "skill": "Perception +7, Stealth +9",
        "passive": "17",
        "languages": "the languages it knew in life",
        "cr": "13",
        "resist": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": [
                    "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
                    "While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
                    "While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
                ]
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Misty Escape",
                "text": [
                    "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
                    "While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
                ]
            },
            {
                "name": "Regeneration",
                "text": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "text": [
                    "The vampire has the following flaws:",
                    "Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.",
                    "Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.",
                    "Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
                    "Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack (Vampire Form Only)",
                "text": "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                "name": "Unarmed Strike (Vampire Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
                "attack": "Unarmed Strike (Vampire Form Only)|+9|1d8+4"
            },
            {
                "name": "Bite (Bat or Vampire Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
                "attack": "Bite (Bat or Vampire Form Only)|+9|1d6+4"
            },
            {
                "name": "Charm",
                "text": [
                    "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.",
                    "Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
                ]
            },
            {
                "name": "Children of the Night (1/Day)",
                "text": "The vampire magically calls 2d4 swarms of swarm of bats or swarm of rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolf instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
            }
        ],
        "legendary": [
            {
                "text": "The undead (shapechanger) can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead (shapechanger) regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Move",
                "text": "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                "name": "Unarmed Strike",
                "text": "The vampire makes one unarmed strike."
            },
            {
                "name": "Bite (Costs 2 Actions)",
                "text": "The vampire makes one bite attack."
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region surrounding a vampire's lair is warped by the creature's unnatural presence, creating any of the following effects:",
                    "• There's a noticeable increase in the populations of bats, rats, and wolves in the region.",
                    "• Plants within 500 feet of the lair wither, and their stems and branches become twisted and thorny.",
                    "• Shadows cast within 500 feet of the lair seem abnormally gaunt and sometimes move as though alive.",
                    "• A creeping fog clings to the ground within 500 feet of the vampire's lair. The fog occasionally takes eerie forms, such as grasping claws and writhing serpents.",
                    "If the vampire is destroyed, these effects end after 2d6 days."
                ]
            }
        ],
        "description": "Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.\nDark Desires. Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.\nBorn from Death. Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.\nChained to the Grave. Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.\nUndead Nature. Neither a vampire nor a vampire spawn requires air.\nA Vampire's Lair. A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.\nPlayer Characters as Vampires.\n------\nThe game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, darkvision, traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.\nThe save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a wish spell or the character is killed and brought back to life.\n------\nStrahd von Zarovich.\n------\nA brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.\nIn his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.\nIn a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.\nIn the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.\n------\nSource: Monster Manual p. 297, Curse of Strahd, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "urban"
    },
    {
        "name": "Vampire Spawn",
        "size": "M",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "15 (natural armor)",
        "hp": "82 (11d8+33)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "16",
        "con": "16",
        "int": "11",
        "wis": "10",
        "cha": "12",
        "save": "Dex +6, Wis +3",
        "skill": "Perception +3, Stealth +6",
        "passive": "13",
        "languages": "the languages it knew in life",
        "cr": "5",
        "resist": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Regeneration",
                "text": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "text": [
                    "The vampire has the following flaws:",
                    "Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.",
                    "Harmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.",
                    "Stake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.",
                    "Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                "attack": "Bite|+6|1d6+3"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).",
                "attack": "Claws|+6|2d4+3"
            }
        ],
        "description": "Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.\nDark Desires. Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.\nBorn from Death. Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.\nChained to the Grave. Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.\nUndead Nature. Neither a vampire nor a vampire spawn requires air.\nA Vampire's Lair. A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.\nPlayer Characters as Vampires.\n------\nThe game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, darkvision, traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.\nThe save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a wish spell or the character is killed and brought back to life.\n------\nStrahd von Zarovich.\n------\nA brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.\nIn his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.\nIn a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.\nIn the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.\n------\nSource: Monster Manual p. 298, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "underdark, urban"
    },
    {
        "name": "Vampire Spellcaster",
        "size": "M",
        "type": "undead (shapechanger)",
        "alignment": "Lawful Evil",
        "ac": "16 (natural armor)",
        "hp": "144 (17d8+68)",
        "speed": "walk 30 ft.",
        "str": "18",
        "dex": "18",
        "con": "18",
        "int": "17",
        "wis": "15",
        "cha": "18",
        "save": "Dex +9, Wis +7, Cha +9",
        "skill": "Perception +7, Stealth +9",
        "passive": "17",
        "languages": "the languages it knew in life",
        "cr": "15",
        "resist": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": [
                    "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
                    "While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
                    "While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
                ]
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Misty Escape",
                "text": [
                    "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
                    "While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
                ]
            },
            {
                "name": "Regeneration",
                "text": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "text": [
                    "The vampire has the following flaws:",
                    "Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.",
                    "Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.",
                    "Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
                    "Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
                ]
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The vampire is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). The vampire has the following wizard spells prepared:",
                    "Cantrips (at will): mage hand, prestidigitation, ray of frost",
                    "• 1st level (4 slots): comprehend languages, fog cloud, sleep",
                    "• 2nd level (3 slots): detect thoughts, gust of wind, mirror image",
                    "• 3rd level (3 slots): animate dead, bestow curse, nondetection",
                    "• 4th level (3 slots): blight, greater invisibility",
                    "• 5th level (1 slots): dominate person"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack (Vampire Form Only)",
                "text": "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                "name": "Unarmed Strike (Vampire Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
                "attack": "Unarmed Strike (Vampire Form Only)|+9|1d8+4"
            },
            {
                "name": "Bite (Bat or Vampire Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
                "attack": "Bite (Bat or Vampire Form Only)|+9|1d6+4"
            },
            {
                "name": "Charm",
                "text": [
                    "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.",
                    "Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
                ]
            },
            {
                "name": "Children of the Night (1/Day)",
                "text": "The vampire magically calls 2d4 swarms of swarm of bats or swarm of rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolf instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
            }
        ],
        "legendary": [
            {
                "text": "The undead (shapechanger) can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead (shapechanger) regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Move",
                "text": "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                "name": "Unarmed Strike",
                "text": "The vampire makes one unarmed strike."
            },
            {
                "name": "Bite (Costs 2 Actions)",
                "text": "The vampire makes one bite attack."
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region surrounding a vampire's lair is warped by the creature's unnatural presence, creating any of the following effects:",
                    "• There's a noticeable increase in the populations of bats, rats, and wolves in the region.",
                    "• Plants within 500 feet of the lair wither, and their stems and branches become twisted and thorny.",
                    "• Shadows cast within 500 feet of the lair seem abnormally gaunt and sometimes move as though alive.",
                    "• A creeping fog clings to the ground within 500 feet of the vampire's lair. The fog occasionally takes eerie forms, such as grasping claws and writhing serpents.",
                    "If the vampire is destroyed, these effects end after 2d6 days."
                ]
            }
        ],
        "slots": "4, 3, 3, 3, 1",
        "spells": "mage hand, prestidigitation, ray of frost, comprehend languages, fog cloud, sleep, detect thoughts, gust of wind, mirror image, animate dead, bestow curse, nondetection, blight, greater invisibility, dominate person",
        "description": "Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.\nDark Desires. Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.\nBorn from Death. Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.\nChained to the Grave. Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.\nUndead Nature. Neither a vampire nor a vampire spawn requires air.\nA Vampire's Lair. A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.\nPlayer Characters as Vampires.\n------\nThe game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, darkvision, traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.\nThe save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a wish spell or the character is killed and brought back to life.\n------\nStrahd von Zarovich.\n------\nA brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.\nIn his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.\nIn a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.\nIn the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.\n------\nSource: Monster Manual p. 298, Rise of Tiamat",
        "environment": "urban"
    },
    {
        "name": "Vampire Warrior",
        "size": "M",
        "type": "undead (shapechanger)",
        "alignment": "Lawful Evil",
        "ac": "18 (plate armor)",
        "hp": "144 (17d8+68)",
        "speed": "walk 30 ft.",
        "str": "18",
        "dex": "18",
        "con": "18",
        "int": "17",
        "wis": "15",
        "cha": "18",
        "save": "Dex +9, Wis +7, Cha +9",
        "skill": "Perception +7, Stealth +9",
        "passive": "17",
        "languages": "the languages it knew in life",
        "cr": "15",
        "resist": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": [
                    "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
                    "While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
                    "While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
                ]
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Misty Escape",
                "text": [
                    "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
                    "While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
                ]
            },
            {
                "name": "Regeneration",
                "text": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "text": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "text": [
                    "The vampire has the following flaws:",
                    "Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.",
                    "Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.",
                    "Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
                    "Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The vampire makes two greatsword attacks."
            },
            {
                "name": "Multiattack (Vampire Form Only)",
                "text": "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                "name": "Unarmed Strike (Vampire Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
                "attack": "Unarmed Strike (Vampire Form Only)|+9|1d8+4"
            },
            {
                "name": "Greatsword",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. 11 (2d6 + 4) slashing damage.",
                "attack": "Greatsword|+9|2d6+4"
            },
            {
                "name": "Bite (Bat or Vampire Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
                "attack": "Bite (Bat or Vampire Form Only)|+9|1d6+4"
            },
            {
                "name": "Charm",
                "text": [
                    "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.",
                    "Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
                ]
            },
            {
                "name": "Children of the Night (1/Day)",
                "text": "The vampire magically calls 2d4 swarms of swarm of bats or swarm of rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolf instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
            }
        ],
        "legendary": [
            {
                "text": "The undead (shapechanger) can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead (shapechanger) regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Move",
                "text": "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                "name": "Unarmed Strike",
                "text": "The vampire makes one unarmed strike."
            },
            {
                "name": "Bite (Costs 2 Actions)",
                "text": "The vampire makes one bite attack."
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region surrounding a vampire's lair is warped by the creature's unnatural presence, creating any of the following effects:",
                    "• There's a noticeable increase in the populations of bats, rats, and wolves in the region.",
                    "• Plants within 500 feet of the lair wither, and their stems and branches become twisted and thorny.",
                    "• Shadows cast within 500 feet of the lair seem abnormally gaunt and sometimes move as though alive.",
                    "• A creeping fog clings to the ground within 500 feet of the vampire's lair. The fog occasionally takes eerie forms, such as grasping claws and writhing serpents.",
                    "If the vampire is destroyed, these effects end after 2d6 days."
                ]
            }
        ],
        "description": "Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.\nDark Desires. Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.\nBorn from Death. Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.\nChained to the Grave. Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.\nUndead Nature. Neither a vampire nor a vampire spawn requires air.\nA Vampire's Lair. A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.\nPlayer Characters as Vampires.\n------\nThe game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, darkvision, traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.\nThe save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a wish spell or the character is killed and brought back to life.\n------\nStrahd von Zarovich.\n------\nA brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.\nIn his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.\nIn a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.\nIn the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.\n------\nSource: Monster Manual p. 298",
        "environment": "urban"
    },
    {
        "name": "Veteran",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "17 (splint armor)",
        "hp": "58 (9d8+18)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "13",
        "con": "14",
        "int": "10",
        "wis": "11",
        "cha": "10",
        "save": "",
        "skill": "Athletics +5, Perception +2",
        "passive": "12",
        "languages": "any one language (usually Common)",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Multiattack",
                "text": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
                "attack": "Longsword|+5|1d8+3"
            },
            {
                "name": "Shortsword",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) piercing damage.",
                "attack": "Shortsword|+5|1d6+3"
            },
            {
                "name": "Heavy Crossbow",
                "text": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. 6 (1d10 + 1) piercing damage.",
                "attack": "Heavy Crossbow|+3|1d10+1"
            }
        ],
        "description": "Veterans are professional fighters that take up arms for pay or to protect something they believe in or value. Their ranks include soldiers retired from long service and warriors who never served anyone but themselves.\nSource: Monster Manual p. 350, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Vine Blight",
        "size": "M",
        "type": "plant",
        "alignment": "Neutral Evil",
        "ac": "12 (natural armor)",
        "hp": "26 (4d8+4)",
        "speed": "walk 10 ft.",
        "str": "15",
        "dex": "8",
        "con": "14",
        "int": "5",
        "wis": "10",
        "cha": "3",
        "save": "",
        "skill": "Stealth +1",
        "passive": "10",
        "languages": "Common",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "blinded, deafened",
        "senses": "blindsight 60 ft. (blind beyond this radius)",
        "trait": {
            "name": "False Appearance",
            "text": "While the blight remains motionless, it is indistinguishable from a tangle of vines."
        },
        "action": [
            {
                "name": "Constrict",
                "text": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. 9 (2d6 + 2) bludgeoning damage, and a Large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target.",
                "attack": "Constrict|+4|2d6+2"
            },
            {
                "name": "Entangling Plants (Recharge 5-6)",
                "text": "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing it self or another entangled creature within reach on a success."
            }
        ],
        "description": "Awakened plants gifted with the powers of intelligence and mobility, blights plague lands contaminated by darkness. Drinking that darkness from the soil, a blight carries out the will of ancient evil and attempts to spread that evil wherever it can.\nRoots of the Gulthias Tree. Legends tell of a vampire named Gulthias who worked terrible magic and raised up an abominable tower called Nightfang Spire. Gulthias was undone when a hero plunged a wooden stake through his heart, but as the vampire was destroyed, his blood infused the stake with a dreadful power. In time, tendrils of new growth sprouted from the wood, growing into a sapling infused with the vampire's evil essence. It is said that a mad druid discovered the sapling, transplanting it to an underground grotto where it could grow. From this Gulthias tree came the seeds from which the first blights were sown.\nDark Conquest. Wherever a tree or plant is contaminated by a fragment of an evil mind or power, a Gulthias tree can rise to infest and corrupt the surrounding forest. Its evil spreads through root and soil to other plants, which perish or transform into blights. As those blights spread, they poison and uproot healthy plants, replacing them with brambles, toxic weeds, and others of their kind. In time, an infestation of blights can turn any land or forest into a place of corruption.\nIn forests infested with blights, trees and plants grow with supernatural speed. Vines and undergrowth rapidly spread through buildings and overrun trails and roads. After blights have killed or driven off their inhabitants, whole villages can disappear in the space of days.\nControlled by Evil. Blights are independent creatures, but most act under a Gulthias tree's control, often displaying the habits and traits of the life force or spirit that spawned them. By attacking their progenitor's old foes or seeking out treasures valuable to it, they carry on the legacy of long-lost evil.\nVine Blight. Appearing as masses of slithering creepers, vine blights hide in undergrowth and wait for prey to draw near. By animating the plants around them, vine blights entangle and hinder their foes before attacking. Vine blights are the only blights capable of speech. Through its connection to the evil spirit of the Gulthias tree it serves, a vine blight speaks in a fractured version of its dead master's voice, taunting victims or bargaining with powerful foes.\nSource: Monster Manual p. 32, Curse of Strahd, Ghosts of Saltmarsh, Explorer's Guide to Wildemount",
        "environment": "forest"
    },
    {
        "name": "Violet Fungus",
        "size": "M",
        "type": "plant",
        "alignment": "Unaligned",
        "ac": "5",
        "hp": "18 (4d8)",
        "speed": "walk 5 ft.",
        "str": "3",
        "dex": "1",
        "con": "10",
        "int": "1",
        "wis": "3",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "6",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "blinded, deafened, frightened",
        "senses": "blindsight 30 ft. (blind beyond this radius)",
        "trait": {
            "name": "False Appearance",
            "text": "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The fungus makes 1d4 Rotting Touch attacks."
            },
            {
                "name": "Rotting Touch",
                "text": "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. 4 (1d8) necrotic damage.",
                "attack": "Rotting Touch|+2|1d8"
            }
        ],
        "description": "This purplish mushroom uses root-like feelers growing from its base to creep across cavern floors. The four stalks protruding from a violet fungi's central mass are used to lash out at prey, rotting flesh with the slightest touch. Any creature killed by a violet fungus decomposes rapidly. A new violet fungus sprouts from the moldering corpse, growing to full size in 2d6 days.\nFungi. With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.\nFungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.\nNot needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.\nSource: Monster Manual p. 138, Hoard of the Dragon Queen, Princes of the Apocalypse, Ghosts of Saltmarsh",
        "environment": "underdark"
    },
    {
        "name": "Vrock",
        "size": "L",
        "type": "fiend (demon)",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "104 (11d10+44)",
        "speed": "walk 40 ft., fly 60 ft.",
        "str": "17",
        "dex": "15",
        "con": "18",
        "int": "8",
        "wis": "13",
        "cha": "8",
        "save": "Dex +5, Wis +4, Cha +2",
        "skill": "",
        "passive": "11",
        "languages": "Abyssal, telepathy 120 ft.",
        "cr": "6",
        "resist": "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": {
            "name": "Magic Resistance",
            "text": "The vrock has advantage on saving throws against spells and other magical effects."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The vrock makes two attacks: one with its beak and one with its talons."
            },
            {
                "name": "Beak",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 10 (2d6 + 3) piercing damage.",
                "attack": "Beak|+6|2d6+3"
            },
            {
                "name": "Talons",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 14 (2d10 + 3) slashing damage.",
                "attack": "Talons|+6|2d10+3"
            },
            {
                "name": "Spores (Recharge 6)",
                "text": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.",
                "attack": "Spores (Recharge 6)||1d10"
            },
            {
                "name": "Stunning Screech (1/Day)",
                "text": "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn."
            },
            {
                "name": "Variant: Summon Demon (1/Day)",
                "text": [
                    "The demon chooses what to summon and attempts a magical summoning.",
                    "A vrock has a 30 chance of summoning 2d4 dretch or one vrock.",
                    "A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
                ]
            }
        ],
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 64, Curse of Strahd, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Vulture",
        "size": "M",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "10",
        "hp": "5 (1d8+1)",
        "speed": "walk 10 ft., fly 50 ft.",
        "str": "7",
        "dex": "10",
        "con": "13",
        "int": "2",
        "wis": "12",
        "cha": "4",
        "save": "",
        "skill": "Perception +3",
        "passive": "13",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Keen Sight and Smell",
                "text": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
            },
            {
                "name": "Pack Tactics",
                "text": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        "action": {
            "name": "Beak",
            "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) piercing damage.",
            "attack": "Beak|+2|1d4"
        },
        "description": "Source: Monster Manual p. 339, Rise of Tiamat, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus",
        "environment": "grassland, hill, desert"
    },
    {
        "name": "Warhorse",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "11",
        "hp": "19 (3d10+3)",
        "speed": "walk 60 ft.",
        "str": "18",
        "dex": "12",
        "con": "13",
        "int": "2",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Trampling Charge",
            "text": "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
        },
        "action": [
            {
                "name": "Hooves",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 11 (2d6 + 4) bludgeoning damage.",
                "attack": "Hooves|+6|2d6+4"
            },
            {
                "name": "Variant: Warhorse Armor",
                "text": [
                    "An armored warhorse has an AC based on the type of barding worn (see the Player's Handbook for more information on barding). The horse's AC includes its Dexterity modifier, where applicable. Barding doesn't alter the horse's challenge rating.",
                    "AC | Barding",
                    "12 | Leather barding",
                    "13 | Studded leather barding",
                    "14 | Ring mail barding",
                    "15 | Scale mail barding",
                    "16 | Chain mail barding",
                    "17 | Splint barding",
                    "18 | Plate barding",
                    ""
                ]
            }
        ],
        "description": "Source: Monster Manual p. 340, Curse of Strahd, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": "urban"
    },
    {
        "name": "Warhorse Skeleton",
        "size": "L",
        "type": "undead",
        "alignment": "Lawful Evil",
        "ac": "13 (barding scraps)",
        "hp": "22 (3d10+6)",
        "speed": "walk 60 ft.",
        "str": "18",
        "dex": "12",
        "con": "15",
        "int": "2",
        "wis": "8",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "poison",
        "vulnerable": "bludgeoning",
        "conditionImmune": "exhaustion, poisoned",
        "senses": "darkvision 60 ft.",
        "action": {
            "name": "Hooves",
            "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 11 (2d6 + 4) bludgeoning damage.",
            "attack": "Hooves|+6|2d6+4"
        },
        "description": "Skeletons arise when animated by dark magic. They heed the summons of spellcasters who call them from their stony tombs and ancient battlefields, or rise of their own accord in places saturated with death and loss, awakened by stirrings of necromantic energy or the presence of corrupting evil.\nAnimated Dead. Whatever sinister force awakens a skeleton infuses its bones with a dark vitality, adhering joint to joint and reassembling dismantled limbs. This energy motivates a skeleton to move and think in a rudimentary fashion, though only as a pale imitation of the way it behaved in life. An animated skeleton retains no connection to its past, although resurrecting a skeleton restores it body and soul, banishing the hateful undead spirit that empowers it.\nWhile most skeletons are the animated remains of dead humans and other humanoids, skeletal undead can be created from the bones of other creatures besides humanoids, giving rise to a host of terrifying and unique forms.\nObedient Servants. Skeletons raised by spell are bound to the will of their creator. They follow orders to the letter, never questioning the tasks their masters give them, regardless of the consequences. Because of their literal interpretation of commands and unwavering obedience, skeletons adapt poorly to changing circumstances. They can't read, speak, emote, or communicate in any way except to nod, shake their heads, or point. Still, skeletons are able to accomplish a variety of relatively complex tasks.\nA skeleton can fight with weapons and wear armor, can load and fire a catapult or trebuchet, scale a siege ladder, form a shield wall, or dump boiling oil. However, it must receive careful instructions explaining how such tasks are accomplished.\nAlthough they lack the intellect they possessed in life, skeletons aren't mindless. Rather than break its limbs attempting to batter its way through an iron door, a skeleton tries the handle first. If that doesn't work, it searches for another way through or around the obstacle.\nHabitual Behaviors. Independent skeletons temporarily or permanently free of a master's control sometimes pantomime actions from their past lives, their bones echoing the rote behaviors of their former living selves. The skeleton of a miner might lift a pick and start chipping away at stone walls. The skeleton of a guard might strike up a post at a random doorway. The skeleton of a dragon might lie down on a pile of treasure, while the skeleton of a horse crops grass it can't eat. Left alone in a ballroom, the skeletons of nobles might continue an eternally unfinished dance.\nWhen skeletons encounter living creatures, the necromantic energy that drives them compels them to kill unless they are commanded by their masters to refrain from doing so. They attack without mercy and fight until destroyed, for skeletons possess little sense of self and even less sense of self-preservation.\nUndead Nature. A skeleton doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 273, Curse of Strahd, Storm King's Thunder",
        "environment": ""
    },
    {
        "name": "Water Elemental",
        "size": "L",
        "type": "elemental",
        "alignment": "Neutral",
        "ac": "14 (natural armor)",
        "hp": "114 (12d10+48)",
        "speed": "walk 30 ft., swim 90 ft.",
        "str": "18",
        "dex": "14",
        "con": "18",
        "int": "5",
        "wis": "10",
        "cha": "8",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Aquan",
        "cr": "5",
        "resist": "acid; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Water Form",
                "text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Freeze",
                "text": "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The elemental makes two slam attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 13 (2d8 + 4) bludgeoning damage.",
                "attack": "Slam|+7|2d8+4"
            },
            {
                "name": "Whelm (Recharge 4-6)",
                "text": [
                    "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.",
                    "The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength check and succeeding."
                ],
                "attack": "Whelm (Recharge 4-6)||2d8+4"
            }
        ],
        "description": "Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.\nLiving Elements. On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.\nConjured by Magic. Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.\nBound and Shaped. Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.\nElemental Nature. An elemental doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 125, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "underwater, swamp, coastal"
    },
    {
        "name": "Water Weird",
        "size": "L",
        "type": "elemental",
        "alignment": "Neutral",
        "ac": "13",
        "hp": "58 (9d10+9)",
        "speed": "walk 0 ft., swim 60 ft.",
        "str": "17",
        "dex": "16",
        "con": "13",
        "int": "11",
        "wis": "10",
        "cha": "10",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "understands Aquan but doesn't speak",
        "cr": "3",
        "resist": "fire; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious",
        "senses": "blindsight 30 ft.",
        "trait": [
            {
                "name": "Invisible in Water",
                "text": "The water weird is invisible while fully immersed in water."
            },
            {
                "name": "Water Bound",
                "text": "The water weird dies if it leaves the water to which it is bound or if that water is destroyed."
            }
        ],
        "action": {
            "name": "Constrict",
            "text": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can't constrict another target.",
            "attack": "Constrict|+5|3d6+3"
        },
        "description": "A water weird is an elemental guardian bound to a specific water-filled location, such as a pool or fountain.\nInvisible while immersed in water, its serpentine shape becomes clear only when it emerges to attack, using its coils to crush any creature other than its summoner and those its summoner declares as off limits. When slain, a water weird becomes an inanimate pool of water.\nGood and Evil Weirds. Like most elementals, a water weird has no concept of good or evil. However, a water weird bound to a sacred or befouled source of water begins to take on the nature of that site, becoming neutral good or neutral evil.\nA neutral good water weird tries to frighten away interlopers rather than kill them, while a neutral evil water weird kills its victims for pleasure and might turn against its summoner. A water weird loses its evil alignment if its waters are cleansed with a purify food and drink spell.\nElemental Nature. A water weird doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 299, Princes of the Apocalypse, Tales from the Yawning Portal, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark, urban"
    },
    {
        "name": "Weasel",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "13",
        "hp": "1 (1d4-1)",
        "speed": "walk 30 ft.",
        "str": "3",
        "dex": "16",
        "con": "8",
        "int": "2",
        "wis": "12",
        "cha": "3",
        "save": "",
        "skill": "Perception +3, Stealth +5",
        "passive": "13",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Keen Hearing and Smell",
            "text": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 1 piercing damage."
        },
        "description": "Source: Monster Manual p. 340, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Werebear",
        "size": "M",
        "type": "humanoid (human, shapechanger)",
        "alignment": "Neutral Good",
        "ac": "10 (in humanoid form, 11 (natural armor) in bear or hybrid form)",
        "hp": "135 (18d8+54)",
        "speed": "walk 30 ft.",
        "str": "19",
        "dex": "10",
        "con": "17",
        "int": "11",
        "wis": "12",
        "cha": "12",
        "save": "",
        "skill": "Perception +7",
        "passive": "17",
        "languages": "Common (can't speak in bear form)",
        "cr": "5",
        "resist": "",
        "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "text": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
            },
            {
                "name": "Bite (Bear or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with were bear lycanthropy.",
                "attack": "Bite (Bear or Hybrid Form Only)|+7|2d10+4"
            },
            {
                "name": "Claw (Bear or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 13 (2d8 + 4) slashing damage.",
                "attack": "Claw (Bear or Hybrid Form Only)|+7|2d8+4"
            },
            {
                "name": "Greataxe (Humanoid or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 10 (1d12 + 4) slashing damage.",
                "attack": "Greataxe (Humanoid or Hybrid Form Only)|+7|1d12+4"
            },
            {
                "name": "Variant: Nonhuman Lycanthropes",
                "text": "The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait."
            }
        ],
        "description": "Curse of Lycanthropy. A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A remove curse spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.\nA lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.\nSome individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.\nPlayer Characters as Lycanthropes\nA character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.\nA non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.\nThe following information applies to specific lycanthropes.\nWerebear. The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nWereboar. The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWererat. The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.\nWeretiger. The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWerewolf. The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nSource: Monster Manual p. 208, Ghosts of Saltmarsh, Explorer's Guide to Wildemount",
        "environment": "forest, hill, arctic"
    },
    {
        "name": "Wereboar",
        "size": "M",
        "type": "humanoid (human, shapechanger)",
        "alignment": "Neutral Evil",
        "ac": "10 (in humanoid form, 11 (natural armor) in boar or hybrid form)",
        "hp": "78 (12d8+24)",
        "speed": "walk 30 ft.",
        "str": "17",
        "dex": "10",
        "con": "15",
        "int": "10",
        "wis": "11",
        "cha": "8",
        "save": "",
        "skill": "Perception +2",
        "passive": "12",
        "languages": "Common (can't speak in boar form)",
        "cr": "4",
        "resist": "",
        "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Charge (Boar or Hybrid Form Only)",
                "text": "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            },
            {
                "name": "Relentless (Recharges after a Short or Long Rest)",
                "text": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack (Humanoid or Hybrid Form Only)",
                "text": "The wereboar makes two attacks, only one of which can be with its tusks."
            },
            {
                "name": "Maul (Humanoid or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) bludgeoning damage.",
                "attack": "Maul (Humanoid or Hybrid Form Only)|+5|2d6+3"
            },
            {
                "name": "Tusks (Boar or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.",
                "attack": "Tusks (Boar or Hybrid Form Only)|+5|2d6+3"
            },
            {
                "name": "Variant: Nonhuman Lycanthropes",
                "text": "The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait."
            }
        ],
        "description": "Curse of Lycanthropy. A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A remove curse spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.\nA lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.\nSome individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.\nPlayer Characters as Lycanthropes\nA character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.\nA non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.\nThe following information applies to specific lycanthropes.\nWerebear. The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nWereboar. The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWererat. The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.\nWeretiger. The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWerewolf. The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nSource: Monster Manual p. 209, Tomb of Annihilation, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "grassland, forest, hill"
    },
    {
        "name": "Wererat",
        "size": "M",
        "type": "humanoid (human, shapechanger)",
        "alignment": "Lawful Evil",
        "ac": "12",
        "hp": "33 (6d8+6)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "15",
        "con": "12",
        "int": "11",
        "wis": "10",
        "cha": "8",
        "save": "",
        "skill": "Perception +2, Stealth +4",
        "passive": "12",
        "languages": "Common (can't speak in rat form)",
        "cr": "2",
        "resist": "",
        "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft. (rat form only)",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "text": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "action": [
            {
                "name": "Multiattack (Humanoid or Hybrid Form Only)",
                "text": "The wererat makes two attacks, only one of which can be a bite."
            },
            {
                "name": "Bite (Rat or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy.",
                "attack": "Bite (Rat or Hybrid Form Only)|+4|1d4+2"
            },
            {
                "name": "Shortsword (Humanoid or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Shortsword (Humanoid or Hybrid Form Only)|+4|1d6+2"
            },
            {
                "name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
                "text": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Hand Crossbow (Humanoid or Hybrid Form Only)|+4|1d6+2"
            },
            {
                "name": "Variant: Nonhuman Lycanthropes",
                "text": "The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait."
            }
        ],
        "description": "Curse of Lycanthropy. A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A remove curse spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.\nA lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.\nSome individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.\nPlayer Characters as Lycanthropes\nA character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.\nA non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.\nThe following information applies to specific lycanthropes.\nWerebear. The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nWereboar. The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWererat. The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.\nWeretiger. The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWerewolf. The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nSource: Monster Manual p. 209, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount",
        "environment": "forest, urban"
    },
    {
        "name": "Weretiger",
        "size": "M",
        "type": "humanoid (human, shapechanger)",
        "alignment": "Neutral",
        "ac": "12",
        "hp": "120 (16d8+48)",
        "speed": "walk 30 ft.",
        "str": "17",
        "dex": "15",
        "con": "16",
        "int": "10",
        "wis": "13",
        "cha": "11",
        "save": "",
        "skill": "Perception +5, Stealth +4",
        "passive": "15",
        "languages": "Common (can't speak in tiger form)",
        "cr": "4",
        "resist": "",
        "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "text": "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pounce (Tiger or Hybrid Form Only)",
                "text": "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
            }
        ],
        "action": [
            {
                "name": "Multiattack (Humanoid or Hybrid Form Only)",
                "text": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
            },
            {
                "name": "Bite (Tiger or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.",
                "attack": "Bite (Tiger or Hybrid Form Only)|+5|1d10+3"
            },
            {
                "name": "Claw (Tiger or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 7 (1d8 + 3) slashing damage.",
                "attack": "Claw (Tiger or Hybrid Form Only)|+5|1d8+3"
            },
            {
                "name": "Scimitar (Humanoid or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage.",
                "attack": "Scimitar (Humanoid or Hybrid Form Only)|+5|1d6+3"
            },
            {
                "name": "Longbow (Humanoid or Hybrid Form Only)",
                "text": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. 6 (1d8 + 2) piercing damage.",
                "attack": "Longbow (Humanoid or Hybrid Form Only)|+4|1d8+2"
            },
            {
                "name": "Variant: Nonhuman Lycanthropes",
                "text": "The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait."
            }
        ],
        "description": "Curse of Lycanthropy. A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A remove curse spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.\nA lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.\nSome individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.\nPlayer Characters as Lycanthropes\nA character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.\nA non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.\nThe following information applies to specific lycanthropes.\nWerebear. The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nWereboar. The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWererat. The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.\nWeretiger. The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWerewolf. The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nSource: Monster Manual p. 210, Tomb of Annihilation, Explorer's Guide to Wildemount",
        "environment": "grassland, forest, desert"
    },
    {
        "name": "Werewolf",
        "size": "M",
        "type": "humanoid (human, shapechanger)",
        "alignment": "Chaotic Evil",
        "ac": "11 (in humanoid form, 12 (natural armor) in wolf or hybrid form)",
        "hp": "58 (9d8+18)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "13",
        "con": "14",
        "int": "10",
        "wis": "11",
        "cha": "10",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "Common (can't speak in wolf form)",
        "cr": "3",
        "resist": "",
        "immune": "bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "text": "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "action": [
            {
                "name": "Multiattack (Humanoid or Hybrid Form Only)",
                "text": "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)."
            },
            {
                "name": "Bite (Wolf or Hybrid Form Only)",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.",
                "attack": "Bite (Wolf or Hybrid Form Only)|+4|1d8+2"
            },
            {
                "name": "Claws (Hybrid Form Only)",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 7 (2d4 + 2) slashing damage.",
                "attack": "Claws (Hybrid Form Only)|+4|2d4+2"
            },
            {
                "name": "Spear (Humanoid Form Only)",
                "text": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
                "attack": "Spear (Humanoid Form Only)|+4|1d6+2"
            },
            {
                "name": "Variant: Nonhuman Lycanthropes",
                "text": "The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait."
            }
        ],
        "description": "Curse of Lycanthropy. A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A remove curse spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.\nA lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.\nSome individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.\nPlayer Characters as Lycanthropes\nA character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.\nA non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.\nThe following information applies to specific lycanthropes.\nWerebear. The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nWereboar. The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWererat. The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.\nWeretiger. The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.\nWerewolf. The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.\nSource: Monster Manual p. 211, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest, hill"
    },
    {
        "name": "White Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "16 (natural armor)",
        "hp": "32 (5d8+10)",
        "speed": "walk 30 ft., burrow 15 ft., fly 60 ft., swim 30 ft.",
        "str": "14",
        "dex": "10",
        "con": "14",
        "int": "5",
        "wis": "10",
        "cha": "11",
        "save": "Dex +2, Con +4, Wis +2, Cha +2",
        "skill": "Perception +4, Stealth +2",
        "passive": "14",
        "languages": "Draconic",
        "cr": "2",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage.",
                "attack": "Bite|+4|1d10+2"
            },
            {
                "name": "Cold Breath (Recharge 5-6)",
                "text": "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.",
                "attack": "Cold Breath (Recharge 5-6)||5d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 102, Storm King's Thunder, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Wight",
        "size": "M",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "14 (studded leather armor)",
        "hp": "45 (6d8+18)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "14",
        "con": "16",
        "int": "10",
        "wis": "13",
        "cha": "15",
        "save": "",
        "skill": "Perception +3, Stealth +4",
        "passive": "13",
        "languages": "the languages it knew in life",
        "cr": "3",
        "resist": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, poisoned",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Sunlight Sensitivity",
            "text": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
            },
            {
                "name": "Life Drain",
                "text": [
                    "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                    "A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time."
                ],
                "attack": "Life Drain|+4|1d6+2"
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.",
                "attack": "Longsword|+4|1d8+2"
            },
            {
                "name": "Longbow",
                "text": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. 6 (1d8 + 2) piercing damage.",
                "attack": "Longbow|+4|1d8+2"
            }
        ],
        "description": "The word \"wight\" meant \"person\" in days of yore, but the name now refers to evil undead who were once mortals driven by dark desire and great vanity. When death stills such a creature's heart and snuffs its living breath, its spirit cries out to the demon lord Orcus or some vile god of the underworld for a reprieve: undeath in return for eternal war on the living. If a dark power answers the call, the spirit is granted undeath so that it can pursue its own malevolent agenda.\nWights possess the memories and drives of their formerly living selves. They will heed the call of whatever dark entity transformed them into undead, swearing oaths to appease their new lord while retaining their autonomy. Never tiring, a wight can pursue its goals relentlessly and without distraction.\nLife Eaters. Neither dead nor alive, a wight exists in a transitional state between one world and the next. The bright spark it possessed in life is gone, and in its place is a yearning to consume that spark in all living things.\nWhen a wight attacks, this life essence glows like white-hot embers to its dark eyes, and the wight's cold touch can drain the spark through flesh, clothing, and armor.\nShadow of the Grave. Wights flee from the world by day, away from the light of the sun, which they hate. They retreat to barrow mounds, crypts, and tombs where they dwell. Their lairs are silent, desolate places, surrounded by dead plants, noticeably blackened, and avoided by bird and beast.\nHumanoids slain by a wight can rise as zombies under its control. Motivated by hunger for living souls and driven by the same desire for power that awakened them in undeath, some wights serve as shock troops for evil leaders, including wraiths. As soldiers, they are able to plan but seldom do so, relying on their hunger for destruction to overwhelm any creature that stands before them.\nUndead Nature. A wight doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 300, Curse of Strahd, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark, swamp, urban, desert"
    },
    {
        "name": "Will-o'-Wisp",
        "size": "T",
        "type": "undead",
        "alignment": "Chaotic Evil",
        "ac": "19",
        "hp": "22 (9d4)",
        "speed": "walk 0 ft., fly 50 ft.",
        "str": "1",
        "dex": "28",
        "con": "10",
        "int": "13",
        "wis": "14",
        "cha": "11",
        "save": "",
        "skill": "",
        "passive": "12",
        "languages": "the languages it knew in life",
        "cr": "2",
        "resist": "acid, cold, fire, necrotic, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "lightning, poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Consume Life",
                "text": "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
            },
            {
                "name": "Ephemeral",
                "text": "The will-o'-wisp can't wear or carry anything."
            },
            {
                "name": "Incorporeal Movement",
                "text": "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                "name": "Variable Illumination",
                "text": "The will-o'-wisp sheds bright light in a 5 to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
            }
        ],
        "action": [
            {
                "name": "Shock",
                "text": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. 9 (2d8) lightning damage.",
                "attack": "Shock|+4|2d8"
            },
            {
                "name": "Invisibility",
                "text": "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
            }
        ],
        "description": "Will-o'-wisps are malevolent, wispy balls of light that haunt lonely places and battlefields, bound by dark fate or dark magic to feed on fear and despair.\nHope and Doom. Will-o'-wisps look like bobbing lantern lights in the distance, although they can choose to alter their colors, or wink out completely. When they activate their lights, will-o'-wisps offer hope, hinting of safety to creatures that follow them.\nWill-o'-wisps lure unwary creatures into quicksand pits, monster lairs, and other dangerous places so that they can feed on the suffering of their prey and revel in their death screams. An evil being that falls prey to a will-o'-wisp might become a wisp itself, its woeful spirit coalescing above its lifeless corpse like a flickering flame.\nConsumed by Despair. Will-o'-wisps are the souls of evil beings that perished in anguish or misery as they wandered forsaken lands permeated with powerful magic. They thrive in swampy bogs and bone-strewn battlefields where the oppressive weight of sorrow stoops even heavier than the low-hanging mist and fog. Trapped in these desolate places of lost hope and memory, will-o'-wisps lure other creatures toward dismal fates and feed on their misery.\nAgents of Evil. Will-o'-wisps rarely speak, but when they do, their voices sound like faint or distant whispers. In the miserable domains they haunt, will-o'-wisps sometimes form symbiotic relationships with their wicked neighbors. Hags, oni, black dragons, and evil cultists work with will-o'-wisps to draw creatures into ambush. As their evil allies surround and slaughter creatures, the wisps hover above them, drinking the agony of a last breath and savoring the sensation as the light of life goes out in a creature's eyes.\nUndead Nature. A will-o'-wisp doesn't require air, drink, or sleep.\nSource: Monster Manual p. 301, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest, swamp, urban"
    },
    {
        "name": "Winged Kobold",
        "size": "S",
        "type": "humanoid (kobold)",
        "alignment": "Lawful Evil",
        "ac": "13",
        "hp": "7 (3d6-3)",
        "speed": "walk 30 ft., fly 30 ft.",
        "str": "7",
        "dex": "16",
        "con": "9",
        "int": "8",
        "wis": "7",
        "cha": "8",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "Common, Draconic",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Pack Tactics",
                "text": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        "action": [
            {
                "name": "Dagger",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 5 (1d4 + 3) piercing damage.",
                "attack": "Dagger|+5|1d4+3"
            },
            {
                "name": "Dropped Rock",
                "text": "Ranged Weapon Attack: +5 to hit, one target directly below the kobold. 6 (1d6 + 3) bludgeoning damage.",
                "attack": "Dropped Rock|+5|1d6+3"
            }
        ],
        "description": "Kobolds are craven reptilian humanoids that worship evil dragons as demigods and serve them as minions and toadies. Kobolds inhabit dragons' lairs when they can but more commonly infest dungeons, gathering treasures and trinkets to add to their own tiny hoards.\nStrength in Numbers. Kobolds are egg-laying creatures. They mature quickly and can live to be \"great wyrms\" more than a century old. However, many kobolds perish before they reach the end of their first decade. Physically weak, they are easy prey for predators. This vulnerability forces them to band together. Their superior numbers can win battles against powerful adversaries, but often with massive casualties on the kobold side.\nTunnelers and Builders. Kobolds make up for their physical ineptitude with a cleverness for trap making and tunneling. Their lairs consist of low tunnels through which they move easily but which hinder larger humanoids. Kobolds also riddle their lairs with traps. The most insidious kobold traps make use of natural hazards and other creatures. A trip wire might connect to a spring-loaded trap that hurls clay pots of flesh-eating green slime or flings crates of venomous giant centipedes at intruders.\nThe Lost God. In addition to the dragons they revere, kobolds worship a lesser god named Kurtulmak. Legends speak of how Kurtulmak served as Tiamat's vassal in the Nine Hells until Garl Glittergold, the god of gnomes, stole a trinket from the Dragon Queen's hoard. Tiamat sent Kurtulmak to retrieve the trinket, but Garl Glittergold played a trick on him, collapsing the earth and trapping the kobold god in an underground maze for eternity. For this reason, kobolds hate gnomes and pranks of any kind. Kurtulmak's most devoted worshipers dedicate themselves to finding and releasing their lost god from his prison-maze.\nSource: Monster Manual p. 195, Hoard of the Dragon Queen, Tomb of Annihilation, Ghosts of Saltmarsh",
        "environment": "forest, swamp, hill, urban, desert, coastal, arctic, mountain, underdark"
    },
    {
        "name": "Winter Wolf",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Neutral Evil",
        "ac": "13 (natural armor)",
        "hp": "75 (10d10+20)",
        "speed": "walk 50 ft.",
        "str": "18",
        "dex": "13",
        "con": "14",
        "int": "7",
        "wis": "12",
        "cha": "8",
        "save": "",
        "skill": "Perception +5, Stealth +3",
        "passive": "15",
        "languages": "Common, Giant, Winter Wolf",
        "cr": "3",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Keen Hearing and Smell",
                "text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
            },
            {
                "name": "Snow Camouflage",
                "text": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
                "attack": "Bite|+6|2d6+4"
            },
            {
                "name": "Cold Breath (Recharge 5-6)",
                "text": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
                "attack": "Cold Breath (Recharge 5-6)||4d8"
            }
        ],
        "description": "The arctic-dwelling winter wolf is as large as a dire wolf but has snow-white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves' deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.\nSource: Monster Manual p. 340, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Icewind Dale: Rime of the Frostmaiden",
        "environment": "arctic"
    },
    {
        "name": "Wolf",
        "size": "M",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "11 (2d8+2)",
        "speed": "walk 40 ft.",
        "str": "12",
        "dex": "15",
        "con": "12",
        "int": "3",
        "wis": "12",
        "cha": "6",
        "save": "",
        "skill": "Perception +3, Stealth +4",
        "passive": "13",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Keen Hearing and Smell",
                "text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
            "attack": "Bite|+4|2d4+2"
        },
        "description": "Source: Monster Manual p. 341, Curse of Strahd, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "grassland, forest, hill"
    },
    {
        "name": "Worg",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Neutral Evil",
        "ac": "13 (natural armor)",
        "hp": "26 (4d10+4)",
        "speed": "walk 50 ft.",
        "str": "16",
        "dex": "13",
        "con": "13",
        "int": "7",
        "wis": "11",
        "cha": "8",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "Goblin, Worg",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Keen Hearing and Smell",
            "text": "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
            "attack": "Bite|+5|2d6+3"
        },
        "description": "A worg is an evil predator that delights in hunting and devouring creatures weaker than itself. Cunning and malevolent, worgs roam across the remote wilderness or are raised by goblins and hobgoblins. Those creatures use worgs as mounts, but a worg will turn on its rider if it feels mistreated or malnourished. Worgs speak in their own language and Goblin, and a few learn to speak Common as well.\nSource: Monster Manual p. 341, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War, Icewind Dale: Rime of the Frostmaiden",
        "environment": "grassland, forest, hill"
    },
    {
        "name": "Wraith",
        "size": "M",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "13",
        "hp": "67 (9d8+27)",
        "speed": "walk 0 ft., fly 60 ft.",
        "str": "6",
        "dex": "16",
        "con": "16",
        "int": "12",
        "wis": "14",
        "cha": "15",
        "save": "",
        "skill": "",
        "passive": "12",
        "languages": "the languages it knew in life",
        "cr": "5",
        "resist": "acid, cold, fire, lightning, thunder; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "necrotic, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Incorporeal Movement",
                "text": "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "action": [
            {
                "name": "Life Drain",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                "attack": "Life Drain|+6|4d8+3"
            },
            {
                "name": "Create Specter",
                "text": "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
            }
        ],
        "description": "A wraith is malice incarnate, concentrated into an incorporeal form that seeks to quench all life. The creature is suffused with negative energy, and its mere passage through the world leaves nearby plants blackened and withered. Animals flee from its presence. Even small fires can be extinguished by the sucking oblivion of the wraith's horrifying existence.\nVile Oblivion. When a mortal humanoid lives a debased life or enters into a fiendish pact, it consigns its soul to eternal damnation in the Lower Planes. However, sometimes the soul becomes so suffused with negative energy that it collapses in on itself and ceases to exist the instant before it can shuffle off to some horrible afterlife. When this occurs, the spirit becomes a soulless wraith-a malevolent void trapped on the plane where it died. Almost nothing of the wraith's former existence is preserved; in this new form, it exists only to annihilate other life.\nBereft of Body. A wraith can move through solid creatures and objects as easily as a mortal creature moves through fog.\nA wraith might retain a few memories of its mortal life as shadowy echoes. However, even the strongest events and emotions become little more than faint impressions, fleeting as half-remembered dreams. A wraith might pause to stare at something that fascinated it in life, or it might curb its wrath in acknowledgment of a past friendship. Such moments come rarely, however, because most wraiths despise what they were as a reminder of what they have become.\nUndead Commanders. A wraith can make an undead servant from the spirit of a humanoid creature that has recently suffered a violent death. Such a fragment of woe becomes a specter, spiteful of all that lives.\nWraiths sometimes rule the legions of the dead, plotting the doom of living creatures. When they emerge from their tombs to do battle, life and hope shrivel before them. Even if a wraith's armies are forced to retreat, the lands its forces occupied are so blasted and withered that those who live there often starve and die.\nUndead Nature. A wraith doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 302, Curse of Strahd, Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "underdark"
    },
    {
        "name": "Wyvern",
        "size": "L",
        "type": "dragon",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "110 (13d10+39)",
        "speed": "walk 20 ft., fly 80 ft.",
        "str": "19",
        "dex": "10",
        "con": "16",
        "int": "5",
        "wis": "12",
        "cha": "6",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "",
        "cr": "6",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. 11 (2d6 + 4) piercing damage.",
                "attack": "Bite|+7|2d6+4"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 13 (2d8 + 4) slashing damage.",
                "attack": "Claws|+7|2d8+4"
            },
            {
                "name": "Stinger",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": [
                    "Stinger|+7|2d6+4",
                    "Stinger||7d6"
                ]
            }
        ],
        "description": "Travelers in the wild sometimes look to the skies to see the dark-winged shape of a wyvern carrying its prey. These cousins to the great dragons hunt the same tangled forests and caverns as their kin. Their appearance sends ripples of alarm through the borderlands of civilization.\nA wyvern has two scaly legs, leathery wings, and a sinewy tail topped with its most potent weapon: a poison stinger. The poison in a wyvern's stinger can kill a creature in seconds. Extremely potent, wyvern poison burns through its victim's bloodstream, disintegrating veins and arteries on its way to the heart. As deadly as wyverns can be, however, hunters and adventurers often track them to claim the venom, which is used in alchemical compounds and to coat weapons.\nAerial Hunters. A wyvern doesn't fight on the ground unless it can't reach its prey by any other means, or if it has been fooled into a position from which aerial combat isn't an option. If forced into a confrontation on the ground, a wyvern crouches low, keeping its stinger poised above its head as it hisses and growls.\nAggressive and Reckless. A wyvern intent on its prey backs down only if it sustains serious injury, or if its prey eludes it long enough for another easier potential meal to wander along. If it corners a fleeing creature in an enclosure too small to enter, a wyvern guards where the quarry hides, lashing with its stinger whenever opportunity allows.\nAlthough they possess more cunning than ordinary beasts, wyverns lack the intelligence of their draconic cousins. As such, creatures that maintain their composure as a wyvern hunts them from the air can often elude or trick it. Wyverns follow a direct path to their prey, with no thought given to possible ambushes.\nTamed Wyverns. A wyvern can be tamed for use as a mount, but doing so presents a difficult and deadly challenge. Raising one as a hatchling offers the best results. However, a wyvern's violent temperament has cost the life of many a would-be master.\nSource: Monster Manual p. 303, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus",
        "environment": "mountain, hill"
    },
    {
        "name": "Xorn",
        "size": "M",
        "type": "elemental",
        "alignment": "Neutral",
        "ac": "19 (natural armor)",
        "hp": "73 (7d8+42)",
        "speed": "walk 20 ft., burrow 20 ft.",
        "str": "17",
        "dex": "10",
        "con": "22",
        "int": "11",
        "wis": "10",
        "cha": "11",
        "save": "",
        "skill": "Perception +6, Stealth +3",
        "passive": "16",
        "languages": "Terran",
        "cr": "5",
        "resist": "piercing, slashing from nonmagical attacks that aren't adamantine",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft., tremorsense 60 ft.",
        "trait": [
            {
                "name": "Earth Glide",
                "text": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
            },
            {
                "name": "Stone Camouflage",
                "text": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            },
            {
                "name": "Treasure Sense",
                "text": "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The xorn makes three claw attacks and one bite attack."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 13 (3d6 + 3) piercing damage.",
                "attack": "Bite|+6|3d6+3"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage.",
                "attack": "Claw|+6|1d6+3"
            }
        ],
        "description": "Bizarre creatures native to the Elemental Plane of Earth, xorn sniff out gemstones and precious metals, then tunnel through earth and rock to consume those treasures. On the Material Plane, xorn must range far and wide through the Underdark to sustain themselves, becoming aggressive toward miners and treasure hunters when the valuable minerals of their diet are scarce.\nA xorn's unnatural origins are suggested by its unusually heavy body and the large, powerful mouth sitting atop its head. Its three long arms are each tipped with sharp talons, and its three large, stone-lidded eyes see in all directions.\nElemental Travelers. Possessed of the power of elemental earth, a xorn glides through stone and dirt as easily as a fish swims through water. It doesn't displace earth or stone when it moves, but merges with and flows through it, leaving no tunnel, hole, or hint of its passage.\nSource: Monster Manual p. 304, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Yeti",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Chaotic Evil",
        "ac": "12 (natural armor)",
        "hp": "51 (6d10+18)",
        "speed": "walk 40 ft., climb 40 ft.",
        "str": "18",
        "dex": "13",
        "con": "16",
        "int": "8",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "Perception +3, Stealth +3",
        "passive": "13",
        "languages": "Yeti",
        "cr": "3",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Fear of Fire",
                "text": "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
            },
            {
                "name": "Keen Smell",
                "text": "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Snow Camouflage",
                "text": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The yeti can use its Chilling Gaze and makes two claw attacks."
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage.",
                "attack": "Claw|+6|1d6+4"
            },
            {
                "name": "Chilling Gaze",
                "text": "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour.",
                "attack": "Chilling Gaze||3d6"
            }
        ],
        "description": "A yeti's windborne howl sounds out across remote mountains, striking fear into the hearts of the scattered miners and herders that dwell there. These hulking creatures stalk alpine peaks in a ceaseless hunt for food. Their snow-white fur lets them move like ghosts against the frozen landscape. A yeti's icy simian eyes can freeze its prey in place.\nKeen Hunters. Folk of the high peaks travel in groups and go armed, knowing that yetis can smell living flesh from miles away. When it finds prey, a yeti moves quickly over ice and stone to claim its meal, howling to the thrill of the hunt. Even in a blizzard, the scent of its quarry draws the yeti through the cold and snow.\nYetis hunt in solitude or in small family groups. When creatures flee from a yeti or engage it in battle, other yetis might catch the scent of blood and close in. The territorial yetis fight one another for the spoils of such battles, and yetis slain in the fight are also eaten, amid euphoric howls.\nTerrifying Howlers. Before an avalanche, a blizzard, or a deadly frost, the yetis' howls sweep down the mountain slopes on the icy wind. Some people of the alpine peaks believe that the voices of loved ones killed in avalanches and blizzards sound out in the wails of the yetis, crying warnings of ill omen. More pragmatic folk attest that the yeti's howl is a reminder that, despite the great accomplishments of civilization, the civilized become the hunted in nature's untamed domain.\nBrutal Rampagers. When mountain herds are abundant, yetis stay clear of humanoid realms. Driven by hunger, they attack humanoid settlements in waves, breaking down gates and stockade walls that once might have daunted them, then devouring the creatures within.\nDevious mountain folk sometimes use the yetis as unwitting weapons. A warlord might lay down slaughtered sheep or goats to draw yetis into an enemy's camp, sowing chaos and thinning the ranks before battle. Mountain clan chiefs, wanting to expand their territory, overhunt local game to diminish the yetis' food supplies, inspiring attacks on humanoid settlements that are swiftly annexed in the aftermath.\nAbominable Yetis. An abominable yeti is larger than a normal yeti, standing three times as tall as a human. It typically lives and hunts alone, though a pair of abominable yetis might live together long enough to raise young. These towering yetis are highly territorial and savage, attacking and devouring any warm-blooded creatures they encounter, then scattering the bones across the ice and snow.\nSource: Monster Manual p. 305, Storm King's Thunder, Tales from the Yawning Portal, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "arctic"
    },
    {
        "name": "Yochlol",
        "size": "M",
        "type": "fiend (demon, shapechanger)",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "136 (16d8+64)",
        "speed": "walk 30 ft., climb 30 ft.",
        "str": "15",
        "dex": "14",
        "con": "18",
        "int": "13",
        "wis": "15",
        "cha": "15",
        "save": "Dex +6, Int +5, Wis +6, Cha +6",
        "skill": "Deception +10, Insight +6",
        "passive": "12",
        "languages": "Abyssal, Elvish, Undercommon",
        "cr": "10",
        "resist": "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Magic Resistance",
                "text": "The yochlol has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Spider Climb",
                "text": "The yochlol can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Walker",
                "text": "The yochlol ignores movement restrictions caused by webbing."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The yochlol's spellcasting ability is Charisma (spell save DC 14). The yochlol can innately cast the following spells, requiring no material components:",
                    "At will: detect thoughts, web",
                    "1/day: dominate person"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The yochlol makes two melee attacks."
            },
            {
                "name": "Slam (Bite in Spider Form)",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft. (10 feet in demon form), one target. 5 (1d6 + 2) bludgeoning (piercing in spider form) damage plus 21 (6d6) poison damage.",
                "attack": "Slam (Bite in Spider Form)|+6|1d6+2"
            },
            {
                "name": "Mist Form",
                "text": [
                    "The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies.",
                    "While in mist form, the yochlol is incapacitated and can't speak. It has a flying speed of 30 feet, can hover, and can pass through any space that isn't airtight. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to nonmagical damage.",
                    "While in mist form, the yochlol can enter a creature's space and stop there. Each time that creature starts its turn with the yochlol in its space, the creature must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target is incapacitated."
                ]
            },
            {
                "name": "Variant: Summon Demon (1/Day)",
                "text": [
                    "The demon chooses what to summon and attempts a magical summoning.",
                    "A yochlol has a 50 chance of summoning one yochlol.",
                    "A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
                ]
            }
        ],
        "spells": "detect thoughts, web, dominate person",
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 65, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount",
        "environment": ""
    },
    {
        "name": "Young Black Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "18 (natural armor)",
        "hp": "127 (15d10+45)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "19",
        "dex": "14",
        "con": "17",
        "int": "12",
        "wis": "11",
        "cha": "15",
        "save": "Dex +5, Con +6, Wis +3, Cha +5",
        "skill": "Perception +6, Stealth +5",
        "passive": "16",
        "languages": "Common, Draconic",
        "cr": "7",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon can breathe air and water."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage.",
                "attack": "Bite|+7|2d10+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claw|+7|2d6+4"
            },
            {
                "name": "Acid Breath (Recharge 5-6)",
                "text": "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.",
                "attack": "Acid Breath (Recharge 5-6)||11d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 88, Rise of Tiamat, Tales from the Yawning Portal, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus",
        "environment": "swamp"
    },
    {
        "name": "Young Blue Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "18 (natural armor)",
        "hp": "152 (16d10+64)",
        "speed": "walk 40 ft., burrow 40 ft., fly 80 ft.",
        "str": "21",
        "dex": "10",
        "con": "19",
        "int": "14",
        "wis": "13",
        "cha": "17",
        "save": "Dex +4, Con +8, Wis +5, Cha +7",
        "skill": "Perception +9, Stealth +4",
        "passive": "19",
        "languages": "Common, Draconic",
        "cr": "9",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage.",
                "attack": "Bite|+9|2d10+5"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 12 (2d6 + 5) slashing damage.",
                "attack": "Claw|+9|2d6+5"
            },
            {
                "name": "Lightning Breath (Recharge 5-6)",
                "text": "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Breath (Recharge 5-6)||10d10"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 91, Curse of Strahd, Rise of Tiamat, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros",
        "environment": "desert, coastal"
    },
    {
        "name": "Young Brass Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "17 (natural armor)",
        "hp": "110 (13d10+39)",
        "speed": "walk 40 ft., burrow 20 ft., fly 80 ft.",
        "str": "19",
        "dex": "10",
        "con": "17",
        "int": "12",
        "wis": "11",
        "cha": "15",
        "save": "Dex +3, Con +6, Wis +3, Cha +5",
        "skill": "Perception +6, Persuasion +5, Stealth +3",
        "passive": "16",
        "languages": "Common, Draconic",
        "cr": "6",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 15 (2d10 + 4) piercing damage.",
                "attack": "Bite|+7|2d10+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claw|+7|2d6+4"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Fire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Sleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||12d6"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 105, Storm King's Thunder",
        "environment": "desert"
    },
    {
        "name": "Young Bronze Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "18 (natural armor)",
        "hp": "142 (15d10+60)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "21",
        "dex": "10",
        "con": "19",
        "int": "14",
        "wis": "13",
        "cha": "17",
        "save": "Dex +3, Con +7, Wis +4, Cha +6",
        "skill": "Insight +4, Perception +7, Stealth +3",
        "passive": "17",
        "languages": "Common, Draconic",
        "cr": "8",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon can breathe air and water."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 16 (2d10 + 5) piercing damage.",
                "attack": "Bite|+8|2d10+5"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 12 (2d6 + 5) slashing damage.",
                "attack": "Claw|+8|2d6+5"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Lightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
                    "• Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||10d10"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 108, Waterdeep: Dragon Heist, Ghosts of Saltmarsh",
        "environment": "coastal"
    },
    {
        "name": "Young Copper Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "17 (natural armor)",
        "hp": "119 (14d10+42)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "19",
        "dex": "12",
        "con": "17",
        "int": "16",
        "wis": "13",
        "cha": "15",
        "save": "Dex +4, Con +6, Wis +4, Cha +5",
        "skill": "Deception +5, Perception +7, Stealth +4",
        "passive": "17",
        "languages": "Common, Draconic",
        "cr": "7",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 15 (2d10 + 4) piercing damage.",
                "attack": "Bite|+7|2d10+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claw|+7|2d6+4"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Acid Breath. The dragon exhales acid in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.",
                    "• Slowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||9d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 112, Storm King's Thunder",
        "environment": "hill"
    },
    {
        "name": "Young Gold Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "18 (natural armor)",
        "hp": "178 (17d10+85)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "23",
        "dex": "14",
        "con": "21",
        "int": "16",
        "wis": "13",
        "cha": "20",
        "save": "Dex +6, Con +9, Wis +5, Cha +9",
        "skill": "Insight +5, Perception +9, Persuasion +9, Stealth +6",
        "passive": "19",
        "languages": "Common, Draconic",
        "cr": "10",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon can breathe air and water."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage.",
                "attack": "Bite|+10|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+10|2d6+6"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Fire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Weakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||10d10"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 115",
        "environment": "grassland, forest"
    },
    {
        "name": "Young Green Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "18 (natural armor)",
        "hp": "136 (16d10+48)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "19",
        "dex": "12",
        "con": "17",
        "int": "16",
        "wis": "13",
        "cha": "15",
        "save": "Dex +4, Con +6, Wis +4, Cha +5",
        "skill": "Deception +5, Perception +7, Stealth +4",
        "passive": "17",
        "languages": "Common, Draconic",
        "cr": "8",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon can breathe air and water."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Bite|+7|2d10+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claw|+7|2d6+4"
            },
            {
                "name": "Poison Breath (Recharge 5-6)",
                "text": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": "Poison Breath (Recharge 5-6)||12d6"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 94, Rise of Tiamat, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy",
        "environment": "forest"
    },
    {
        "name": "Young Red Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "18 (natural armor)",
        "hp": "178 (17d10+85)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "23",
        "dex": "10",
        "con": "21",
        "int": "14",
        "wis": "11",
        "cha": "19",
        "save": "Dex +4, Con +9, Wis +4, Cha +8",
        "skill": "Perception +8, Stealth +4",
        "passive": "18",
        "languages": "Common, Draconic",
        "cr": "10",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage.",
                "attack": "Bite|+10|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+10|2d6+6"
            },
            {
                "name": "Fire Breath (Recharge 5-6)",
                "text": "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
                "attack": "Fire Breath (Recharge 5-6)||16d6"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 98, Princes of the Apocalypse, Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage",
        "environment": "mountain, hill"
    },
    {
        "name": "Young Red Shadow Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "18 (natural armor)",
        "hp": "178 (17d10+85)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "23",
        "dex": "10",
        "con": "21",
        "int": "14",
        "wis": "11",
        "cha": "19",
        "save": "Dex +5, Con +10, Wis +5, Cha +9",
        "skill": "Perception +10, Stealth +10",
        "passive": "18",
        "languages": "Common, Draconic",
        "cr": "13",
        "resist": "necrotic",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Living Shadow",
                "text": "While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant."
            },
            {
                "name": "Shadow Stealth",
                "text": "While in dim light or darkness, the dragon can take the Hide action as a bonus action."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage plus 3 (1d6) necrotic damage.",
                "attack": "Bite|+10|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+10|2d6+6"
            },
            {
                "name": "Shadow Breath (Recharge 5-6)",
                "text": "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 56 (16d6) necrotic damage on a failed save, or half as much damage on a successful one. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control.",
                "attack": "Shadow Breath (Recharge 5-6)||16d6"
            }
        ],
        "description": "Shadow dragons are true dragons that were either born in the Shadowfell or transformed by years spent within its dismal confines. Some shadow dragons embrace the Shadowfell for its bleak landscapes and desolation. Others seek to return to the Material Plane, hungry to spread the darkness and evil of the Plane of Shadow.\nDark Portals. Portals to the Shadowfell manifest in forlorn places and the deep gloom of subterranean caverns. The dragons that lair in such places often discover these portals and find themselves transported to a new realm. Ancient dragons that sleep in their lairs for months or years at a time might find themselves spirited away, never knowing that a portal has formed without their knowledge as they dream.\nRecast in Shadow. The transformation to a shadow dragon happens over a period of years, during which time a dragon's scales lose their luster and fade to a charcoal hue. Its leathery wings become translucent, its eyes paling to pools of opalescent gray. Shadow dragons find sunlight abhorrent, and they are weaker in bright light than they are in darkness. Darkness makes the dragon fade to a spectral shadow of its former self. The magical nature of dragons holds an attraction for the Shadowfell, which seems somehow to crave the might and majesty of these great reptiles. The Shadowfell also has a dispiriting effect on its denizens, such that the longer a creature remains on the plane, the more it accepts the plane's malaise. As months and years pass for a dragon on the Shadowfell, it becomes aware of the transformation being wrought upon it, and yet can do nothing to prevent it.\nBack in the World. A shadow dragon is so suffused with the power of the Shadowfell that even a return to the Material Plane can't undo its transformation. Some shadow dragons attempt to lure other creatures from the mortal realm back to the Shadowfell to keep them company, at least until they tire of their guests and devour them. Others are happy to leave the Shadowfell behind forever, understanding that treasure and power are easier to come by in the Material Plane.\nDamage Resistances. The dragon has resistance to necrotic damage.\nSkill Proficiency: Stealth. The dragon's proficiency bonus is doubled for its Dexterity (Stealth) checks.\nLiving Shadow. While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant.\nShadow Stealth. While in dim light or darkness, the dragon can take the Hide action as a bonus action.\nSunlight Sensitivity. While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.\nNew Action: Bite. If the dragon deals acid, cold, fire, lightning, or poison damage with its bite, change that damage type to necrotic.\nNew Action: Shadow Breath. Any damage-dealing breath weapon possessed by the dragon deals necrotic damage instead of its original damage type. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control.\nSource: Monster Manual p. 85",
        "environment": "underdark"
    },
    {
        "name": "Young Remorhaz",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "14 (natural armor)",
        "hp": "93 (11d10+33)",
        "speed": "walk 30 ft., burrow 30 ft.",
        "str": "18",
        "dex": "13",
        "con": "17",
        "int": "3",
        "wis": "10",
        "cha": "4",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "5",
        "resist": "",
        "immune": "cold, fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft., tremorsense 60 ft.",
        "trait": {
            "name": "Heated Body",
            "text": "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 20 (3d10 + 4) piercing damage plus 7 (2d6) fire damage.",
            "attack": "Bite|+6|3d10+4"
        },
        "description": "From beneath the snow and ice bursts a remorhaz in a cloud of steam, its body pulsing with internal fire. Wing like fins flare from the back of the creature's head, and its wide mouth brims with jagged teeth.\nArctic Predators. Remorhazes live in arctic climes, preying on elk, polar bears, and other creatures sharing their territory. They can't tolerate warm weather, having adapted to the cold by generating a furnace-like heat within their bodies. When hunting, a remorhaz burrows deep below the snow and ice and lies in wait for the faint vibrations created by a creature moving above it. While hidden under the ice and snow, it can lower its body temperature so that it doesn't melt its cover.\nYoung Ones. Frost giant hunters scour the icy wastes for remorhaz nests and eggs. The giants prize young remorhazes, which can be trained from hatching to obey commands and guard the giants' icy citadels. Unlike fully grown specimens, young remorhazes gnaw on their victims instead of swallowing them whole.\nSource: Monster Manual p. 258, Storm King's Thunder, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "arctic"
    },
    {
        "name": "Young Silver Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "18 (natural armor)",
        "hp": "168 (16d10+80)",
        "speed": "walk 40 ft., fly 80 ft.",
        "str": "23",
        "dex": "10",
        "con": "21",
        "int": "14",
        "wis": "11",
        "cha": "19",
        "save": "Dex +4, Con +9, Wis +4, Cha +8",
        "skill": "Arcana +6, History +6, Perception +8, Stealth +4",
        "passive": "18",
        "languages": "Common, Draconic",
        "cr": "9",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage.",
                "attack": "Bite|+10|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+10|2d6+6"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Cold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
                    "• Paralyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||12d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 118, Storm King's Thunder",
        "environment": "mountain, urban"
    },
    {
        "name": "Young White Dragon",
        "size": "L",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "17 (natural armor)",
        "hp": "133 (14d10+56)",
        "speed": "walk 40 ft., burrow 20 ft., fly 80 ft., swim 40 ft.",
        "str": "18",
        "dex": "10",
        "con": "18",
        "int": "6",
        "wis": "11",
        "cha": "12",
        "save": "Dex +3, Con +7, Wis +3, Cha +4",
        "skill": "Perception +6, Stealth +3",
        "passive": "16",
        "languages": "Common, Draconic",
        "cr": "6",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": {
            "name": "Ice Walk",
            "text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage.",
                "attack": "Bite|+7|2d10+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claw|+7|2d6+4"
            },
            {
                "name": "Cold Breath (Recharge 5-6)",
                "text": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
                "attack": "Cold Breath (Recharge 5-6)||10d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 101, Rise of Tiamat, Tales from the Yawning Portal, Essentials Kit: Dragon of Icespire Peak, Icewind Dale: Rime of the Frostmaiden",
        "environment": "arctic"
    },
    {
        "name": "Yuan-ti Abomination",
        "size": "L",
        "type": "monstrosity (shapechanger, yuan-ti)",
        "alignment": "Neutral Evil",
        "ac": "15 (natural armor)",
        "hp": "127 (15d10+45)",
        "speed": "walk 40 ft.",
        "str": "19",
        "dex": "16",
        "con": "17",
        "int": "17",
        "wis": "15",
        "cha": "18",
        "save": "",
        "skill": "Perception +5, Stealth +6",
        "passive": "15",
        "languages": "Abyssal, Common, Draconic",
        "cr": "7",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
            },
            {
                "name": "Magic Resistance",
                "text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting (Abomination Form Only)",
                "text": [
                    "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 15). The yuan-ti can innately cast the following spells, requiring no material components:",
                    "At will: animal friendship (snakes only)",
                    "1/day: fear",
                    "3/day: suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack (Abomination Form Only)",
                "text": "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage.",
                "attack": "Bite|+7|1d6+4"
            },
            {
                "name": "Constrict",
                "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 11 (2d6 + 4) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target.",
                "attack": "Constrict|+7|2d6+4"
            },
            {
                "name": "Scimitar (Abomination Form Only)",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Scimitar (Abomination Form Only)|+7|2d6+4"
            },
            {
                "name": "Longbow (Abomination Form Only)",
                "text": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. 12 (2d8 + 3) piercing damage plus 10 (3d6) poison damage.",
                "attack": "Longbow (Abomination Form Only)|+6|2d8+3"
            }
        ],
        "spells": "animal friendship, fear, suggestion",
        "description": "Monstrous serpents with burly humanoid torsos and arms, abominations form the highest caste of yuan-ti society, and they most closely resemble the race as the serpent gods intended it. They mastermind elaborate schemes and perform dark rites in the hope of one day ruling the world.\nYuan-ti. Yuan-ti are devious serpent folk devoid of compassion. From remote temples in jungles, swamps, and deserts, the yuan-ti plot to supplant and dominate all other races and to make themselves gods.\nForsaken Humanity. The yuan-ti were once humans who thrived in the earliest days of civilization and worshiped serpents as totem animals. They lauded the serpent's sinuous flexibility, its calculated poise, and its deadly strike. Their advanced philosophy taught the virtue of detachment from emotion and of clear, focused thought.\nYuan-ti culture was among the richest in the mortal world. Their warriors were legendary, their empires always expanding. Yuan-ti temples stood at the centers of ancient metropolises, reaching ever higher in prayer to the gods they longed to emulate. In time, the serpent gods heard those prayers, their sibilant voices responding from the darkness as they told the yuan-ti what they must do. The yuan-ti religion grew more fanatical in its devotion. Cults bound themselves to the worship of the serpent gods and imitated their ways, indulging in cannibalism and humanoid sacrifice. Through foul sorcery, the yuan-ti bred with snakes, utterly sacrificing their humanity to become like the serpent gods in form, as well as in thought and emotion.\nYuan-ti know that the world they hope to rule can't be bound for long by brute force, and that many creatures will refuse to serve. As a result, yuan-ti first influence other creatures with the promise of wealth and power. Time and again, humanoid cultures make the fatal mistake of trusting the yuan-ti. They forget that a yuan-ti that acts honorably or lends aid in a time of trouble does so only as part of a grander design.\nYuan-ti leaders are cunning and ruthless tacticians who readily sacrifice lesser yuan-ti if potential victory justifies such losses. They have no sense of honorable combat and strike first in decisive ambush if they can.\nSerpent Kings of Fallen Empires. The yuan-ti view their physical transformation as a transcendent moment for their race, allowing them to shed their frail humanity like dead skin. Those that did not transform eventually became slaves or food for the blessed of the serpent gods. The yuan-ti empires withered or were defeated by those who fought against their cannibalism and slavery, and the serpent folk were left in the ruins of their great capitals, far removed from other races.\nCold of Heart. Humanoid emotions are foreign to most yuan-ti, which understand sentiment only as unexploitable weakness. A yuan-ti views the world and the events of its own life with such extreme pragmatism that it is nearly impossible to manipulate, influence, or control by nonmagical means, even as it seeks to control other creatures through terror, pleasure, and awe.\nFalse Worship. Yuan-ti life revolves around their temples, yet yuan-ti don't love the gods they worship. Instead, they see worship as a means to attain power. A yuan-ti believes an individual who attains enough power can devour and replace one of the yuan-ti gods. The yuan-ti strive for ascension and are willing to commit the darkest atrocities to achieve it.\nSerpent Gods. The yuan-ti revere a number of powerful entities as gods, including the following.\nDendar, the Night Serpent. Dendar's followers say that one day she will grow so large from feasting on the fears and nightmares of the world that she will devour it whole. Yuan-ti that serve Dendar terrorize other creatures in any way they can, growing and nurturing the fears of humanoids to feed the Night Serpent.\nMerrshaulk, Master of the Pit. Merrshaulk is the long slumbering chief deity of the yuan-ti. As worship of Merrshaulk waned, he went into slumber. Merrshaulk's priests are yuan-ti abominations that maintain traditions of living sacrifice and cause suffering in the god's name. With enough vile acts, the abominations believe that Merrshaulk will reawaken and restore the yuan-ti to their rightful place.\nSseth, the Sibilant Death. Sseth appeared to the yuan-ti of antiquity in the form of a winged yuan-ti claiming to be an avatar of Merrshaulk. Speaking with Merrshaulk's voice, Sseth vowed to pull the yuan-ti out of decline and build a new empire. Many of Merrshaulk's devout turned to the worship of Sseth. Some yuan-ti have long suspected Sseth as an usurper taking advantage of Merrshaulk's slumber to make himself a god. They believe that Sseth might even have devoured Merrshaulk, and now answers the prayers of Merrshaulk's followers, as his priests convert or consume Merrshaulk's more stubborn adherents.\nSource: Monster Manual p. 308, Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath",
        "environment": "forest, swamp, desert"
    },
    {
        "name": "Yuan-ti Malison (Type 1)",
        "size": "M",
        "type": "monstrosity (shapechanger, yuan-ti)",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "66 (12d8+12)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "14",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Deception +5, Stealth +4",
        "passive": "11",
        "languages": "Abyssal, Common, Draconic",
        "cr": "3",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
            },
            {
                "name": "Magic Resistance",
                "text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Malison Type",
                "text": [
                    "The yuan-ti has one of the following types:",
                    "• Type 1: Human body with snake head",
                    "• Type 2: Human head and body with snakes for arms",
                    "• Type 3: Human head and upper body with a serpentine lower body instead of legs"
                ]
            },
            {
                "name": "Innate Spellcasting (Yuan-ti Form Only)",
                "text": [
                    "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
                    "At will: animal friendship (snakes only)",
                    "3/day: suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack (Yuan-ti Form Only)",
                "text": "The yuan-ti makes two ranged attacks or two melee attacks, but can use its bite only once."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Bite|+5|1d4+3"
            },
            {
                "name": "Scimitar (Yuan-ti Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage.",
                "attack": "Scimitar (Yuan-ti Form Only)|+5|1d6+3"
            },
            {
                "name": "Longbow (Yuan-ti Form Only)",
                "text": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Longbow (Yuan-ti Form Only)|+4|1d8+2"
            }
        ],
        "spells": "animal friendship, suggestion",
        "description": "A malison is a hideous blend of human and serpentine features. Three different types of malisons are known to exist, and other types are possible. Malisons form the middle caste of yuan-ti society and hunt with arrows tipped with their own venom. They use their magical powers of suggestion to force their enemies' surrender.\nYuan-ti. Yuan-ti are devious serpent folk devoid of compassion. From remote temples in jungles, swamps, and deserts, the yuan-ti plot to supplant and dominate all other races and to make themselves gods.\nForsaken Humanity. The yuan-ti were once humans who thrived in the earliest days of civilization and worshiped serpents as totem animals. They lauded the serpent's sinuous flexibility, its calculated poise, and its deadly strike. Their advanced philosophy taught the virtue of detachment from emotion and of clear, focused thought.\nYuan-ti culture was among the richest in the mortal world. Their warriors were legendary, their empires always expanding. Yuan-ti temples stood at the centers of ancient metropolises, reaching ever higher in prayer to the gods they longed to emulate. In time, the serpent gods heard those prayers, their sibilant voices responding from the darkness as they told the yuan-ti what they must do. The yuan-ti religion grew more fanatical in its devotion. Cults bound themselves to the worship of the serpent gods and imitated their ways, indulging in cannibalism and humanoid sacrifice. Through foul sorcery, the yuan-ti bred with snakes, utterly sacrificing their humanity to become like the serpent gods in form, as well as in thought and emotion.\nYuan-ti know that the world they hope to rule can't be bound for long by brute force, and that many creatures will refuse to serve. As a result, yuan-ti first influence other creatures with the promise of wealth and power. Time and again, humanoid cultures make the fatal mistake of trusting the yuan-ti. They forget that a yuan-ti that acts honorably or lends aid in a time of trouble does so only as part of a grander design.\nYuan-ti leaders are cunning and ruthless tacticians who readily sacrifice lesser yuan-ti if potential victory justifies such losses. They have no sense of honorable combat and strike first in decisive ambush if they can.\nSerpent Kings of Fallen Empires. The yuan-ti view their physical transformation as a transcendent moment for their race, allowing them to shed their frail humanity like dead skin. Those that did not transform eventually became slaves or food for the blessed of the serpent gods. The yuan-ti empires withered or were defeated by those who fought against their cannibalism and slavery, and the serpent folk were left in the ruins of their great capitals, far removed from other races.\nCold of Heart. Humanoid emotions are foreign to most yuan-ti, which understand sentiment only as an exploitable weakness. A yuan-ti views the world and the events of its own life with such extreme pragmatism that it is nearly impossible to manipulate, influence, or control by nonmagical means, even as it seeks to control other creatures through terror, pleasure, and awe.\nFalse Worship. Yuan-ti life revolves around their temples, yet yuan-ti don't love the gods they worship. Instead, they see worship as a means to attain power. A yuan-ti believes an individual who attains enough power can devour and replace one of the yuan-ti gods. The yuan-ti strive for ascension and are willing to commit the darkest atrocities to achieve it.\nSerpent Gods. The yuan-ti revere a number of powerful entities as gods, including the following.\nDendar, the Night Serpent. Dendar's followers say that one day she will grow so large from feasting on the fears and nightmares of the world that she will devour it whole. Yuan-ti that serve Dendar terrorize other creatures in any way they can, growing and nurturing the fears of humanoids to feed the Night Serpent.\nMerrshaulk, Master of the Pit. Merrshaulk is the long slumbering chief deity of the yuan-ti. As worship of Merrshaulk waned, he went into slumber. Merrshaulk's priests are yuan-ti abominations that maintain traditions of living sacrifice and cause suffering in the god's name. With enough vile acts, the abominations believe that Merrshaulk will reawaken and restore the yuan-ti to their rightful place.\nSseth, the Sibilant Death. Sseth appeared to the yuan-ti of antiquity in the form of a winged yuan-ti claiming to be an avatar of Merrshaulk. Speaking with Merrshaulk's voice, Sseth vowed to pull the yuan-ti out of decline and build a new empire. Many of Merrshaulk's devout turned to the worship of Sseth. Some yuan-ti have long suspected Sseth as an usurper taking advantage of Merrshaulk's slumber to make himself a god. They believe that Sseth might even have devoured Merrshaulk, and now answers the prayers of Merrshaulk's followers, as his priests convert or consume Merrshaulk's more stubborn adherents.\nSource: Monster Manual p. 309, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation",
        "environment": "forest, swamp, desert"
    },
    {
        "name": "Yuan-ti Malison (Type 2)",
        "size": "M",
        "type": "monstrosity (shapechanger, yuan-ti)",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "66 (12d8+12)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "14",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Deception +5, Stealth +4",
        "passive": "11",
        "languages": "Abyssal, Common, Draconic",
        "cr": "3",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
            },
            {
                "name": "Magic Resistance",
                "text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Malison Type",
                "text": [
                    "The yuan-ti has one of the following types:",
                    "• Type 1: Human body with snake head",
                    "• Type 2: Human head and body with snakes for arms",
                    "• Type 3: Human head and upper body with a serpentine lower body instead of legs"
                ]
            },
            {
                "name": "Innate Spellcasting (Yuan-ti Form Only)",
                "text": [
                    "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
                    "At will: animal friendship (snakes only)",
                    "3/day: suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack (Yuan-ti Form Only)",
                "text": "The yuan-ti makes two bite attacks using its snake arms."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Bite|+5|1d4+3"
            }
        ],
        "spells": "animal friendship, suggestion",
        "description": "A malison is a hideous blend of human and serpentine features. Three different types of malisons are known to exist, and other types are possible. Malisons form the middle caste of yuan-ti society and hunt with arrows tipped with their own venom. They use their magical powers of suggestion to force their enemies' surrender.\nYuan-ti. Yuan-ti are devious serpent folk devoid of compassion. From remote temples in jungles, swamps, and deserts, the yuan-ti plot to supplant and dominate all other races and to make themselves gods.\nForsaken Humanity. The yuan-ti were once humans who thrived in the earliest days of civilization and worshiped serpents as totem animals. They lauded the serpent's sinuous flexibility, its calculated poise, and its deadly strike. Their advanced philosophy taught the virtue of detachment from emotion and of clear, focused thought.\nYuan-ti culture was among the richest in the mortal world. Their warriors were legendary, their empires always expanding. Yuan-ti temples stood at the centers of ancient metropolises, reaching ever higher in prayer to the gods they longed to emulate. In time, the serpent gods heard those prayers, their sibilant voices responding from the darkness as they told the yuan-ti what they must do. The yuan-ti religion grew more fanatical in its devotion. Cults bound themselves to the worship of the serpent gods and imitated their ways, indulging in cannibalism and humanoid sacrifice. Through foul sorcery, the yuan-ti bred with snakes, utterly sacrificing their humanity to become like the serpent gods in form, as well as in thought and emotion.\nYuan-ti know that the world they hope to rule can't be bound for long by brute force, and that many creatures will refuse to serve. As a result, yuan-ti first influence other creatures with the promise of wealth and power. Time and again, humanoid cultures make the fatal mistake of trusting the yuan-ti. They forget that a yuan-ti that acts honorably or lends aid in a time of trouble does so only as part of a grander design.\nYuan-ti leaders are cunning and ruthless tacticians who readily sacrifice lesser yuan-ti if potential victory justifies such losses. They have no sense of honorable combat and strike first in decisive ambush if they can.\nSerpent Kings of Fallen Empires. The yuan-ti view their physical transformation as a transcendent moment for their race, allowing them to shed their frail humanity like dead skin. Those that did not transform eventually became slaves or food for the blessed of the serpent gods. The yuan-ti empires withered or were defeated by those who fought against their cannibalism and slavery, and the serpent folk were left in the ruins of their great capitals, far removed from other races.\nCold of Heart. Humanoid emotions are foreign to most yuan-ti, which understand sentiment only as an exploitable weakness. A yuan-ti views the world and the events of its own life with such extreme pragmatism that it is nearly impossible to manipulate, influence, or control by nonmagical means, even as it seeks to control other creatures through terror, pleasure, and awe.\nFalse Worship. Yuan-ti life revolves around their temples, yet yuan-ti don't love the gods they worship. Instead, they see worship as a means to attain power. A yuan-ti believes an individual who attains enough power can devour and replace one of the yuan-ti gods. The yuan-ti strive for ascension and are willing to commit the darkest atrocities to achieve it.\nSerpent Gods. The yuan-ti revere a number of powerful entities as gods, including the following.\nDendar, the Night Serpent. Dendar's followers say that one day she will grow so large from feasting on the fears and nightmares of the world that she will devour it whole. Yuan-ti that serve Dendar terrorize other creatures in any way they can, growing and nurturing the fears of humanoids to feed the Night Serpent.\nMerrshaulk, Master of the Pit. Merrshaulk is the long slumbering chief deity of the yuan-ti. As worship of Merrshaulk waned, he went into slumber. Merrshaulk's priests are yuan-ti abominations that maintain traditions of living sacrifice and cause suffering in the god's name. With enough vile acts, the abominations believe that Merrshaulk will reawaken and restore the yuan-ti to their rightful place.\nSseth, the Sibilant Death. Sseth appeared to the yuan-ti of antiquity in the form of a winged yuan-ti claiming to be an avatar of Merrshaulk. Speaking with Merrshaulk's voice, Sseth vowed to pull the yuan-ti out of decline and build a new empire. Many of Merrshaulk's devout turned to the worship of Sseth. Some yuan-ti have long suspected Sseth as an usurper taking advantage of Merrshaulk's slumber to make himself a god. They believe that Sseth might even have devoured Merrshaulk, and now answers the prayers of Merrshaulk's followers, as his priests convert or consume Merrshaulk's more stubborn adherents.\nSource: Monster Manual p. 309, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation",
        "environment": "forest, swamp, desert"
    },
    {
        "name": "Yuan-ti Malison (Type 3)",
        "size": "M",
        "type": "monstrosity (shapechanger, yuan-ti)",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "66 (12d8+12)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "14",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Deception +5, Stealth +4",
        "passive": "11",
        "languages": "Abyssal, Common, Draconic",
        "cr": "3",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
            },
            {
                "name": "Magic Resistance",
                "text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Malison Type",
                "text": [
                    "The yuan-ti has one of the following types:",
                    "• Type 1: Human body with snake head",
                    "• Type 2: Human head and body with snakes for arms",
                    "• Type 3: Human head and upper body with a serpentine lower body instead of legs"
                ]
            },
            {
                "name": "Innate Spellcasting (Yuan-ti Form Only)",
                "text": [
                    "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
                    "At will: animal friendship (snakes only)",
                    "3/day: suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack (Yuan-ti Form Only)",
                "text": "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict only once."
            },
            {
                "name": "Bite (Snake Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Bite (Snake Form Only)|+5|1d4+3"
            },
            {
                "name": "Constrict",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target.",
                "attack": "Constrict|+5|2d6+3"
            },
            {
                "name": "Scimitar (Yuan-ti Form Only)",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage.",
                "attack": "Scimitar (Yuan-ti Form Only)|+5|1d6+3"
            },
            {
                "name": "Longbow (Yuan-ti Form Only)",
                "text": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. 6 (1d8 + 2) piercing damage.",
                "attack": "Longbow (Yuan-ti Form Only)|+4|1d8+2"
            }
        ],
        "spells": "animal friendship, suggestion",
        "description": "A malison is a hideous blend of human and serpentine features. Three different types of malisons are known to exist, and other types are possible. Malisons form the middle caste of yuan-ti society and hunt with arrows tipped with their own venom. They use their magical powers of suggestion to force their enemies' surrender.\nYuan-ti. Yuan-ti are devious serpent folk devoid of compassion. From remote temples in jungles, swamps, and deserts, the yuan-ti plot to supplant and dominate all other races and to make themselves gods.\nForsaken Humanity. The yuan-ti were once humans who thrived in the earliest days of civilization and worshiped serpents as totem animals. They lauded the serpent's sinuous flexibility, its calculated poise, and its deadly strike. Their advanced philosophy taught the virtue of detachment from emotion and of clear, focused thought.\nYuan-ti culture was among the richest in the mortal world. Their warriors were legendary, their empires always expanding. Yuan-ti temples stood at the centers of ancient metropolises, reaching ever higher in prayer to the gods they longed to emulate. In time, the serpent gods heard those prayers, their sibilant voices responding from the darkness as they told the yuan-ti what they must do. The yuan-ti religion grew more fanatical in its devotion. Cults bound themselves to the worship of the serpent gods and imitated their ways, indulging in cannibalism and humanoid sacrifice. Through foul sorcery, the yuan-ti bred with snakes, utterly sacrificing their humanity to become like the serpent gods in form, as well as in thought and emotion.\nYuan-ti know that the world they hope to rule can't be bound for long by brute force, and that many creatures will refuse to serve. As a result, yuan-ti first influence other creatures with the promise of wealth and power. Time and again, humanoid cultures make the fatal mistake of trusting the yuan-ti. They forget that a yuan-ti that acts honorably or lends aid in a time of trouble does so only as part of a grander design.\nYuan-ti leaders are cunning and ruthless tacticians who readily sacrifice lesser yuan-ti if potential victory justifies such losses. They have no sense of honorable combat and strike first in decisive ambush if they can.\nSerpent Kings of Fallen Empires. The yuan-ti view their physical transformation as a transcendent moment for their race, allowing them to shed their frail humanity like dead skin. Those that did not transform eventually became slaves or food for the blessed of the serpent gods. The yuan-ti empires withered or were defeated by those who fought against their cannibalism and slavery, and the serpent folk were left in the ruins of their great capitals, far removed from other races.\nCold of Heart. Humanoid emotions are foreign to most yuan-ti, which understand sentiment only as an exploitable weakness. A yuan-ti views the world and the events of its own life with such extreme pragmatism that it is nearly impossible to manipulate, influence, or control by nonmagical means, even as it seeks to control other creatures through terror, pleasure, and awe.\nFalse Worship. Yuan-ti life revolves around their temples, yet yuan-ti don't love the gods they worship. Instead, they see worship as a means to attain power. A yuan-ti believes an individual who attains enough power can devour and replace one of the yuan-ti gods. The yuan-ti strive for ascension and are willing to commit the darkest atrocities to achieve it.\nSerpent Gods. The yuan-ti revere a number of powerful entities as gods, including the following.\nDendar, the Night Serpent. Dendar's followers say that one day she will grow so large from feasting on the fears and nightmares of the world that she will devour it whole. Yuan-ti that serve Dendar terrorize other creatures in any way they can, growing and nurturing the fears of humanoids to feed the Night Serpent.\nMerrshaulk, Master of the Pit. Merrshaulk is the long slumbering chief deity of the yuan-ti. As worship of Merrshaulk waned, he went into slumber. Merrshaulk's priests are yuan-ti abominations that maintain traditions of living sacrifice and cause suffering in the god's name. With enough vile acts, the abominations believe that Merrshaulk will reawaken and restore the yuan-ti to their rightful place.\nSseth, the Sibilant Death. Sseth appeared to the yuan-ti of antiquity in the form of a winged yuan-ti claiming to be an avatar of Merrshaulk. Speaking with Merrshaulk's voice, Sseth vowed to pull the yuan-ti out of decline and build a new empire. Many of Merrshaulk's devout turned to the worship of Sseth. Some yuan-ti have long suspected Sseth as an usurper taking advantage of Merrshaulk's slumber to make himself a god. They believe that Sseth might even have devoured Merrshaulk, and now answers the prayers of Merrshaulk's followers, as his priests convert or consume Merrshaulk's more stubborn adherents.\nSource: Monster Manual p. 309, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation",
        "environment": "forest, swamp, desert"
    },
    {
        "name": "Yuan-ti Pureblood",
        "size": "M",
        "type": "humanoid (yuan-ti)",
        "alignment": "Neutral Evil",
        "ac": "11",
        "hp": "40 (9d8)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "12",
        "con": "11",
        "int": "13",
        "wis": "12",
        "cha": "14",
        "save": "",
        "skill": "Deception +6, Perception +3, Stealth +3",
        "passive": "13",
        "languages": "Abyssal, Common, Draconic",
        "cr": "1",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The yuan-ti has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The yuan-ti's spellcasting ability is Charisma (spell save DC 12). The yuan-ti can innately cast the following spells, requiring no material components:",
                    "At will: animal friendship (snakes only)",
                    "3/day each: poison spray, suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The yuan-ti makes two melee attacks."
            },
            {
                "name": "Scimitar",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 4 (1d6 + 1) slashing damage.",
                "attack": "Scimitar|+3|1d6+1"
            },
            {
                "name": "Shortbow",
                "text": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. 4 (1d6 + 1) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Shortbow|+3|1d6+1"
            }
        ],
        "spells": "animal friendship, poison spray, suggestion",
        "description": "Purebloods form the lowest caste of yuan-ti society. They closely resemble humans, yet a pureblood can't pass for human under close scrutiny because there's always some hint of its true nature, such as scaly patches of skin, serpentine eyes, pointed teeth, or a forked tongue. Wearing cloaks and cowls, they masquerade as humans and infiltrate civilized lands to gather information, kidnap prisoners for interrogation and sacrifice, and trade with anyone who has something that can further their myriad plots.\nYuan-ti. Yuan-ti are devious serpent folk devoid of compassion. From remote temples in jungles, swamps, and deserts, the yuan-ti plot to supplant and dominate all other races and to make themselves gods.\nForsaken Humanity. The yuan-ti were once humans who thrived in the earliest days of civilization and worshiped serpents as totem animals. They lauded the serpent's sinuous flexibility, its calculated poise, and its deadly strike. Their advanced philosophy taught the virtue of detachment from emotion and of clear, focused thought.\nYuan-ti culture was among the richest in the mortal world. Their warriors were legendary, their empires always expanding. Yuan-ti temples stood at the centers of ancient metropolises, reaching ever higher in prayer to the gods they longed to emulate. In time, the serpent gods heard those prayers, their sibilant voices responding from the darkness as they told the yuan-ti what they must do. The yuan-ti religion grew more fanatical in its devotion. Cults bound themselves to the worship of the serpent gods and imitated their ways, indulging in cannibalism and humanoid sacrifice. Through foul sorcery, the yuan-ti bred with snakes, utterly sacrificing their humanity to become like the serpent gods in form, as well as in thought and emotion.\nYuan-ti know that the world they hope to rule can't be bound for long by brute force, and that many creatures will refuse to serve. As a result, yuan-ti first influence other creatures with the promise of wealth and power. Time and again, humanoid cultures make the fatal mistake of trusting the yuan-ti. They forget that a yuan-ti that acts honorably or lends aid in a time of trouble does so only as part of a grander design.\nYuan-ti leaders are cunning and ruthless tacticians who readily sacrifice lesser yuan-ti if potential victory justifies such losses. They have no sense of honorable combat and strike first in decisive ambush if they can.\nSerpent Kings of Fallen Empires. The yuan-ti view their physical transformation as a transcendent moment for their race, allowing them to shed their frail humanity like dead skin. Those that did not transform eventually became slaves or food for the blessed of the serpent gods. The yuan-ti empires withered or were defeated by those who fought against their cannibalism and slavery, and the serpent folk were left in the ruins of their great capitals, far removed from other races.\nCold of Heart. Humanoid emotions are foreign to most yuan-ti, which understand sentiment only as an exploitable weakness. A yuan-ti views the world and the events of its own life with such extreme pragmatism that it is nearly impossible to manipulate, influence, or control by nonmagical means, even as it seeks to control other creatures through terror, pleasure, and awe.\nFalse Worship. Yuan-ti life revolves around their temples, yet yuan-ti don't love the gods they worship. Instead, they see worship as a means to attain power. A yuan-ti believes an individual who attains enough power can devour and replace one of the yuan-ti gods. The yuan-ti strive for ascension and are willing to commit the darkest atrocities to achieve it.\nSerpent Gods. The yuan-ti revere a number of powerful entities as gods, including the following.\nDendar, the Night Serpent. Dendar's followers say that one day she will grow so large from feasting on the fears and nightmares of the world that she will devour it whole. Yuan-ti that serve Dendar terrorize other creatures in any way they can, growing and nurturing the fears of humanoids to feed the Night Serpent.\nMerrshaulk, Master of the Pit. Merrshaulk is the long slumbering chief deity of the yuan-ti. As worship of Merrshaulk waned, he went into slumber. Merrshaulk's priests are yuan-ti abominations that maintain traditions of living sacrifice and cause suffering in the god's name. With enough vile acts, the abominations believe that Merrshaulk will reawaken and restore the yuan-ti to their rightful place.\nSseth, the Sibilant Death. Sseth appeared to the yuan-ti of antiquity in the form of a winged yuan-ti claiming to be an avatar of Merrshaulk. Speaking with Merrshaulk's voice, Sseth vowed to pull the yuan-ti out of decline and build a new empire. Many of Merrshaulk's devout turned to the worship of Sseth. Some yuan-ti have long suspected Sseth as an usurper taking advantage of Merrshaulk's slumber to make himself a god. They believe that Sseth might even have devoured Merrshaulk, and now answers the prayers of Merrshaulk's followers, as his priests convert or consume Merrshaulk's more stubborn adherents.\nSource: Monster Manual p. 310, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage",
        "environment": "forest, swamp, urban, desert"
    },
    {
        "name": "Zombie",
        "size": "M",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "8",
        "hp": "22 (3d8+9)",
        "speed": "walk 20 ft.",
        "str": "13",
        "dex": "6",
        "con": "16",
        "int": "3",
        "wis": "6",
        "cha": "5",
        "save": "Wis +0",
        "skill": "",
        "passive": "8",
        "languages": "understands all languages it spoke in life but can't speak",
        "cr": "1/4",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Undead Fortitude",
            "text": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
        },
        "action": {
            "name": "Slam",
            "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 4 (1d6 + 1) bludgeoning damage.",
            "attack": "Slam|+3|1d6+1"
        },
        "description": "From somewhere in the darkness, a gurgling moan is heard. A form lurches into view, dragging one foot as it raises bloated arms and broken hands. The zombie advances, driven to kill anyone too slow to escape its grasp.\nDark Servants. Sinister necromantic magic infuses the remains of the dead, causing them to rise as zombies that do their creator's bidding without fear or hesitation. They move with a jerky, uneven gait, clad in the moldering apparel they wore when put to rest, and carrying the stench of decay.\nMost zombies are made from humanoid remains, though the flesh and bones of any formerly living creature can be imbued with a semblance of life. Necromantic magic, usually from spells, animates a zombie. Some zombies rise spontaneously when dark magic saturates an area. Once turned into a zombie, a creature can't be restored to life except by powerful magic, such as a resurrection spell.\nA zombie retains no vestiges of its former self, its mind devoid of thought and imagination. A zombie left without orders simply stands in place and rots unless something comes along that it can kill. The magic animating a zombie imbues it with evil, so left without purpose, it attacks any living creature it encounters.\nHideous Forms. Zombies appear as they did in life, showing the wounds that killed them. However, the magic that creates these vile creatures often takes time to run its course. Dead warriors might rise from a battlefield, eviscerated and bloated after days in the sun. The muddy cadaver of a peasant could claw its way from the ground, riddled with maggots and worms. A zombie might wash ashore or rise from a marsh, swollen and reeking after weeks in the water.\nMindless Soldiers. Zombies take the most direct route to any foe, unable to comprehend obstacles, tactics, or dangerous terrain. A zombie might stumble into a fast-flowing river to reach foes on a far shore, clawing at the surface as it is battered against rocks and destroyed. To reach a foe below it, a zombie might step out of an open window. Zombies stumble through roaring infernos, into pools of acid, and across fields littered with caltrops without hesitation.\nA zombie can follow simple orders and distinguish friends from foes, but its ability to reason is limited to shambling in whatever direction it is pointed, pummeling any enemy in its path. A zombie armed with a weapon uses it, but the zombie won't retrieve a dropped weapon or other tool until told to do so.\nUndead Nature. A zombie doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 316, Curse of Strahd, Lost Mine of Phandelver, Princes of the Apocalypse, Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "urban"
    }
]

export default monsterManual