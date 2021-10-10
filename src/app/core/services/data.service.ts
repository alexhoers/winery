import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Wine } from "src/app/shared/models/wine";
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Type } from "src/app/shared/models/enums/types";
import { News } from "src/app/shared/models/news";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    wines: Wine[] = [];
    news: News[] = [];

    constructor() {
        this.initData();
    }


    public getWines(): Observable<Wine[]> {
        return of(this.wines).pipe(delay(1000));
    }

    public getNews(): Observable<News[]> {
        return of(this.news).pipe(delay(1000));
    }

    public addWine(wine: Wine) {
        this.wines.push(wine);
    }

    private initData() {

        this.news.push(new News({ title: "Winery site", description: "Winery is a site for people who enjoy port. Here you can browse different types of port and read about characteristics, ratings and notes of a wide variety. I will continue updating the site with my favorite ports. I hope you will enjoy them as much as I do. Happy browsing.", date: new Date()}));

        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
        this.wines.push(new Wine({ name: "Sandeman 20 Years", producer: "Sandeman", type: Type.TAWNY, year: "", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tellus quis ipsum malesuada posuere porta in erat. Morbi tincidunt imperdiet commodo. Pellentesque libero dui, blandit ac mattis a, bibendum at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", image: "", rating: 92, notes: ["Apricot", "Farin", "Smoke"] }));
    }
}