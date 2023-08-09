import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CakesComponent } from './cakes/cakes.component';
import { CookiesComponent } from './cookies/cookies.component';
import { SnacksComponent } from './snacks/snacks.component';
import { MaterialCompModule } from '../material-comp/material-comp.module';

console.log("Products")

@NgModule({
  declarations: [
    CakesComponent,
    CookiesComponent,
    SnacksComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialCompModule
    ]
})
export class CategoryModule { }
