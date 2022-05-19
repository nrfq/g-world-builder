<script setup>
    import { defineProps } from 'vue';
    import sourceSymbol from "/public/sources.png"
    defineProps(["power", "type"])
</script>

<template>
    <el-card>
        <template #header>
                <div class="card-header">
                    <span v-if="power.name" class="power-name">{{power.name}}</span>
                    <span v-if="type">{{type}} Power</span>
                </div>
        </template>
        <div v-if="power.description" class="power-description">
            <span>{{power.description}}</span>
        </div>
        <div class="power-info-container">
            <div>
                <span v-if="power.frequency">{{power.frequency}}</span>
                <span v-if="power.sources"><img class="sources-symbol" :src="sourceSymbol"/></span>
                <span v-for="(source, index) in power.sources" :key="source">
                    {{source}}
                    <span v-if="index != power.sources.length - 1">, </span>
                </span>
            </div>
            <div v-if="power.action">
                <span >Action Type: {{power.action}}</span>
            </div>
            <div v-if="power.range">
                <span>Range: {{power.range}}</span>
            </div>
            <div v-if="power.trigger">
                <span >Trigger: {{power.trigger}}</span>
            </div>
            <div v-if="power.target">
                <span >Target: {{power.target}}</span>
            </div>
            <div v-if="power.attack">
                <span >Attack: {{power.attack.description}}</span>
            </div>
            <div v-if="power.hit">
                <span >Hit: {{power.hit.description}}</span>
            </div>
            <div v-if="power.effect">
                <span >Effect: {{power.effect}}</span>
            </div>
            <div v-if="power.miss">
                <span >Miss: {{power.miss}}</span>
            </div>
            <div v-if="power.special">
                <span >Special: {{power.special}}</span>
            </div>
        </div>
    </el-card>
</template>

<style scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .power-name {
        font-weight: bold;
    }

    .power-description {
        color: black;
        background-color: lemonchiffon;
        font-style: italic;
    }

    .power-info-container div{
        text-align: start;
    }

    .sources-symbol {
        height: 1em;
        margin-left: 1rem;
        margin-right: 1rem;
    }

</style>