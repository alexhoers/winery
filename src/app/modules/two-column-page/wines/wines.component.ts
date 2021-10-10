import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/internal/operators';
import { JQUERY_TOKEN } from 'src/app/core/services';
import { DataService } from 'src/app/core/services/data.service';
import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  wines: Wine[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService, @Inject(JQUERY_TOKEN) private $factory: any, private router: Router) { 
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
    this.$('#wine-add-modal').modal('show');
    // data-bs-toggle="modal" data-bs-target="#exampleModal"
  }

  navigateToDetailedPage(id: number) {
    this.router.navigate(['wines/'+id])
  }

}
