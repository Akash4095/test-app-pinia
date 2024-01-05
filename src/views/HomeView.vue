<template>
  <div class="home">
    <Counter />
    <!-- <div class="count">{{ counterStore.count }}</div> -->
    <div class="buttons">
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.increment">+</button>
    </div>
    <hr />
    <div>
      This counter is : {{ counterStore.oddOrEven }}
    </div>
    <hr />
    <div>
      <h3>Edit Counter:</h3>
      <input type="text" v-model="counterStore.count" />
    </div>
  </div>
</template>
  
<script setup>
import { useCounterStore } from '../store/counter.js'
import Counter from "@/components/counterView.vue"

const counterStore = useCounterStore()
// const count = ref(0)
// console.log(counterStore.count, "counterStore")

// const oddOrEven = computed(() => {
//   if (count.value % 2 === 0) return 'even'
//   return 'odd'
// })
</script>

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