import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { VideoComponent } from "./components/video/video.component";

const routes: Routes = [
  { path: '', component: TopNavbarComponent, pathMatch: 'full' },
  { path: 'footer', component: FooterComponent },
  { path: 'recommended', component: RecommendedComponent },
  { path: 'searchbar', component: SearchbarComponent },
  { path: 'navbar', component: TopNavbarComponent },
  { path: 'video', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
