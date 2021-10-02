import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Wine } from "src/app/shared/models/wine";
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    data: Wine[] = [];

    constructor() {
        this.initData();
    }


    public getWines(): Observable<Wine[]> {
        return of(this.data).pipe(delay(1000));
    }

    private initData() {
        this.data.push(new Wine({ name: "Sandemand 20 Years", producer: "Sandemand", type: "Tawny", year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }))
        this.data.push(new Wine({ name: "Sandemand 20 Years", producer: "Sandemand", type: "Tawny", year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }))
        this.data.push(new Wine({ name: "Sandemand 20 Years", producer: "Sandemand", type: "Tawny", year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }))
        this.data.push(new Wine({ name: "Sandemand 20 Years", producer: "Sandemand", type: "Tawny", year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }))
        this.data.push(new Wine({ name: "Sandemand 20 Years", producer: "Sandemand", type: "Tawny", year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }))
        this.data.push(new Wine({ name: "Sandemand 20 Years", producer: "Sandemand", type: "Tawny", year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }))
    }
}