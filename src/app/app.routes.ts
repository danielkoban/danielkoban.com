import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LifestyleComponent } from './components/pages/lifestyle/lifestyle.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { StreetInColorComponent } from './components/pages/in-color/in-color.component';
import { LandscapeComponent } from './components/pages/landscape/landscape.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'in-color', component: StreetInColorComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'landscape', component: LandscapeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];
