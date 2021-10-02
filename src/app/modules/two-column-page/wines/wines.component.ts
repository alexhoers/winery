import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { News } from 'src/app/shared/models/news';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

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
