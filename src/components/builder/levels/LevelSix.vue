<script setup>
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins, criticals } = storeToRefs(buildStore);
</script>

<template>
    <el-select v-model="criticals[1]">
        <el-option
            :label="origins[0] + ' Critical'"
            :value="0"
            :disabled="criticals[0] === 0"
        />
        <el-option 
            :label="origins[1] + ' Critical'"
            :value="1"
            :disabled="criticals[0] === 0"
        />
    </el-select>
    <div v-if="criticals[0]===criticals[1]">Warning: This feature has already been selected at a lower level.</div>
    <el-card>
        {{originTable[origins[criticals[1]]].critical}}
    </el-card>
</template>