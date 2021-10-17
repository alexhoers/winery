import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services';
import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.scss']
})
export class WineDetailsComponent implements OnInit {

  wine: Wine;
  // Remember to close subscriptions

  constructor(private dataService: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getWine(+this.router.snapshot.params['id']).subscribe((w)=>this.wine=w);
  }

}
