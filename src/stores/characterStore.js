import { defineStore } from "pinia";

/********************************************************************************
This store represents the absolute base information needed to store a character.
From these values, every other value can be determined by referencing the originsTable
programatically. I think it's best to keep it simple, that way we can always make changes to the originsTable and
know that all characters will reflect the changes.
This is similar to the technique used by pathbuilder but obviously that has a lot more to track.
We will likely eventually need to add fields for equipment and custom bonuses

I added additional fields for flavor, like alignment
************************************************************************************/ 
export const useCharacterStore = defineStore('character', {
    state: () => ({
        // string
        name: "New Name",
        // int
        level: 1,
        xp: 0,
        // Prnouns, any user inputted string
        pronouns: "",
        // Alignment, any user inputted string
        alignment: "",
        // Any user inputted string
        // Will use the defaults from origins if randomly generated
        description: "",
        // character origins represented by strings, first origin is index 0, second origin is index 1
        origins: ["Android", "Cockroach"],
        // chosen criticals, where index 0 is the level 2 critical and index 1 is the level 6 critical
        // each element is an int of 0 or 1, which represents the critical from their first or second origin respectively
        criticals: [null, null],
        // same as criticals, but index 0 is level 3 utility and index 1 is level 7 utility
        utilities: [null, null],
        // base ability scores (3d6) in order: str, dex, wis, con, int, cha
        baseAbilities: [null, null, null, null, null, null],

    })
})