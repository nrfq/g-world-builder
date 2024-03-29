import { defineStore } from "pinia";

export const useOriginTable = defineStore('originTable', {
    state: () => ({"Android": {
        "name": "Android",
        "description": "You were made, not born. Simulation of a living creature is implicit in your shape, though sometimes you forget to boot up your \"pretend to breathe\" subroutine. But are you a living being who has machine parts, or a machine who has living parts?",
        "appearance": "Your metallic body parts draw attention before people notice one of your eyes is a flickering LED.",
        "score": "Int",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and the target grants combat advantage to you until the end of the encounter.",
        "source": "Dark",
        "skill": "Science",
        "traits": [
            {
                "name": "Built to Last",
                "description": "Gain a +2 bonus to Fortitude",
                "bonus": {
                    "fortitude": 2
                }
            },
            {
                "name": "Machine Powered",
                "description": "You do not need to eat, drink, or breathe."
            }
        ],
        "novicePower": {
            "name": "Machine Grip",
            "description": "When you get a hand on an enemy, your grip tightens like a steel-jawed vise.",
            "frequency": "At-Will",
            "sources": [
                "Dark",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Int",
                    "lvl"
                ],
                "description": "Intelligence + your level vs. Reflex"
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Int",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "1d10 + Intelligence modifier + two times your level physical damage, and the target is immobilized until the start of your next turn. If you move to a square that isn't adjacent to the target, the immobilization ends."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Be My Battery",
            "description": "You transform energy attacks into reserve energy you use to protect and repair yourself.",
            "frequency": "Encounter",
            "sources": [
                "Dark"
            ],
            "action": "Immediate Interrupt",
            "range": "Personal",
            "target": "Self",
            "trigger": "You take electricity, fire, laser, or radiation damage.",
            "attack": null,
            "hit": null,
            "effect": "You gain immunity to the triggering damage type until the start of your next turn. You also gain temporary hit points equal to 10 + your Intelligence modifier.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Dark Energy Meltdown",
            "description": "You've learned to harness the radioactive leakage from your power plant containment vessel to harm your foes.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Radiation"
            ],
            "action": "Standard Action",
            "range": "Close burst 2",
            "target": "Each Creature in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Int",
                    "lvl"
                ],
                "description": "Intelligence + your level + vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Int",
                    "lvl"
                ],
                "type": "radiation damage",
                "description": "2d10 + Intelligence modifier + your level radiation damage"
            },
            "effect": "The target is slowed until the start of your next turn.",
            "miss": null,
            "special": null
        },
        "page": "36"
    },
    "Cockroach": {
        "name": "Cockroach",
        "description": "You're living proof that your kind can survive nuclear war. You collect stuff that smells good to you but that everyone else calls garbage. Some of that trash gives you valuable experience in salvaging Ancient machinery.",
        "appearance": "You're a huge cockroach! From a distance, your exoskeleton looks li ke a long coat. You've also got antennae, bug eyes, and spindly limbs.",
        "score": "Con",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you gain a +4 bonus to AC until the end of your next turn.",
        "source": "Bio",
        "skill": "Mechanics",
        "traits": [
            {
                "name": "Scurry and Skitter",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Bug Legs",
                "description": "You can climb your speed. You can even climb upside down across horizontal surfaces. You can't attack while climbing."
            }
        ],
        "novicePower": {
            "name": "Eau De Roach",
            "description": "You spit at your foe. The spit is a combination of excrement, scent gland fluid, regurgitated food, and stomach acid. Yep, it's nasty, and it burns your foe and forces it away from you.",
            "frequency": "At-Will",
            "sources": [
                "Acid",
                "Bio"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d8",
                    "Con",
                    "2*lvl"
                ],
                "type": "acid damage",
                "description": "2d8 + Constitution modifier + twice your level acid damage, and you push the target 1 square."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Hard To Kill",
            "description": "When othen count you out, your roach exoskeleton gives you a second chance.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Healing"
            ],
            "action": "Immediate Interrupt",
            "range": "Personal",
            "target": "Self",
            "trigger": "You drop to 0 hit points.",
            "attack": null,
            "hit": null,
            "effect": "You regain hit points equal to 10 + your level.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Opportunistic Meal",
            "description": "You never know when your next meal might be.",
            "frequency": "Encounter",
            "sources": [
                "Acid",
                "Bio"
            ],
            "action": "Free Action",
            "range": "Melee 1",
            "target": "The triggering creature",
            "trigger": "You end your turn adjacent to a prone creature",
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d12",
                    "Con",
                    "2*lvl"
                ],
                "type": "acid damage",
                "description": "2d12 + Constitution modifier + twice your level acid damage."
            },
            "effect": null,
            "miss": "Half Damage",
            "special": null
        },
        "page": "37"
    },
    "Doppelganger": {
        "name": "Doppelganger",
        "description": "Your duplicates aren't just for fighting; they also comfort you when you need an understanding shoulder to lean on.",
        "appearance": "You have a distinctive dark gray or midnight blue skin hue. You sometimes leave afterimages or echoes of yourself as you move.",
        "score": "Int",
        "critical": "When you score a critical hit, the attack deals ldl0 extra damage, and you can use double trouble as a free action.",
        "source": "Dark",
        "skill": "Conspiracy",
        "traits": [
            {
                "name": "Not Really There",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Two Possibilities",
                "description": "Whenever you draw an Alpha Mutation card, draw two cards from the same deck and choose which one to keep. Put the other on the bottom of the deck."
            }
        ],
        "novicePower": {
            "name": "Double Trouble",
            "description": "You create a duplicate of yourself for a short time.",
            "frequency": "At-Will",
            "sources": [
                "Dark"
            ],
            "action": "Standard Action",
            "range": "Personal",
            "target": "Self",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You create a duplicate of yourself in an unoccupied square within 5 squares of you. The duplicate acts in the initiative order directly after you and can take all the actions that you can take, except that it can't use doppelganger powers, Alpha Mutations, or Omega Tech. Its statistics are the same as yours, except that it has only 1 hit point. Your duplicate disappears when it drops to 0 hit points or at the end of your next turn.",
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Two Places At Once",
            "description": "You're literally in two places at once.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Teleportation"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": "Self",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "Choose an unoccupied square within 5 squares of you. You simultaneously occupy that square and your current square. Before the start of your next turn, you can teleport to the chosen square as a free action.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Multiplicity",
            "description": "You surround yourself with a crowd of duplicates, who lash out at and hinder nearby enemies.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Close burst 3",
            "target": "Each enemy in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Int",
                    "lvl"
                ],
                "description": "Intelligence + your level vs. AC"
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Int",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "2dl0 + Intelligence modifier + your level physical damage"
            },
            "effect": "The burst creates a zone that lasts until the end of your next turn. The lone is difficult terrain for your enemies. While within the lone, you and your allies gain cover from attacks.",
            "miss": null,
            "special": null
        },
        "page": "38"
    },
    "Electrokinetic": {
        "name": "Electrokinetic",
        "description": "You like to tell folks that when you were a wee mutant, your mama left you out in the rain and you were struck by lightning. Maybe that's the truth, or maybe you like the strange looks your story inevitably gets.",
        "appearance": "You give off a slightly metallic odor. Harmless sparks jump from you to nearby metal objects. Ancient devices sometimes come to life when you're nearby, only to power down again once you leave.",
        "score": "Wis",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and one ally within 5 squares of the target gains 10 temporary hit points.",
        "save": "+2 Reflex Save",
        "source": "Dark",
        "skill": "Mechanics",
        "traits": [
            {
                "name": "Lightning Reflexes",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Natural Battery",
                "description": "Gain resist 10 electricity.",
                "bonus": {
                    "electricity": 10
                }
            }
        ],
        "novicePower": {
            "name": "Electric Boogaloo",
            "description": "You zap your enemy with an arc of electricity, making your foe jerk and dance around like a spaz.",
            "frequency": "At-Will",
            "sources": [
                "Dark",
                "Electricity"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl"
                ],
                "description": "Wisdom + your level vs. Fortitude."
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Wis",
                    "2*lvl"
                ],
                "type": "electricity damage",
                "description": "1d10 + Wisdom modifier + twice your level electricity damage, and the target takes a -2 penalty to all defenses until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Stand Clear!",
            "description": "You jolt an ally out of whatever funk he's in.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Electricity",
                "Healing"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Ally",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "The target regains hit points equal your Wisdom modifier + your level, or the target can make a saving throw with a bonus equal to your Wisdom modifier.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Lightning Bolt",
            "description": "You uncork a spectacular lightning bolt that fries a foe or supercharges an ally.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Electricity"
            ],
            "action": "Standard Action",
            "range": "Ranged 5",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl"
                ],
                "description": "Wisdom + your level vs. Reflex."
            },
            "hit": {
                "modifiers": [
                    "3d8",
                    "Wis",
                    "2*lvl"
                ],
                "type": "electricity damage",
                "description": "3d8 + Wisdom modifier + twice your level electricity damage."
            },
            "effect": null,
            "miss": "The ally nearest to the target gains temporary hit points equal to 3d8 + your Wisdom modifier.",
            "special": null
        },
        "page": "39"
    },
    "Empath": {
        "name": "Empath",
        "description": "Your touchy-feely powers let you heal your allies or harm or pacily your loes. You also usually know who's having a bad day.",
        "appearance": "You unconsciously mimic the emotional state of creatures around you. If your Friends panic, you echo their terror. When you're with a weepy drunk, you inevitably end up crying into your beer, too.",
        "score": "Cha",
        "critical": "When you score a critical hit, one ally within 5 squares of the target regains hit points equal to twice your level.",
        "source": "Psi",
        "skill": "Insight",
        "traits": [
            {
                "name": "Pacifying Aura",
                "description": "You and each ally adjacent to you never grant combat advantage."
            },
            {
                "name": "Vital Presense",
                "description": "Allies adjacent to you gain a +5 bonus to death saving throws"
            }
        ],
        "novicePower": {
            "name": "Vitality Transfer",
            "description": "First, do no harm - not to anyone you like, anyway.",
            "frequency": "Encounter",
            "sources": [
                "Psi"
            ],
            "action": "Standard Action",
            "range": "Ranged 3",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Cha",
                    "lvl"
                ],
                "description": "Charisma + your level vs. Fortitude"
            },
            "hit": {
                "description": "The target is weakened until the end of your next turn. In addition, you or one ally within 5 squares of you gains temporary hit points equal to your Charisma modifier."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Share Strength",
            "description": "You link the life forces of two allies together, allowing one to use his or her vitality to heal the other.",
            "frequency": "Encounter",
            "sources": [
                "Healing",
                "Psi",
                "Psychic"
            ],
            "action": "Standard Action",
            "range": "Close burst 5",
            "target": "You and one ally in burst, or two allies in burst",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "One target of your choice takes 10 psychic damage. and the other target regains 10 hit points and makes a saving throw.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Zone Of Pacification",
            "description": "You render the creatures around you incapable of fighting.",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Zone"
            ],
            "action": "Standard Action",
            "range": "Close burst 2",
            "target": "Each Creature in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Cha",
                    "lvl"
                ],
                "description": "Charisma + your level vs. Will"
            },
            "hit": {
                "description": "The target is immobilized (save ends)."
            },
            "effect": "The burst creates a zone that lasts until the end of your next turn. Creatures within the zone can't attack.",
            "miss": null,
            "special": null
        },
        "page": "40"
    },
    "Felinoid": {
        "name": "Felinoid",
        "description": "You are descended from the great cats of ancient times.",
        "appearance": "Your furry pelt bears the markings of tiger stripes, leopard spots, or something more fantastic. You might have whiskers, a tail, and large pointed ears. Most importantly, you've got cat-class and you 've got cat-style.",
        "score": "Dex",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you can shift 3 squares as a free action.",
        "source": "Bio",
        "skill": "Stealth",
        "traits": [
            {
                "name": "Catlike Reflexes",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Feline Speed",
                "description": "You gain a +1 bonus to speed while wearing light armor or no armor",
                "bonus": {
                    "speed": 1
                },
                "condition": "light or no armor"
            },
            {
                "name": "Catfall",
                "description": "You take no damage from falls of 50 feet or, less, and you always land on your feet when you fall."
            }
        ],
        "novicePower": {
            "name": "Slashing Claws",
            "description": "You rake at your foe's face with a lightning-fast flurry of razor-sharp claws.",
            "frequency": "At-Will",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Dex",
                    "lvl"
                ],
                "description": "Dexterity + your level vs. Reflex. Make the attack two times."
            },
            "hit": {
                "modifiers": [
                    "1d6",
                    "Dex",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "(One attack hits): ld6 + Dexterity modifier + twice your level physical damage. (Both attacks hit): 2d6+ Dexterity modifier + twice your level physical damage, and the target is blinded until the start of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Pounce",
            "description": "Your springy muscles let you leap a long distance.",
            "frequency": "Encounter",
            "sources": [
                "Bio"
            ],
            "action": "Move Action",
            "range": "Personal",
            "target": "Self",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You jump a number of squares equal to your speed, either vertically or horizontally.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Killing Bite",
            "description": "You bound upon your enemy and knock it to the ground, then you lock your jaws around it.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Dex",
                    "lvl"
                ],
                "description": "Dexterity + your level vs. Reflex"
            },
            "hit": {
                "modifiers": [
                    "3d10",
                    "Dex",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "3d10 + Dexterity modifier + twice your level physical damage."
            },
            "effect": "The target falls prone. If it stands up before the end of your next turn while you are adjacent to it, it takes 10 physical damage.",
            "miss": null,
            "special": "When charging, you can use this power in place of a melee basic attack."
        },
        "page": "41"
    },
    "Giant": {
        "name": "Giant",
        "description": "Your're freakishly big, like Andre the Giant big - we're talking 7 or 8 feet tall and 400 to 500 pounds.",
        "appearance": "You tower over your friends and foes, and your shadow stretches large. Have we mentioned that you're freakishly big?",
        "score": "Str",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you push the target 3 squares.",
        "source": "Bio",
        "skill": "Athletics",
        "traits": [
            {
                "name": "Just Tough",
                "description": "Gain a +2 bonus to Fortitude",
                "bonus": {
                    "fortitude": 2
                }
            },
            {
                "name": "Encumbered Speed",
                "description": "You move your speed, even while wearing heavy armor or carrying a heavy load."
            }
        ],
        "novicePower": {
            "name": "Brickbat",
            "description": "You spin in a circle with your weapon, knocking down a wide swath of foes.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Close burst 1",
            "target": "Each enemy in burst you can see.",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Str",
                    "lvl",
                    "w-acc"
                ],
                "description": "Strength + your level + weapon accuracy vs. AC"
            },
            "hit": {
                "modifiers": [
                    "1[W]",
                    "Str"
                ],
                "type": "physical damage",
                "description": "1[W] + Strength modifier physical damage, and Yyou knock the target prone."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Focused Strength",
            "description": "You flex your muscles, bringing every ounce of strength to bear.",
            "frequency": "Encounter",
            "sources": [
                "Bio"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You gain a +5 power bonus to damage rolls with melee attacks until the start of your next turn.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Hurl Foe",
            "description": "You pick up your foe and toss it like a small toy.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Str",
                    "lvl"
                ],
                "description": "Strength + you level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d12",
                    "Str",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "2d12 + Strength modifier + twice you level physical damage, and you slide the target up to 5 squares."
            },
            "effect": "The target falls prone.",
            "miss": null,
            "special": null
        },
        "page": "42"
    },
    "Gravity Controller": {
        "name": "Gravity Controller",
        "description": "You direct one of the fundamental forces of the universe.",
        "appearance": "You are dense and compact; not short or fat, just solid. When you use your gravity control powers, your skin sparks with purple-black radiance.",
        "score": "Con",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and one creature within 2 squares of the target is immobilized until the end of your next turn.",
        "source": "Dark",
        "skill": "Athletics",
        "traits": [
            {
                "name": "It Fell Sideways!",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Gravity by Choice",
                "description": "You take no damage from falling"
            }
        ],
        "novicePower": {
            "name": "Gravitational Pulse",
            "description": "You unleash a flood gravitons that sward your foe, dragging down its every step.",
            "frequency": "At-Will",
            "sources": [
                "Dark",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Ranged 10",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Con",
                    "2*lvl"
                ],
                "types": "physical damage",
                "description": "1d10 + Constitution modifier + twice your level physical damage, and the target is slowed until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Sideways Gravity",
            "description": "An enemy moves next to you, and you send it away in a flash of quantum radiance.",
            "frequency": "Encounter",
            "sources": [
                "Dark"
            ],
            "action": "Immediate Reaction",
            "range": "Personal",
            "target": "The triggering enemy.",
            "trigger": "An enemy enters a square adjacent to you.",
            "attack": null,
            "hit": null,
            "effect": "You slide the target 6 squares.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Singularity",
            "description": "You focus on a point and create a small black hole that sucks people towards it.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Area burst 2 within 10 squares",
            "target": "Each target in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d8",
                    "Con",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "2d8 + Constitution modifier + twice your level physical damage."
            },
            "effect": "You pull the target 2 squares toward the bursts origin square, and the target falls prone.",
            "miss": null,
            "special": null
        },
        "page": "43"
    },
    "Hawkoid": {
        "name": "Hawkoid",
        "description": "You are mutated bird of prey.",
        "appearance": "You have a large hooked beak, brown plumage, and tough, scaly skin on your talons and wing-claws. You have a wingspan of nearly 15 feet.",
        "score": "Wis",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you can fly your speed as a free action.",
        "source": "Bio",
        "skill": "Perception",
        "traits": [
            {
                "name": "Flight",
                "description": "You have a fly speed equal to your speed. While flying, you take a -2 penalty to attack rolls.",
                "bonus": {
                    "fly": "speed"
                }
            }
        ],
        "novicePower": {
            "name": "Terrifying Shriek",
            "description": "You make a piercing shriek that sends nearby creatures reeling in terror",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Psychic"
            ],
            "action": "Standard Action",
            "range": "Close burst 2",
            "target": "Each creature in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl"
                ],
                "description": "Wisdom + your level vs. Will."
            },
            "hit": {
                "modifiers": [
                    "1d6",
                    "Wis",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "1d6 + Wisdom modifier + your level psychic damage, and you slide the target 1 square."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Flap Away",
            "description": "With a flap of your wings, you quickly move away the foe",
            "frequency": "Encounter",
            "sources": [
                "Bio"
            ],
            "action": "Immediate Reaction",
            "range": "Personal",
            "target": null,
            "trigger": "An enemy enters a square adjacent to you.",
            "attack": null,
            "hit": null,
            "effect": "You fly 2 squares without provoking opportunity attacks. If you don't land at the end of this movement, you fall.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Power Dive",
            "description": "You leap into the air and then plummet into your foe in a devastation attack.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl"
                ],
                "description": "Wisdom + your level vs. AC"
            },
            "hit": {
                "modifiers": [
                    "3d10",
                    "Wis",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "3d10 + Wisdom modifier + twice your level physical damage, and you knock the target prone."
            },
            "effect": "Before making this attack, you can fly your speed",
            "miss": "Half Damage",
            "special": null
        },
        "page": "44"
    },
    "Hypercognitive": {
        "name": "Hypercognitive",
        "description": "You see the future before it happens",
        "appearance": "You have an unsettling calmness and economy of motion. You assess your surroundings with a single glance.",
        "score": "Wis",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you or an ally within 5 squares of you gains a +2 bonus to all defenses until the end of your next turn.",
        "source": "Psi",
        "skill": "Insight",
        "traits": [
            {
                "name": "Forseen Consequences",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Unsurprisable",
                "description": "Gain a +8 bonus to initiative checks.",
                "bonus": {
                    "initiative": 8
                }
            }
        ],
        "novicePower": {
            "name": "Uncanny Strike",
            "description": "With a glance, you assess your foe's weakness and strike to enhance that disadvantage.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Melee or Ranged weapon",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl",
                    "w-acc"
                ],
                "description": "Wisdom + your level + weapon accuracy vs. AC"
            },
            "hit": {
                "modifiers": [
                    "1[W]",
                    "Wis",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "1[W] + Wisdom modifier + your level physical damage, and the target grants combat advantage until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Saw it Coming",
            "description": "You anticipate your enemy's attack and respond accordingly.",
            "frequency": "Encounter",
            "sources": [
                "Psi"
            ],
            "action": "Immediate Interrupt",
            "range": "Personal",
            "target": null,
            "trigger": "An enemy hits you",
            "attack": null,
            "hit": null,
            "effect": "The triggering enemy rerolls the attack and must use the new result.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Exploit Weakness",
            "description": "You perceive a weakness in your foe's defenses and show your allies how to exploit it.",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Melee or Ranged weapon",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl",
                    "w-acc"
                ],
                "description": "Wisdom + your level + weapon accuracy +2 vs. AC"
            },
            "hit": {
                "modifiers": [
                    "1[W]",
                    "Wis",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "1[W] + Wisdom modifier + your level physical damage, and the target gains vulnerable 5 to all damage untli the start of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "page": "45"
    },
    "Mind Breaker": {
        "name": "Mind Breaker",
        "description": "Seething anger coils inside your head like a snake, until you release it upon an enemy.",
        "appearance": "Your head is bigger than normal, and you have a tendency towards baldness.",
        "score": "Cha",
        "critcal": "When you score a critical hit, the attack deals 1d10 extra damage, and the target takes ongoing 5 psychic damage (save ends).",
        "source": "Psi",
        "skill": "Interaction",
        "traits": [
            {
                "name": "Unbreakable Mind",
                "description": "Gain a +2 bonus to Will",
                "bonus": {
                    "will": 2
                }
            },
            {
                "name": "Group Telepathy",
                "description": "While you're conscious, you and each ally within 10 squares of you can mentally communicate with one another."
            }
        ],
        "novicePower": {
            "name": "Psychic Assault",
            "description": "You project a bolt of mental energy that slams into your foe's psyche like a sucker punch.",
            "frequency": "At-Will",
            "sources": [
                "Psi",
                "Psychic"
            ],
            "action": "Standard Action",
            "range": "Ranged 20",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Cha",
                    "lvl"
                ],
                "description": "Charisma + your level vs. Will"
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Cha",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "1d10 + Charisma modifier + twice your level psychic damage."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Psychic Shield",
            "description": "You surround yourself with a wall of pure fury that makes your enemies want to not attack you.",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Psychic"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "Until the end of your next turn, you gain a +3 bonus to all defenses.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Mind Break",
            "description": "You unleash a mental onslaught upon your enemy, boring a psychic hole into its mind.",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Psychic"
            ],
            "action": "Standard Action",
            "range": "Ranged 10",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Cha",
                    "lvl"
                ],
                "description": "Charisma + your level vs. Will"
            },
            "hit": {
                "modifiers": [
                    "3d10",
                    "Cha",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "3d10 + Charisma modifier + twice your level psychical damage."
            },
            "effect": "The target gains vulnerable 5 psychic until the end of your next turn",
            "miss": null,
            "special": null
        },
        "page": "46"
    },
    "Mind Coercer": {
        "name": "Mind Coercer",
        "description": "You subtly manipulate the minds of others",
        "appearance": "Enlarged, dilated blood vessels in your eyes give them a red cast, which becomes more intense when you use your powers.",
        "score": "Cha",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you slide the target 3 squares.",
        "source": "Psi",
        "skill": "Interaction",
        "traits": [
            {
                "name": "Labyrinthine Mind",
                "description": "Gain a +2 bonus to Will"
            },
            {
                "name": "Group Telepathy",
                "description": "While you're conscious, you and each ally within 10 squares of you can mentally communicate with one another."
            }
        ],
        "novicePower": {
            "name": "Mental Push",
            "description": "You give your foe a mental push. Before it knows what's happening, it attacks its ally.",
            "frequency": "At-Will",
            "sources": [
                "Psi",
                "Psychic"
            ],
            "action": "Standard Action",
            "range": "Ranged 10",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Cha",
                    "lvl"
                ],
                "description": "Charisma + your level vs. Will"
            },
            "hit": {
                "modifiers": [
                    "Cha"
                ],
                "type": "physical damage",
                "description": "Charisma modifier psychic damage, and the target makes a basic attack as a free action against a creature of your choice."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Nothing to See Here",
            "description": "You convince your foes that you're not important enough to worry about.",
            "frequency": "Encounter",
            "sources": [
                "Psi"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You become invisible to all enemies until the end of your next turn or until you attack.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Your Thoughts are My Thoughts",
            "description": "You're a puppet master and you make your foe dance like a puppet. Dance!",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Psychic"
            ],
            "action": "Standard Action",
            "range": "Ranged 10",
            "target": "One Creature",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "Charisma modifier psychic damage, and you slide the target a number of squares equal to its speed. The target then makes a basic attack against a creature of your choice, with a +4 power bonus to the attack roll and the damage roll.",
            "miss": null,
            "special": null
        },
        "page": "47"
    },
    "Plant": {
        "name": "Plant",
        "description": "You are a sentient, mobile plant.",
        "appearance": "You might have a long, tough vines for limbs, a tangle of woody stems for your trunk, and a bulblike brain hidden in the middle of your body.",
        "score": "Con",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and the target is immobilized until the start of your next turn.",
        "source": "Bio",
        "skill": "Nature",
        "traits": [
            {
                "name": "Hardened Bark",
                "descrpition": "Gain a +2 bonus to Fortitude",
                "bonus": {
                    "fortitude": 2
                }
            },
            {
                "name": "Vulnerable to Fire",
                "description": "Whenever you take fire damage, you take 5 extra fire damage."
            }
        ],
        "novicePower": {
            "name": "Lashing Creepers",
            "description": "You flail at nearby foes with thorn-covered limbs.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Close burst 2",
            "target": "Each enemy in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Reflex"
            },
            "hit": {
                "modifiers": [
                    "1d6",
                    "Con",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "1d6 + Constitution + your level physical damage, and the target is slowed until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Instant Grove",
            "description": "You cause a small thicket of plants to sprout from the ground around you, slowing your enemies.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Zone"
            ],
            "action": "Move Action",
            "range": "Close burst 3",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "The burst creates a zone that lasts until the end of your next turn. The zone is difficult terrain for your enemies. While the zone lasts, you're immobilized and immune to forced movement, you have cover from all attacks, and your melee attack range increases by 2.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Insidious Pollen",
            "description": "You grow a small, flowering bloom and puff hallucinogenic pollen into an enemy's face.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Poison"
            ],
            "action": "Standard Action",
            "range": "Melee 2",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Will"
            },
            "hit": {
                "modifiers": [
                    "1d8",
                    "Con",
                    "2*lvl"
                ],
                "type": "poison damage",
                "description": "1d8 + Constitution modifier + twice your level poison damage, and you dominate the target until the end of your next turn."
            },
            "effect": null,
            "miss": "The target takes a -5 penalty to attack rolls against you until the end of your next turn.",
            "special": null
        },
        "page": "48"
    },
    "Pyrokinetic": {
        "name": "Pyrokinetic",
        "description": "You like to start fires.",
        "appearance": "Your hair is flame, your touch can ingnite a blaze, and your breath is an all-consuming inferno. Where you walk, you leave fine ash and sooty footprints behind.",
        "score": "Wis",
        "critical": "When you score a critical hit, the target gains ongoing 10 fire damage (save ends).",
        "source": "Psi",
        "skill": "Interaction",
        "traits": [
            {
                "name": "Fire Resistance",
                "description": "Gain 10 resist fire",
                "bonus": {
                    "fire": 10
                }
            },
            {
                "name": "Fiery Aura",
                "description": "Whenever a creature ends its tirn adjacent to you, it takes 5 fire damage."
            }
        ],
        "novicePower": {
            "name": "Fiery Flare",
            "description": "You fan the flames of the fiery aura.",
            "frequency": "At-Will",
            "sources": [
                "Fire",
                "Psi"
            ],
            "action": "Standard Action",
            "range": "Ranged 5",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl"
                ],
                "description": "Wisdom + your level vs. Reflex."
            },
            "hit": {
                "modifiers": [
                    "2d8",
                    "Wis",
                    "2*lvl"
                ],
                "type": "fire damage",
                "description": "2d8 + Wisdom modifier + twice your level fire damage."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Blazing Rocket",
            "description": "You propel yourseld into the air on a pillar of fire.",
            "frequency": "Encounter",
            "sources": [
                "Psi"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You gain a fly speed of 10 until the end of your next turn. If you don't land before this effect ends, you fall.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Flaming Breath",
            "description": "You breathe out, unleashing a tide of flame.",
            "frequency": "Encounter",
            "sources": [
                "Fire",
                "Psi"
            ],
            "action": "Standard Action",
            "range": "Close blast 5",
            "target": "Each creature in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Wis",
                    "lvl"
                ],
                "description": "Wisdom + your level vs. Reflex."
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Wis",
                    "lvl"
                ],
                "type": "fire damage",
                "description": "2d10 + Wisdom modifier + your level fire damage."
            },
            "effect": null,
            "miss": "Half damage",
            "special": null
        },
        "page": "49"
    },
    "Radioactive": {
        "name": "Radioactive",
        "description": "You channel the destructive forces that created Gamma Terra.",
        "appearance": "You give off a faint glow, usually red, which intensifies when you use your radioactive powers.",
        "score": "Con",
        "critical": "When you score a critical hit, the target is weakened until the end of your next turn.",
        "source": "Dark",
        "skill": "Science",
        "traits": [
            {
                "name": "You've had Worse",
                "description": "Gain a +2 bonus to Fortitude",
                "bonus": {
                    "fortitude": 2
                }
            },
            {
                "name": "Gamma Tolerance",
                "description": "Gain resist 15 radiation",
                "bonus": {
                    "radiation": 15
                }
            }
        ],
        "novicePower": {
            "name": "Radiation Eyes",
            "description": "Your eyes glow cherry red as you loose a jagged bolt of ionizing radiation at your foe.",
            "frequency": "At-Will",
            "sources": [
                "Dark",
                "Radiation"
            ],
            "action": "Standard Action",
            "range": "Ranged 5",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Con",
                    "2*lvl"
                ],
                "type": "radiation damage",
                "description": "1d10 + Constitution modifier + twice your level radiation damage, and the target takes a -2 penalty to all defenses until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Hawking Portal",
            "description": "You bore tunnels though space with a pulse of invigorating radiation.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Radiation",
                "Teleportation"
            ],
            "action": "Move Action",
            "range": "Close burst 10",
            "target": "You and one or two allies in burst",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "Each target teleports to any other square in the burst, then regains hit points equal to 5 plus your level.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Gamma Eruption",
            "description": "You release a narrow beam of intense radiation at your foe.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Radiation"
            ],
            "action": "Standard Action",
            "range": "Ranged 5",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Con",
                    "lvl"
                ],
                "description": "Constitution + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Con",
                    "2*lvl"
                ],
                "type": "radiation damage",
                "description": "2d10 + Constitution modifier + twice your level radiation damage"
            },
            "effect": "The target is weakened until the end of your next turn.",
            "miss": null,
            "special": null
        },
        "page": "50"
    },
    "Rat Swarm": {
        "name": "Rat Swarm",
        "description": "You're a consciousness distributed across a swarm of squeaking vermin.",
        "appearance": "Your body is composed of hundreds of small beings that swarm in a single square, though you usually cluster into a shape suitable for wearing clothing and wielding equipment and weapons using your many tiny hands.",
        "score": "Dex",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and the target takes a -2 penalty to attack rolls until the end of your next turn.",
        "source": "Bio",
        "skill": "Stealth",
        "traits": [
            {
                "name": "Swarm Defense",
                "description": "Gain resist 5 to all damage against melee and ranged attacks, and vulnerable 5 to damage from area and close attacks."
            },
            {
                "name": "Crawling Mass",
                "description": "You can't be knocked prone."
            }
        ],
        "novicePower": {
            "name": "Swarm!",
            "description": "You swarm across your foe, biting it dozens of times as you tangle its limbs.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Dex",
                    "lvl"
                ],
                "description": "Dexterity + your level vs. Reflex"
            },
            "hit": {
                "modifiers": [
                    "1d8",
                    "Dex",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "1d8 + Dexterity modifier + twice your level physical damage, and the target is immobilized until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Cover More Ground",
            "description": "You disperse across the ground and quickly reform in a tactically advantageous spot.",
            "frequency": "Encounter",
            "sources": [
                "Bio"
            ],
            "action": "Move Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You shift a number of squares equal to your Dexterity modifier.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Death by a Thousand Bites",
            "description": "You swarm around your foe, delivering a multitude of tiny bites that all result in bleeding wounds.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Dex",
                    "lvl"
                ],
                "description": "Dexterity + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Dex"
                ],
                "type": "physical damage",
                "description": "2d10 + your Dexterity modifier physical damage"
            },
            "effect": "At the start of your next turn, the target takes physical damage equal to three times your level.",
            "miss": null,
            "special": null
        },
        "page": "51"
    },
    "Seismic": {
        "name": "Seismic",
        "description": "You're a creature of earth and stone.",
        "appearance": "Your skin is composed of a tough, organic rubble several inches thick that has a brown, orange, or dull red coloration.",
        "score": "Str",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you knock the target and each enemy adjacent to the target prone.",
        "source": "Dark",
        "skill": "Athletics",
        "traits": [
            {
                "name": "Armored Skin",
                "description": "Gain resist 5 physical",
                "bonus": {
                    "physical": 5
                }
            },
            {
                "name": "Ponderous",
                "description": "Take a -1 penalty to speed.",
                "bonus": {
                    "speed": -1
                }
            }
        ],
        "novicePower": {
            "name": "Seismic Stomp",
            "description": "You stomp on the ground, sending a shock wave of energy into foes around you.",
            "frequency": "At-Will",
            "sources": [
                "Dark",
                "Sonic"
            ],
            "action": "Standard Action",
            "range": "Close burst 1",
            "target": "Each creature in burst",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Str",
                    "lvl"
                ],
                "description": "Strength + you level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "1d6",
                    "Str",
                    "lvl"
                ],
                "type": "sonic damage",
                "description": "1d6 + Strength modifier + your level sonic damage, and you knock the target prone."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Ground Anchor",
            "description": "You merge with the ground to keep from being knocked over or moved against your will.",
            "frequency": "Encounter",
            "sources": [
                "Dark"
            ],
            "action": "Immediate Interrupt",
            "range": "Personal",
            "target": null,
            "trigger": "You are hit by an attack that pulls you, pushes you, slides you, or knocks you prone.",
            "attack": null,
            "hit": null,
            "effect": "You aren't pulled, pushed, slid, or knocked prone by the attack.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Clobberin' Time",
            "description": "You clench a huge, rocky fist and punch the punk's lights out.",
            "frequency": "Encounter",
            "sources": [
                "Dark",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Str",
                    "lvl"
                ],
                "description": "Strength + you level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Str",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "2d10 + Strength modifier + twice your level physical damage, and you push the target 3 squares."
            },
            "effect": "The target falls prone",
            "miss": null,
            "special": null
        },
        "page": "52"
    },
    "Speedster": {
        "name": "Speedster",
        "description": "Everyone moves like molasses compared to you.",
        "appearance": "You are long-limbed and slim, and you're always hungry due to your heightened metabolism.",
        "score": "Dex",
        "critical": "When you score a critical hit, you can make a basic attack as a free action.",
        "source": "Psi",
        "skill": "Acrobatics",
        "traits": [
            {
                "name": "Just a Blur",
                "description": "Gain a +2 bonus to Reflex",
                "bonus": {
                    "reflex": 2
                }
            },
            {
                "name": "Blinding Speed",
                "description": "Gain a +2 bonus to speed while wearing light armor or no armor.",
                "bonus": {
                    "speed": 2
                },
                "condition": "light or no armor"
            }
        ],
        "novicePower": {
            "name": "Quick Attack",
            "description": "You move and strike and move before your foe even knows it's being attacked.",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Melee or Ranged weapon",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Dex",
                    "lvl",
                    "w-acc"
                ],
                "description": "Dexterity + your level + weapon accuracy vs. AC"
            },
            "hit": {
                "modifiers": [
                    "1[W]",
                    "Dex",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "1[W] + Dexterity modifier + you level physical damage, and you shift 2 squares."
            },
            "effect": "You can shift 2 squares before the attack.",
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Whizzer",
            "description": "You become a blur as you race across the ground.",
            "frequency": "Encounter",
            "sources": [
                "Psi"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You shift your speed.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Swift Pummel",
            "description": "You attack so quickly that your foe can't tell where one strike leaves off and the next begins.",
            "frequency": "Encounter",
            "sources": [
                "Psi",
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Dex",
                    "lvl",
                    "2"
                ],
                "description": "Dexterity + your level + weapon accuracy + 2 vs. AC. Make the attack 4 times."
            },
            "hit": {
                "modifiers": [
                    "1[W]"
                ],
                "description": "1[W] physical damage."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "page": "53"
    },
    "Telekinetic": {
        "name": "Telekinetic",
        "description": "You use the power of your mind to reshape the world around you.",
        "appearance": "You can hide your talent, but there are always telltale signs. Small objects near you sometimes levitate, furniture rattles, and doors open.",
        "score": "Int",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and you slide one creature within 5 squares of you 2 squares.",
        "source": "Psi",
        "skill": "Mechanics",
        "traits": [
            {
                "name": "Telekinetic Shield",
                "description": "While you're conscious, you gain a +2 bonus to AC and Reflex.",
                "bonus": {
                    "AC": 2,
                    "reflex": 2
                }
            },
            {
                "name": "Telekinetic Reach",
                "description": "You can manipulate unattended objects up to 5 squares away from you as if you were using them yourself. For example, you can open a door as a minor action or swing a club as a standard action. You take a -2 penalty to attack rolls of attacks you make using this trait."
            }
        ],
        "novicePower": {
            "name": "Telekinetic Wave",
            "description": "You overwhelm your foes with a surge of telekinetic energy.",
            "frequency": "At-Will",
            "sources": [
                "Force",
                "Psi"
            ],
            "action": "Standard Action",
            "range": "Close blast 5",
            "target": "Each creature in blast",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Int",
                    "lvl"
                ],
                "description": "Intelligence + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "1d6",
                    "Int",
                    "lvl"
                ],
                "type": "force damage",
                "description": "1d6 + Intelligence modifier + your level force damage, and you push the target 3 squares."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Chess Pieces",
            "description": "You move your allies out of harm's way...or into it.",
            "frequency": "Encounter",
            "sources": [
                "Psi"
            ],
            "action": "Minor Action",
            "range": "Close burst 5",
            "target": "Each ally in burst",
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You slide the target 3 squares to another square in the burst.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Telekinetic Clutch",
            "description": "You seize an enemy in a telekinetic grasp and slowly crush it.",
            "frequency": "Encounter",
            "sources": [
                "Force",
                "Psi"
            ],
            "action": "Standard Action",
            "range": "Ranged 10",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Int",
                    "lvl"
                ],
                "description": "Intelligence + your level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Int",
                    "2*lvl"
                ],
                "type": "force damage",
                "description": "1d10 + Intelligence modifier + twice your level force damage, and the target is immobilized and takes ongoing 10 force damage (save ends both)."
            },
            "effect": null,
            "miss": "Half damage, and the target is slowed (save ends).",
            "special": null
        },
        "page": "54"
    },
    "Yeti": {
        "name": "Yeti",
        "description": "You are Bigfoot.",
        "appearance": "A shaggy pelt of fur covers you. Yetis are usually dirty white in color, but in Gamma Terrel, pelts of fantastic patterns and huesaren't uncommon. You stand 7 feet tall when you're upright, although you sometimes go on all fours.",
        "score": "Str",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and the target takes a -5 penalty to attack rolls against any creature other than you until the end of your next turn.",
        "source": "Bio",
        "skill": "Nature",
        "traits": [
            {
                "name": "Hard to Hurt",
                "description": "Gain a +1 bonus to AC",
                "bonus": {
                    "AC": 1
                }
            },
            {
                "name": "Cold Resistance",
                "description": "Gain resist 10 cold",
                "bonus": {
                    "cold": 10
                }
            }
        ],
        "novicePower": {
            "name": "Big Claws",
            "description": "You rake on enemy with your powerful claws.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Minor Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Str",
                    "lvl",
                    "2"
                ],
                "description": "Strength + your level + 2 vs. AC"
            },
            "hit": {
                "modifiers": [
                    "1d10",
                    "Str",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "1d10 + Strength modifier + twice your level physical damage, and the target is slowed until the end of your next turn."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Yeti Rage",
            "description": "When you get hurt, you get mad.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Healing"
            ],
            "action": "Immediate Reaction",
            "range": "Personal",
            "target": null,
            "trigger": "An enemy damages you with an attack.",
            "attack": null,
            "hit": null,
            "effect": "You regain hit points equal to 3 + your level. Until the end of your next turn, you gain a +2 power bonus to attack rolls against the triggering enemy.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Yeti Mauling",
            "description": "You overpower your enemy with your rending claws and then drag it off.",
            "frequency": "Encounter",
            "sources": [
                "Bio",
                "Physical"
            ],
            "action": "Standard Action",
            "range": "Melee 1",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "Str",
                    "lvl"
                ],
                "description": "Strength + you level vs. Fortitude"
            },
            "hit": {
                "modifiers": [
                    "2d10",
                    "Str",
                    "2*lvl"
                ],
                "type": "physical damage",
                "description": "2d10 + Strength modifier + twice your level physical damage, and you shift 3 squares. You then slide the target 5 squares to any unoccupied square adjacent to you."
            },
            "effect": "Before the attack, the target falls prone.",
            "miss": null,
            "special": null
        },
        "page": "55"
    },
    "Engineered Human": {
        "name": "Engineered Human",
        "description": "Sure, you're human. But you're smarter, stronger, and tougher than any ancient who ever drove to the corner store for a six-pack.",
        "appearance": "Most engineered humans possess heroic proportions and dashing good looks, because the genetic scientists who cooked the DNA generations ago were trying to build a better human ... and, well, why not?",
        "score": "Int",
        "critical": "When you score a critical hit, the attack deals 1d10 extra damage, and the target grants combat advantage until the end of your next turn .",
        "source": null,
        "skill": "Interaction, Science",
        "traits": [
            {
                "name": "Engineered Resilience",
                "description": "Gain a +1 bonus to Fortitude, Reflex, and Will.",
                "bonus": {
                    "fortitude": 1,
                    "reflex": 1,
                    "will": 1
                }
            },
            {
                "name": "Tech Affinity",
                "description": "Gain a +2 bonus to checks to see if your Omega Tech burns out."
            }
        ],
        "novicePower": {
            "name": "Bold Attack",
            "description": "Your instinct for violence inspires your allies 10 follow your lead.",
            "frequency": "At-Will",
            "sources": [
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Melee or Ranged weapon",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "lvl",
                    "4",
                    "w-acc"
                ],
                "description": "Your level + 4 + weapon accuracy vs. AC"
            },
            "hit": {
                "modifiers": [
                    "1[W]",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "1[W] + your level physical damage, and you choose an ally within 5 squares of you . That ally makes a basic attack as a free action."
            },
            "effect": null,
            "miss": null,
            "special": null
        },
        "utilityPower": {
            "name": "Tough as Nails",
            "description": "You're tougher than you look.",
            "frequency": "Encounter",
            "sources": [
                "Healing"
            ],
            "action": "Minor Action",
            "range": "Personal",
            "target": null,
            "trigger": null,
            "attack": null,
            "hit": null,
            "effect": "You regain hit points equal to 5 + your level and make a saving throw with a +5 bonus.",
            "miss": null,
            "special": null
        },
        "expertPower": {
            "name": "Tactical Assault",
            "description": "As you attack, you tell your allies where to go 50 they can get in on the fun, too.",
            "frequency": "Encounter",
            "sources": [
                "Physical",
                "Weapon"
            ],
            "action": "Standard Action",
            "range": "Melee or Ranged weapon",
            "target": "One Creature",
            "trigger": null,
            "attack": {
                "modifiers": [
                    "lvl",
                    "4",
                    "w-acc"
                ],
                "description": "Your level + 4 + weapon accuracy vs. AC"
            },
            "hit": {
                "modifiers": [
                    "3[W]",
                    "Int",
                    "lvl"
                ],
                "type": "physical damage",
                "description": "3[W] + Intelligence modifier + your level physical damage."
            },
            "effect": "Before the attack, each ally within 10 squares of you can shift 2 squares as a free action.",
            "miss": null,
            "special": null
        },
        "page": "55"
    }})
});