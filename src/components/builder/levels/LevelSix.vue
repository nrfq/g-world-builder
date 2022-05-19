<script setup>
    import PowerCard from '../PowerCard.vue';
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins, utilities } = storeToRefs(buildStore);

    let power = originTable[origins.value[utilities.value[1]]].utilityPower;
</script>
<template>
    <el-select v-model="utilities[1]">
        <el-option
            :label="originTable[origins[0]].utilityPower.name"
            :value="0"
            :disabled="utilities[0] === 0"
        />
        <el-option 
            :label="originTable[origins[1]].utilityPower.name"
            :value="1"
            :disabled="utilities[0] === 1"
        />
    </el-select>
    <div v-if="utilities[0]===utilities[1]">Warning: This feature has already been selected at a lower level.</div>
    <PowerCard :power="power" :type="origins[[utilities[1]]] + ' Utility'" />
</template>