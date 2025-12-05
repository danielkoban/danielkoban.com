import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LandscapeComponent } from './components/pages/landscape/landscape.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'landscape', component: LandscapeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];
