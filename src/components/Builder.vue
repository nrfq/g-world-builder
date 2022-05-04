<script setup>
    // import { reactive } from "vue" 
    import { useCharacterStore } from "@/stores/characterStore"
    import { storeToRefs } from "pinia"
    const charStore = useCharacterStore()
    const { name } = storeToRefs(charStore)
    // const state = reactive({ tempName: name})
    // function changeName(name){
    //     console.log("changed")
    //     charStore.$patch({
    //         name: name
    //     })
    // }
</script>

<template>
    <div>
        <h1>Builder</h1>
        <input v-model="name">
        <p>{{name}}</p>
        <router-link to="/character">Character</router-link>
    </div>
</template>