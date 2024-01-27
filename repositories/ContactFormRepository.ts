import axios from "axios";

export default class ContactFormRepository{
  static async postMessage(body: ContactRequestType) {
    console.log(body);
    const runtimeConfig = useRuntimeConfig();
    await useFetch(runtimeConfig.public.contactLink, {
      method: 'POST',
      body: body,
  });
    }
}