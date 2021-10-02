export class News {
    title: string;
    description: string;
    date: Date;

    public constructor(init?: Partial<News>) {
        Object.assign(this, init);
    }
}