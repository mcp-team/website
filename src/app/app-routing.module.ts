import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SponsorsViewComponent } from './components/sponsors-view/sponsors-view.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'sponsors', pathMatch: 'full' },
  //{ path: 'sponsors', component: SponsorsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
