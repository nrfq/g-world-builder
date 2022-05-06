<script setup>
import { ref, watch } from "vue";
import { useCharacterStore } from "@/stores/characterStore";
import { useBuilderStore } from "@/stores/builderStore";
import Details from "./builder/Details.vue";
import Origins from "./builder/Origins.vue";
// import { storeToRefs } from "pinia";
const charStore = useCharacterStore();
const buildStore = useBuilderStore();

// copies charStore into buildStore
// charStore is the source of truth
buildStore.$state = charStore.$state;

// const tempName = ref("New Name")
// This makes the save button appear conditionally
const showSaveButton = ref(false);
watch(buildStore.$state, () => {
  if (!showSaveButton.value) {
    console.log("called");
    showSaveButton.value = true;
  }
});

// // Writes the reactive state to the pinia store
function saveCharacter() {
  // console.log(`changed to ${state.tempName}`);
  charStore.$patch(buildStore.$state);
  showSaveButton.value = false;
}
</script>

<template>
  <div class="builder-main">
    <h1>Builder</h1>
    <el-row justify="start">
        <el-col :span="8">
            <el-button 
                class="save-button" 
                type="info" 
                v-show="showSaveButton" 
                @click="saveCharacter"
            >
                Save
            </el-button>
        </el-col>
        <el-col :span="8">
          <router-link to="/character"
      ><el-button type="primary">Character</el-button></router-link
    >
        </el-col>
    </el-row>
    
    <el-tabs tab-position="top" stretch="true">
      <el-tab-pane label="Details">
        <p>Name Update: {{charStore.name}}</p>
        <Details/>
      </el-tab-pane>
      <el-tab-pane label="Origins">
        <Origins/>
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
</style>