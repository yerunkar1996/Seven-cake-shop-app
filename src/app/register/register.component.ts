import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  RegFormData:any=[]
  reg(formData:NgForm){
    console.log(formData)
    this.RegFormData.push(formData)
  }

}
