import { ISubscribe } from "../interfaces/subscribe.interface";

 export class NewSubscribe implements ISubscribe{
    constructor(
        public id:number,
        public email:string,
        public status:boolean
    ){}
};
