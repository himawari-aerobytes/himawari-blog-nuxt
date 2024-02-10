import axios from "axios";

export default class ContactFormRepository{
  static async postMessage(body: ContactRequestType) {
    console.log(body);
    const runtimeConfig = useRuntimeConfig();
    // API_CONTACT_FORMからAPIのURLを取得
    const apiContactForm = runtimeConfig.public.contactLink;
    console.log(apiContactForm);

    // API_CONTACT_FORMにPOSTリクエストを送信
    await useFetch(apiContactForm, {
      method: 'POST',
      body: body,
  });
    }
}