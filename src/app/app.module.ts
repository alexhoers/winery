import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { TwoColumnPageComponent } from './modules/two-column-page/two-column-page.component';
import { FilterMenuComponent } from './modules/two-column-page/filter-menu/filter-menu.component';
import { AboutComponent } from './modules/two-column-page/about/about.component';
import { SelectionComponent } from './modules/two-column-page/selection/selection.component';
import { WinesComponent } from './modules/two-column-page/wines/wines.component';
import { AuthService, DataService, JQUERY_SERVICE } from './core/services/index';
import { AddWineModalComponent } from './modules/two-column-page/selection/add-wine-modal/add-wine-modal.component';

// TODO: 1) Create imports as barrels.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwoColumnPageComponent,
    FilterMenuComponent,
    AboutComponent,
    SelectionComponent,
    WinesComponent,
    AddWineModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService, 
    AuthService,
    JQUERY_SERVICE], // Shared across modules if added in AppModule
  bootstrap: [AppComponent]
})
export class AppModule { }
