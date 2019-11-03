import { ICategory } from './category.interface';

export interface IPhoto{
    id:number;
    category:ICategory;
    image:string;
    title:string
};