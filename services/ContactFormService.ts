import ContactFormRepository from "@/repositories/ContactFormRepository";

export default class ContactFormService{
    static async postContact(body: ContactRequestType): Promise<void>{
            await ContactFormRepository.postMessage(body);
    }
}