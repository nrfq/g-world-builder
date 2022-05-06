<script setup>
import { ref, watch } from "vue";
import { useCharacterStore } from "@/stores/characterStore";
import { useBuilderStore } from "@/stores/builderStore";
import Details from "./builder/Details.vue";
// import { storeToRefs } from "pinia";
const charStore = useCharacterStore();
const buildStore = useBuilderStore();

// copies buildStore over from charStore
// charStore is the source of truth
buildStore.$state = charStore.$state;

// const { name, level, alignment, description, pronouns, xp } = storeToRefs(charStore);
// const state = reactive({
//   name: name.value,
//   alignment: alignment.value,
//   level: level.value,
//   description: description.value,
//   pronouns: pronouns.value,
//   xp: xp.value,
// });

// const tempName = ref("New Name")
// This makes the save button appear conditionally
const showSaveButton = ref(false);
watch(buildStore.$state, () => {
  if (!showSaveButton.value) {
    console.log("called");
    showSaveButton.value = true;
  }
});

// watch(state, () => {
//   console.log("xp changed");
//   // xp.value.replace(/[^0-9]+/g, '');
//   // state.xp = xp;
// });

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
</style>