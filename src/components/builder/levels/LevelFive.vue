<script setup>
    import PowerCard from '../PowerCard.vue';
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins } = storeToRefs(buildStore);

    let power = originTable[origins.value[0]].expertPower;
    let type = origins.value[0] + " Expert";
</script>

<template>
    <PowerCard :power="power" :type="type"/>
</template>