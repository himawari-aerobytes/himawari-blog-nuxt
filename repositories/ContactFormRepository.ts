export default class ContactFormRepository{
  static async postMessage(body: ContactRequestType) {
    console.log(body);
    const runtimeConfig = useRuntimeConfig();
    // CONTACT_LINKからAPIのURLを取得
    const apiContactForm = runtimeConfig.public.contactLink;
    console.log(apiContactForm);

    // CONTACT_LINKにPOSTリクエストを送信
    await useFetch(apiContactForm, {
      method: 'POST',
      body: body,
  });
    }
}