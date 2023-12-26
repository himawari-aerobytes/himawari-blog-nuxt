import { ref } from 'vue'
import { defineStore } from 'pinia'
 
export const useSidebarStore = defineStore('sidebarStore', () => {
  const isShow = ref(false)

  function changeShow() {
    isShow.value = !isShow.value
  }
 
  return { isShow,changeShow }
})
