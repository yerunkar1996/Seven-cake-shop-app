import { TransService } from './../trans.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private serv: TransService, private router: Router){}

  ngOnInit(){
    this.getUser();
  }
UserData:any
  getUser(){
    this.serv.getUserAPI().subscribe((data)=>{
      console.log(data)
      this.UserData=data
    })
  }

  account(id:any){
    this.router.navigate(['auth/account', id])
  }
}
