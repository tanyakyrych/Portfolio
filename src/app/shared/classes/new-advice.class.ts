import { IAdvice } from "../interfaces/advice.interface";

 export class NewAdvice implements IAdvice{
constructor(
    public id:number,
    public title:string,
    public description:string,
    public image?:string
){}
}