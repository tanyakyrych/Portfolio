import { IPhoto } from '../interfaces/photo.interface';
import { ICategory } from '../interfaces/category.interface';

export class NewPhoto implements IPhoto {
    constructor(
        public id: number,
        public category: ICategory,
        public title: string,
        public image: string,

    ) { }
};