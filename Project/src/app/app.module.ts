import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from "./components/footer/footer.component";
import { RecommendedComponent } from "./components/recommended/recommended.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { VideoComponent } from "./components/video/video.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RecommendedComponent,
    SearchbarComponent,
    TopNavbarComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
