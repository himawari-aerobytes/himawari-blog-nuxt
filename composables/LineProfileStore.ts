import { ref } from 'vue'
import { defineStore } from 'pinia'
 
export const useLoginProfileStore = defineStore('lineProfileStore', () => {
  const displayName = ref<string|null>("");
  const userId = ref<string|null>("");
  const pictureUrl = ref<string|null>("");
  const statusMessage = ref<string|null>("");
  const accessToken = ref<string|null>("");
  const idToken = ref<string | null>("");
  
    
  //Cookie Define
  const MAX_AGE = 604800; // 1week
  const lineAccessTokenCookie = useCookie('line_accessToken', { maxAge: MAX_AGE, secure: true });
  const linePictureUrlCookie = useCookie('line_pictureUrl', { maxAge: MAX_AGE, secure: true });
  const lineDisplayNameCookie = useCookie('ine_displayName', { maxAge: MAX_AGE, secure: true });
  
  const isLogin = ()=> {
      if (accessToken.value) {
        return true
      } else if (lineAccessTokenCookie.value) {
        accessToken.value = lineAccessTokenCookie.value;
        return true;
      }
      return false;
  }
  
  const getDisplayName = () => {
      if (displayName.value) {
        return displayName.value;
      }
      if (lineDisplayNameCookie.value) {
        displayName.value = lineDisplayNameCookie.value;
        return displayName.value;
      }
      return "";
    }
    const getPictureUrl = ()=> {
      if (pictureUrl.value) {
        return pictureUrl.value;
      } else if(linePictureUrlCookie.value){
        pictureUrl.value = linePictureUrlCookie.value;
        return pictureUrl.value;
      }
      return "";
    }
    const getAccessToken =()=> {
      if (accessToken.value) {
        return accessToken.value;
      } else if (lineAccessTokenCookie.value) {
        accessToken.value =lineAccessTokenCookie.value;
        return accessToken.value;
      }
      return "";
    }
  
  return {displayName,userId,pictureUrl,statusMessage,accessToken,idToken,isLogin,getDisplayName,getPictureUrl,getAccessToken}
})
