<script setup>
  import { defineProps } from 'vue';
  import { useState } from "@/stores/appStateStore.js";

  const props = defineProps(['label', 'source', 'fieldName'])
  const state = useState();

</script>

<template>
  <el-dialog
    v-model="state.overlay.open"
    :title="props.label"
    width="30%"
    align-center
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.overlay.open = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>