<script setup>
    import PowerCard from '../PowerCard.vue';
    let power = {
        name: 'Second Alpha Mutation',
        description: 'Your body has adapted to gamma radiation, allowing you to control another Alpha Mutation.'
    }
</script>

<template>
    <PowerCard :power="power"/>
</template>