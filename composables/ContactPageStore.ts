import { defineStore } from 'pinia';

export const useContactPageStore = defineStore('contactPage', {
  state: () => ({
    sendMailState: false,
  }),
  actions: {
    sendMail() {
      this.sendMailState = true ;
    },
  },
});