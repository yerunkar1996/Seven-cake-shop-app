import { AddProductComponent } from './add-product/add-product.component';
import { UserComponent } from './user/user.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ContactComponent } from './contact/contact.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AccountComponent } from './auth/account/account.component';
import { CakesComponent } from './category/cakes/cakes.component';
import { CookiesComponent } from './category/cookies/cookies.component';
import { SnacksComponent } from './category/snacks/snacks.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'addProd', component:AddProductComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path: 'cat', loadChildren: () => import('./category/category.module').then( mod => mod.CategoryModule)
  },
  {
    path:'user', component:UserComponent
  },
  {
    path:'auth', loadChildren: ()=> import('./auth/auth.module').then(md =>
      md.AuthModule
    )
  },
//   {
//     path:'account', component:AccountComponent
//   },{
//     path: 'signup', component:SignUpComponent
//   },{
//     path:'signin', component:SigninComponent
//   },
//   {
//     path: 'cakes', component: CakesComponent
//   },
//   {
// path:'cookies', component:CookiesComponent
//   },
//   {
//     path: 'snacks', component:SnacksComponent
//   },

  {
    path:"**", component:WildCardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
