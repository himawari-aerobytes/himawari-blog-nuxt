import axios from "axios";

export default class ContactFormRepository{
  static async postMessage(body: ContactRequestType) {
    console.log(body);
    await useFetch("https://wdruieg1nl.execute-api.ap-northeast-1.amazonaws.com/himawari-blog-contact-form", {
      method: 'POST',
      body: body,
  });
        // await axios.post(
        //   process.env.LINK_CONTACT_FORM!,
        //     JSON.stringify(body)
        //   );
    }
}