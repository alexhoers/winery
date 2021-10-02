import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";


export class Wine {
    name: string;
    producer: string;
    type: string; // TODO should be enum
    year: string;
    description: string;
    image: string;
    rating: number;
    notes: string[];


    public constructor(init?: Partial<Wine>) {
        Object.assign(this, init);
    }
}

@Injectable({
    providedIn: 'root'
})
export class WineAdapter implements Adapter<Wine> {
    adapt(item: any): Wine {
        return new Wine({
            name: item.name,
            producer: item.producer,
            year: item.year,
            description: item.description,
            image: item.image,
            rating: item.rating,
            notes: item.notes
        })
    }
}