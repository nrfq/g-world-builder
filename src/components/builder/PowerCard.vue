<script setup>
    import { defineProps } from 'vue';
    import sourceSymbol from "/public/sources.png"
    defineProps(["power", "type"])
</script>

<template>
    <el-card>
        <template #header>
                <div class="card-header">
                <span class="power-name">{{power.name}}</span>
                <span>{{type}} Power</span>
                </div>
        </template>
        <div class="power-description">
            <span>{{power.description}}</span>
        </div>
        <div class="power-info-container">
            <div>
                <span>{{power.frequency}}</span>
                <span><img class="sources-symbol" :src="sourceSymbol"/></span>
                <span v-for="(source, index) in power.sources" :key="source">
                    {{source}}
                    <span v-if="index != power.sources.length - 1">, </span>
                </span>
            </div>
            <div>
                <span v-if="power.action">Action Type: {{power.action}}</span>
            </div>
            <div>
                <span v-if="power.range">Range: {{power.range}}</span>
            </div>
            <div>
                <span v-if="power.trigger">Trigger: {{power.trigger}}</span>
            </div>
            <div>
                <span v-if="power.target">Target: {{power.target}}</span>
            </div>
            <div>
                <span v-if="power.attack">Attack: {{power.attack.description}}</span>
            </div>
            <div>
                <span v-if="power.hit">Hit: {{power.hit.description}}</span>
            </div>
            <div>
                <span v-if="power.effect">Effect: {{power.effect}}</span>
            </div>
            <div>
                <span v-if="power.miss">Miss: {{power.miss}}</span>
            </div>
            <div>
                <span v-if="power.special">Special: {{power.special}}</span>
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