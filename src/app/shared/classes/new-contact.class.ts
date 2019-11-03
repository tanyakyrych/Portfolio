import { IContact } from "../interfaces/contact.interface";

export class NewContact implements IContact {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public message: string,
        public status: boolean
    ) { }
}