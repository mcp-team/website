import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsViewComponent } from './components/sponsors-view/sponsors-view.component';
import { AboutUsViewComponent } from './components/about-us-view/about-us-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'home', redirectTo: 'about-us', pathMatch: 'full' }, // temporary?
  { path: 'about-us', component: AboutUsViewComponent },
  { path: 'sponsors', component: SponsorsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
