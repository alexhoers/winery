import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { TwoColumnPageComponent } from './modules/two-column-page/two-column-page.component';
import { NewsComponent } from './modules/two-column-page/news/news.component';
import { AboutComponent } from './modules/about/about.component';
import { WinesComponent } from './modules/two-column-page/wines/wines.component';
import { HomeComponent } from './modules/two-column-page/home/home.component';
import { AuthService, DataService, JQUERY_SERVICE } from './core/services/index';
import { WineAddModalComponent } from './modules/two-column-page/wines/wine-add-modal/wine-add-modal.component';
import { WineDetailsComponent } from './modules/two-column-page/wines/wine-details/wine-details.component';
import { CollapsibleWellComponent } from './shared/components/collapsible-well.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';

// TODO: 1) Create imports as barrels.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwoColumnPageComponent,
    NewsComponent,
    AboutComponent,
    WinesComponent,
    HomeComponent,
    WineAddModalComponent,
    WineDetailsComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    DataService, 
    AuthService,
    JQUERY_SERVICE], // Shared across modules if added in AppModule
  bootstrap: [AppComponent]
})
export class AppModule { }
