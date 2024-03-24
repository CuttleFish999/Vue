import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{    
    state(){
        return {
            sum:6
        }
    }
})