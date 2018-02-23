import { Article } from "../article/article";

export class Source {
    constructor(
        public id?: number,
        public name?: string,
        public website?: string,
        public articles?: Article[]
    ){}
}
