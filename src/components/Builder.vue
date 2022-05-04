<script setup>
    // import { reactive } from "vue" 
    import { useCharacterStore } from "@/stores/characterStore"
    import { storeToRefs } from "pinia"
    const charStore = useCharacterStore()
    const { name, level } = storeToRefs(charStore)
    // const state = reactive({ tempName: name})
    // function changeName(name){
    //     console.log("changed")
    //     charStore.$patch({
    //         name: name
    //     })
    // }
</script>

<template>
    <div class="builder-main">
        <h1>Builder</h1>
        <router-link to="/character"><el-button type="primary">Character</el-button></router-link>
        <el-tabs tab-position="top" stretch="true">
            <el-tab-pane label="Details">
                <div>
                    <label for="charname">Name</label>
                    <el-input id="charName" v-model="name" placeholder="Name" />
                </div>
                <div>
                    <label for="level">Level</label>
                    <el-input-number id="level" min=1 v-model="level" placeholder="Level" />
                </div>
            </el-tab-pane>
            <el-tab-pane label="Origins">
                <!-- origin content goes here -->
            </el-tab-pane>
            <el-tab-pane label="Ability Scores">
                <!-- ability score content goes here -->
            </el-tab-pane>
            <el-tab-pane label="Equipment">
                <!-- equipment conent goes here -->
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped>
    .builder-main {
        width: 70%;
        justify-content: center;
    }
</style>