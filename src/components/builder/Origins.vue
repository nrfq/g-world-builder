<script setup>
import { reactive } from 'vue'

    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    import LevelOne from './levels/LevelOne.vue';
    import LevelTwo from './levels/LevelTwo.vue';
    import LevelThree from './levels/LevelThree.vue';
    import LevelFour from './levels/LevelFour.vue';
    import LevelFive from './levels/LevelFive.vue';
    import LevelSix from './levels/LevelSix.vue';
    import LevelSeven from './levels/LevelSeven.vue';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins } = storeToRefs(buildStore);
    const gutter = 20;

    const state = reactive({ activeLevels: [] })

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
        </el-col>
    </el-row>
    <el-button @click="() => {
        if(state.activeLevels.length != 0){
            state.activeLevels = []
        }
        else{
            state.activeLevels = Array.from(new Array(10), (x, i) => `${i+1}`)
        }}">
        <span v-if="state.activeLevels.length != 0">Collapse All</span>
        <span v-else>Expand All</span>
    </el-button>
    <el-collapse v-model="state.activeLevels" class="level-holder">
        <el-collapse-item title="Level 1" name="1">
            <LevelOne />
        </el-collapse-item>
        <el-collapse-item title="Level 2" name="2">
            <LevelTwo />
        </el-collapse-item>
        <el-collapse-item title="Level 3" name="3">
            <LevelThree />
        </el-collapse-item>
        <el-collapse-item title="Level 4" name="4">
            <LevelFour/>
        </el-collapse-item>
        <el-collapse-item title="Level 5" name="5">
            <LevelFive />
        </el-collapse-item>
        <el-collapse-item title="Level 6" name="6">
            <LevelSix />
        </el-collapse-item>
        <el-collapse-item title="Level 7" name="7">
            <LevelSeven />
        </el-collapse-item>
    </el-collapse>
</template>

<style scoped>
    h3 {
        margin-top: 5px;
    }
</style>