import { IRecent } from '../interfaces/recent.interface';

export class NewRecent implements IRecent{
    constructor(
        public id:number,
        public image:string
    ){}
}