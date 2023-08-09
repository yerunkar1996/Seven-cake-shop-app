import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from '../wild-card/wild-card.component';

const routes: Routes = [
  {
    path:'account/:id', component:AccountComponent
  },
  {
    path: 'signup', component:SignUpComponent
  },
  {
    path:'signin', component:SigninComponent
  },
  // {
  //   path:'**', component:WildCardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
