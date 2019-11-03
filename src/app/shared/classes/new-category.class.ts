import { ICategory } from '../interfaces/category.interface';

export class NewCategory implements ICategory{
    constructor(
        public id:number,
        public name:string
    ){}
};