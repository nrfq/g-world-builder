<script setup>
    import { useCharacterStore } from "@/stores/characterStore"
    import { storeToRefs } from "pinia"
    const charStore = useCharacterStore()
    const { name } = storeToRefs(charStore)
</script>

<template>
    <p>{{name}}</p>
</template>