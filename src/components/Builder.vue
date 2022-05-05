<script setup>
    import { reactive, ref, watch } from "vue" 
    import { useCharacterStore } from "@/stores/characterStore"
    import { storeToRefs } from "pinia"
    const charStore = useCharacterStore()
    const { name, level } = storeToRefs(charStore)
    const state = reactive({ name: name.value })

    const showSaveButton = ref(false);
    watch(state, () => {
        if(!showSaveButton.value){
            console.log("called");
            showSaveButton.value = true;
        }
    })

    function saveCharacter(){
        console.log(`changed to ${state.tempName}`)
        charStore.$patch(state)
        showSaveButton.value = false
    }
</script>

<template>
    <div class="builder-main">
        <h1>Builder</h1>
        <router-link to="/character"><el-button type="primary">Character</el-button></router-link>
        <el-tabs tab-position="top" stretch="true">
            <el-button type="info" v-show="showSaveButton" @click="saveCharacter">Save</el-button>
            <el-tab-pane label="Details">
                <el-row>
                    <el-col :span="12">
                        <label for="charname">Name</label>
                        <el-input class="temp" id="charName" v-model="state.name" placeholder="Name" />
                    </el-col>
                    <p>Name Update Testing: {{name}}</p>
                </el-row>
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
    label {
        justify-self: flex-start;
    }
    .temp {
        width: auto;
    }
</style>