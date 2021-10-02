import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { TwoColumnPageComponent } from './modules/two-column-page/two-column-page.component';
import { FilterMenuComponent } from './modules/two-column-page/filter-menu/filter-menu.component';
import { AboutComponent } from './modules/two-column-page/about/about.component';
import { SelectionComponent } from './modules/two-column-page/selection/selection.component';
import { WinesComponent } from './modules/two-column-page/wines/wines.component';
import { DataService } from './core/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwoColumnPageComponent,
    FilterMenuComponent,
    AboutComponent,
    SelectionComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
