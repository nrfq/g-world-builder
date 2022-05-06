import { defineStore } from "pinia";

/********************************************************************************
Same as characterStore, but this will be the one with fields that are edited before
it is saved to the actual character.
************************************************************************************/ 
export const useBuilderStore = defineStore('builder', {
    state: () => ({
        // string
        // the default string is a litmus test,
        // if it appears anywhere in the app there's a bug
        name: "Should never see this",
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
        origins: [null, null],
        // chosen criticals, where index 0 is the level 2 critical and index 1 is the level 6 critical
        // each element is an int of 0 or 1, which represents the critical from their first or second origin respectively
        criticals: [null, null],
        // same as criticals, but index 0 is level 3 utility and index 1 is level 7 utility
        utilities: [null, null],
        // base ability scores (3d6) in order: str, dex, wis, con, int, cha
        baseAbilities: [null, null, null, null, null, null],

    })
})