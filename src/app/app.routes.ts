import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LifestyleComponent } from './components/pages/lifestyle/lifestyle.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { StreetInColorComponent } from './components/pages/street-in-color/street-in-color.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'street-in-color', component: StreetInColorComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];
