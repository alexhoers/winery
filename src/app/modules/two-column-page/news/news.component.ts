import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Database } from 'firebase/database';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  news: Observable<News[]>;

  newsList: News[];

  constructor(private afs: Firestore) {
    // collectionData<News[]>(collection(afs, 'news')).subscribe(res => { this.newsList = res;    console.log(this.newsList); } );
    this.news = collectionData(collection(afs, 'news')).pipe(map((news: DocumentData[]) => news as News[]))

  }

  ngOnInit(): void {
  }

}
