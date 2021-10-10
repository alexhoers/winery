import { Component, Inject, OnInit } from '@angular/core';
import { finalize } from 'rxjs/internal/operators';
import { JQUERY_TOKEN } from 'src/app/core/services';
import { DataService } from 'src/app/core/services/data.service';
import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  wines: Wine[] = [];
  loading: boolean = true;


  constructor(private dataService: DataService, @Inject(JQUERY_TOKEN) private $factory: any) { 
    dataService.getWines().pipe(finalize(()=>{this.loading=false})).subscribe( data => {
      this.wines = data;
    })
  }

  public $: any;



  ngOnInit(): void {
    this.$ = this.$factory();
  }

  get winesCount(): number {
    return this.wines.length;
  }

  open() {
    this.$('#add-wine-modal').modal('show');
    // data-bs-toggle="modal" data-bs-target="#exampleModal"
  }


}
