<script setup>
    import { useBuilderStore } from "@/stores/builderStore";
    const buildStore = useBuilderStore();
</script>

<template>
    <el-row justify="center">
        <el-col :span="8">
            <label for="level">Level</label>
            <el-input-number
              id="level"
              :min="1"
              v-model="buildStore.level"
              placeholder="Level"
            />
        </el-col>
        <el-col :span="8">
            <label for="xp">XP</label>
            <el-input-number :min="0" v-model="buildStore.xp" placeholder="XP" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <label for="charname">Name</label>
            <el-input
              class="text-input"
              id="charName"
              v-model="buildStore.name"
              placeholder="Name"
            />
        </el-col>
        <el-col :span="8">
            <label for="">Alignment</label>
            <el-input
              class="text-input"
              v-model="buildStore.alignment"
              placeholder="Alignment"
            />
        </el-col>
        <el-col :span="8">
            <label for="">Pronouns</label>
            <el-input
              class="text-input"
              v-model="buildStore.pronouns"
              placeholder="Pronouns"
            />
        </el-col>
    </el-row>
    <el-row>
        <el-input type="textarea" placeholder="Description" />
    </el-row>
</template>

<style scoped>
    .text-input {
        width: auto;
    }
</style>