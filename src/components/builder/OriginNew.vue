<script setup>
// import { reactive } from 'vue'
import { useBuilderStore } from '@/stores/builderStore';
import { useOriginTable } from '@/stores/originTableStore';
import { storeToRefs } from 'pinia';
import _ from 'lodash'; 
// import LevelOne from './levels/LevelOne.vue';
// import LevelTwo from './levels/LevelTwo.vue';
// import LevelThree from './levels/LevelThree.vue';
// import LevelFour from './levels/LevelFour.vue';
// import LevelFive from './levels/LevelFive.vue';
// import LevelSix from './levels/LevelSix.vue';
// import LevelSeven from './levels/LevelSeven.vue';
const originTable = useOriginTable(); 
const buildStore = useBuilderStore();
const { origins } = storeToRefs(buildStore);
const gutter = 20;

// const state = reactive({ activeLevels: [] })

// const _renderLevels = () => 
//   _.map(Array(10), (level) => {
//   return <el-tab-pane label={`Level${level + 1}`}>Level {level + 1}</el-tab-pane>
// })

const features = [];
_.each(origins, (origin) => {
  features.push()
})

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
  <el-tabs tab-position="left">
    <template v-for="level in [...Array(10).keys()]" :key=level+1>
      <el-tab-pane :label="`Level ${level+1}`">
        <template #label>
          <div class="featureTab">
            <div class="featureLabel">Label</div>
            <div>{{level+1}}</div>
          </div>
        </template>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<style scoped>
  .featureTab {
    font-size: 1rem;
    display: flex;
  }
</style>