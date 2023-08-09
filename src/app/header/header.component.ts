import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  zIndex:any
  status1=0
  dropdown1(){
    this.status1== 1 ? this.status1=0 : this.status1=1
    this.zIndex= 50
  }
  status2=0
  dropdown2(){
    this.status2== 1 ? this.status2=0 : this.status2=1
     this.zIndex= 50
  }

  hide(val:any){
    this.status1=this.status2=0
  }


  setItem(navItem:any){

  }

  constructor(private router: Router){}
  openForm(){
    this.router.navigate(['addProd'])
  }
}
