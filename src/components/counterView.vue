<template>
    <div class="count">{{ counterStore.count }}</div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
</script >

<style>
.count {
    font-size: 60px;
    margin: 20px
}

.buttons button {
    font-size: 40px;
    margin: 10px;
}
</style>