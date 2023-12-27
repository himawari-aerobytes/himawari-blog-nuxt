import axios from "axios";

export default class ContactFormRepository{
  static async postMessage(body: ContactRequestType) {
    console.log(body);
        await axios.post(
          process.env.LINK_CONTACT_FORM!,
            JSON.stringify(body)
          );
    }
}