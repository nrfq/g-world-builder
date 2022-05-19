<script setup>
    import PowerCard from '../PowerCard.vue';
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins, utilities } = storeToRefs(buildStore);
</script>
<template>
<el-row justify="center">
        <el-col :span="12">
            <el-select v-model="utilities[0]">
                <el-option
                    :label="originTable[origins[0]].utilityPower.name"
                    :value="0"
                />
                <el-option 
                    :label="originTable[origins[1]].utilityPower.name"
                    :value="1"
                />
            </el-select>
            <PowerCard :power="originTable[origins[utilities[0]]].utilityPower" :type="origins[[utilities[0]]] + ' Utility'" />
        </el-col>
    </el-row>
</template>