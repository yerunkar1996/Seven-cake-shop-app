import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatIconModule } from '@angular/material/icon'
const material = [
  MatMenuModule,
  MatGridListModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialCompModule { }
