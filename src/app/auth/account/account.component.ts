import { TransService } from './../../trans.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
constructor(private serv: TransService, private actv: ActivatedRoute){}

UserName:any
ngOnInit(){
  this.actv.params.subscribe((name)=>{
 console.log(name)
    this.UserName = name['id']
    console.log(this.UserName)
  })

  this.getUserDetails()
}

Users:any
getUserDetails(){
  this.serv.getUserAPI().subscribe((data)=>{
    this.Users = data
  })
}


}
