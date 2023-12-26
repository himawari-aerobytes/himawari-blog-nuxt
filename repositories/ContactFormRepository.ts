import axios from "axios";

export default class ContactFormRepository{
  static async postMessage(body: ContactRequestType) {
    console.log(body);
        await axios.post(
            'https://blog.himawari.engineerseed.com/blog/contact',
            JSON.stringify(body)
          );
    }
}