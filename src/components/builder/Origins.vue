<script setup>
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    import PowerCard from "./PowerCard.vue";
    let originTable = require("../../assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins, criticals, utilities } = storeToRefs(buildStore);

    const gutter = 20;
</script>

<template>
    <el-row :gutter="gutter">
        <el-col :span="12">
            <h2>Primary Origin</h2>
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
            <h4>Primary Traits</h4>
            <el-table :data="originTable[origins[0]].traits" border style="width: 100%">
                <el-table-column prop="name" label="Name"/>
                <el-table-column prop="description" label="Effect"/>
            </el-table>
            <p>{{utilities[0]}}</p>
        </el-col>

        <el-col :span="12">
            <h2>Secondary Origin</h2>
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
            <h4>Secondary Traits</h4>
            <el-table :data="originTable[origins[1]].traits" border style="width: 100%">
                <el-table-column prop="name" label="Name"/>
                <el-table-column prop="description" label="Effect"/>
            </el-table>
            <p>{{utilities[1]}}</p>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <h3>Level 1</h3>
        </el-col>
    </el-row>
    <el-row :gutter="gutter">
        <el-col :span="12">
            <PowerCard :power="originTable[origins[0]].novicePower" :type="origins[0]+' Novice'"/>
        </el-col>
        <el-col :span="12">
            <PowerCard :power="originTable[origins[1]].novicePower" :type="origins[1]+' Novice'"/>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <h3>Level 2</h3>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <el-select v-model="criticals[0]">
                <el-option
                    :label="origins[0] + ' Critical'"
                    :value="0"
                />
                <el-option 
                    :label="origins[1] + ' Critical'"
                    :value="1"
                />
            </el-select>
            <el-card>
                {{originTable[origins[criticals[0]]].critical}}
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped>
    h3 {
        margin-top: 5px;
    }

</style>