import { IAbout } from '../interfaces/about.interface';

export class NewAbout implements IAbout {
    constructor(
        public id: number,
        public text: any,
        public details: any
    ) {}
}