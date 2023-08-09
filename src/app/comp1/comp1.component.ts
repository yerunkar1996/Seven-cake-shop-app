import { TransService } from './../trans.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(private serv: TransService){}
  ngOnInit(){
    this.getCakes()
  }

// cakes:any = [
//   {
//     Name: "Chacolate Cake",
//     Price: 350,
//     ImagePath:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
//     Quantity: "1kg"
//   },
//   {
//     Name: "Black Forest Cake",
//     Price: 450,
//     ImagePath:"https://media.istockphoto.com/id/523562271/photo/black-forest-cake-decorated-with-whipped-cream-and-cherries.jpg?s=612x612&w=is&k=20&c=fB3p_5wixqx6QawCwyGcv27a9HBdMWnSeB0JOOZ7Xq0=",
//     Quantity: "1kg"
//   },
//   {
//     Name: "Red valvet Cake",
//     Price: 450,
//     ImagePath:"https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     Quantity: "1kg"
//   }

// ]

cakes:any

  getCakes(){
    this.cakes= this.serv.cakesAPi
  }

}
