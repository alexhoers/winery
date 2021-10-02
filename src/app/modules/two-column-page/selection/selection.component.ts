import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/internal/operators';
import { DataService } from 'src/app/core/services/data.service';
import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  data: Wine[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService) { 
    dataService.getWines().pipe(finalize(()=>{this.loading=false})).subscribe( data => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
