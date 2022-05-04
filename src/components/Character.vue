<script setup>
    import { useCharacterStore } from "@/stores/characterStore"
    import { storeToRefs } from "pinia"
    const charStore = useCharacterStore()
    const { name, level } = storeToRefs(charStore)
</script>

<template>
    <p>{{name}}, level: {{level}}</p>
</template>