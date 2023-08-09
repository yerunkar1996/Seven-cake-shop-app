
import { SnacksComponent } from './snacks/snacks.component';
import { CookiesComponent } from './cookies/cookies.component';
import { CakesComponent } from './cakes/cakes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cakes', component: CakesComponent
  },
  {
    path:'cookies', component:CookiesComponent
  },
  {
    path: 'snacks', component:SnacksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
