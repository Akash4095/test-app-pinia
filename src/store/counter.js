import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => reactive({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    getters: {
        oddOrEven: (state) => state.count % 2 === 0 ? "Even" : "Odd"
    },
})