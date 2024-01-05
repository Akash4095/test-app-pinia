<template>
    <div>
        <h1>About Page</h1>
    </div>
    <div>
        <button @click="counterStore.increment">
            {{ counterStore.count }}
        </button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
</script>

<style>
button {
    font-size: 40px;
    margin: 10px;
}
</style>