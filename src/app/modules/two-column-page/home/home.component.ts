import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { News } from 'src/app/shared/models/news';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: News[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService) { 
    dataService.getNews().pipe(finalize(()=>{this.loading=false})).subscribe( data => {
      this.newsList = data;
    })
  }

  ngOnInit(): void {
  }

}
