import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  Num = 10
  // counter1(){
  //   this.Num++
  // }
  // counter2(){
  //   this.Num--
  // }

  counter(val:any){
    // (val === "+" )? this.Num++ : this.Num--
    // if(val == "+"){
    //   this.Num++
    // }
    // else if(this.Num != 0){
    //   if(val === "+"){
    //     this.Num++
    //   }
    //   else{
    //     this.Num--
    //   }
    // }
    // else{
    //   this.Num=0
    // }

  (val === "+")?
      this.Num++:
        (this.Num !=0)? this.Num-- : this.Num =0
  }



}
