<script setup>
import Details from './builder/Details.vue';
import Overlay from '@/components/Overlay.vue'
import Origins from '@/components/builder/Origins.vue';
import { useBuilderStore } from '@/stores/builderStore';
import { useState } from '@/stores/appStateStore.js';
const state = useState();
// import { useCharacterStore } from '@/stores/characterStore';
// import { useOriginTable } from '@/stores/originTableStore';
// import { storeToRefs } from 'pinia';

const buildStore = useBuilderStore();

</script>

<template>
  <Overlay/>
	<div>
		<Details/>
		<button :onclick="state.toggleOverlay">Test</button>
		<!-- <Origins/> -->
	</div>
</template>

<style scoped>
	div {
		max-width: 1600px;
	}
</style>