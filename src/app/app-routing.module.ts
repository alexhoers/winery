import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/two-column-page/about/about.component';
import { SelectionComponent } from './modules/two-column-page/selection/selection.component';
import { TwoColumnPageComponent } from './modules/two-column-page/two-column-page.component';
import { WinesComponent } from './modules/two-column-page/wines/wines.component';


const routes: Routes = [
  { path: '', redirectTo: 'wines', pathMatch: 'full'},
  { path: '', component: TwoColumnPageComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'wines', component: WinesComponent },
    { path: 'selection', component: SelectionComponent }
  ]},
  { path: 'user', 
  loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  { path: '**', redirectTo: 'wines' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
