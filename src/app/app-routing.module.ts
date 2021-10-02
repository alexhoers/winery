import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/two-column-page/about/about.component';
import { SelectionComponent } from './modules/two-column-page/selection/selection.component';
import { WinesComponent } from './modules/two-column-page/wines/wines.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'wines', component: WinesComponent },
  { path: 'selection', component: SelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
