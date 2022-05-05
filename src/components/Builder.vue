<script setup>
    import { reactive, ref, watch } from "vue" 
    import { useCharacterStore } from "@/stores/characterStore"
    import { storeToRefs } from "pinia"
    const charStore = useCharacterStore()
    const { name, level, alignment, description, pronouns, xp } = storeToRefs(charStore)
    const state = reactive({ name: name.value, alignment: alignment.value, level: level.value, description: description.value, pronouns: pronouns.value, xp: xp.value })
    // const thisXP = ref(1)

    // This makes the save button appear conditionally
    const showSaveButton = ref(false);
    watch(state, () => {
        if(!showSaveButton.value){
            console.log("called");
            showSaveButton.value = true;
        }
    })

    watch(state, () => {
        console.log("xp changed")
        // xp.value.replace(/[^0-9]+/g, '');
        // state.xp = xp;
    })

    // Writes the reactive state to the pinia store
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
                    <el-col :span="8">
                        <label for="level">Level</label>
                        <el-input-number id="level" :min="1" v-model="state.level" placeholder="Level" />
                    </el-col>
                    <el-col :span="8">
                        <label for="xp">XP</label>
                        <el-input-number 
                            :min="0" 
                            v-model="state.xp" 
                            placeholder="XP"
                        />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <label for="charname">Name</label>
                        <el-input class="temp" id="charName" v-model="state.name" placeholder="Name" />
                    </el-col>
                    <el-col :span="8">
                        <label for="">Alignment</label>
                        <el-input class="temp" v-model="state.alignment" placeholder="Alignment" />
                    </el-col>
                    <el-col :span="8">
                        <label for="">Pronouns</label>
                        <el-input class="temp" v-model="state.pronouns" placeholder="Pronouns" />
                    </el-col>
                </el-row>
                <el-row>
                    <el-input type="textarea" placeholder="Description"/>
                </el-row>

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

    .el-row {
        justify-content: center;
    }

    .temp {
        width: auto;
    }
</style>