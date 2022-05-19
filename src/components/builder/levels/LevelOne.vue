<script setup>
    import PowerCard from "../PowerCard.vue"
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins } = storeToRefs(buildStore);
</script>

<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <PowerCard :power="originTable[origins[0]].novicePower" :type="origins[0]+' Novice'"/>
        </el-col>
        <el-col :span="12">
            <PowerCard :power="originTable[origins[1]].novicePower" :type="origins[1]+' Novice'"/>
        </el-col>
    </el-row>
    <!-- <p>Test</p> -->
</template>