<script setup>
    import { useBuilderStore } from '@/stores/builderStore';
    const buildStore = useBuilderStore();
</script>

<template>
    <el-row>
        <el-col :span="12">
            <h2>Origin 1</h2>
            <span>{{buildStore.origins[0]}}</span>
        </el-col>

        <el-col :span="12">
            <h2>Origin 2</h2>
            <span>{{buildStore.origins[1]}}</span>
        </el-col>
    </el-row>
</template>