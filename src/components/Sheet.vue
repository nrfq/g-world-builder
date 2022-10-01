<script setup>
import Details from './builder/Details.vue';	
import { useBuilderStore } from '@/stores/builderStore';
import { useCharacterStore } from '@/stores/characterStore';
import { useOriginTable } from '@/stores/originTableStore';
import { storeToRefs } from 'pinia';

const buildStore = useBuilderStore();

</script>

<template>
	<div>
		<Details/>
	</div>
</template>

<style scoped>
	div {
		max-width: 1600px;
	}
</style>