<script setup>
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("../../assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins, criticals, utilities } = storeToRefs(buildStore);
</script>

<template>
    <el-row>
        <el-col :span="12">
            <h2>Origin 1</h2>
            <el-select v-model="origins[0]">
                <el-option
                    v-for="origin in originTable"
                    :key="origin.name"
                    :label="origin.name"
                    :value="origin.name"
                    :disabled="(origin.name == origins[1])"
                />
            </el-select>
            <p>{{originTable[origins[0]].description}}</p>
            <p>{{criticals[0]}}</p>
            <p>{{utilities[0]}}</p>
        </el-col>

        <el-col :span="12">
            <h2>Origin 2</h2>
            <el-select v-model="origins[1]">
                <el-option
                    v-for="origin in originTable"
                    :key="origin.name"
                    :label="origin.name"
                    :value="origin.name"
                    :disabled="(origin.name == origins[0])"
                />
            </el-select>
            <p>{{originTable[origins[1]].description}}</p>
            <p>{{criticals[1]}}</p>
            <p>{{utilities[1]}}</p>
        </el-col>
    </el-row>
</template>