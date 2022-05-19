<script setup>
    import { useBuilderStore } from '@/stores/builderStore';
    import { storeToRefs } from 'pinia';
    let originTable = require("@/assets/originTable.json")
    const buildStore = useBuilderStore();
    const { origins, criticals } = storeToRefs(buildStore);
</script>

<template>
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