import { defineStore } from "pinia";

/********************************************************************************
Defines the various states of the app
************************************************************************************/ 
export const useState = defineStore('state', {
    state: () => ({
      overlay: {
        open: false,
      }
    }),
    actions: {
      toggleOverlay (open) {
        this.overlay = {...this.overlay, open: (typeof open) === 'boolean' ? open : !this.overlay.open}
      }
    }
})