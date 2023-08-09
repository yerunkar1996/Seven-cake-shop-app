import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: ['./forms-validation.component.css']
})
export class FormsValidationComponent {


  feedbackForm = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobileNo: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
    comment: new FormControl('',[Validators.required,Validators.pattern("[A-Z]{8}")]),
  })      

  feedback(){
    console.log(this.feedbackForm.value)
  }

  get Name(){
    return this.feedbackForm.get('Name')
  }
  get email(){
    return this.feedbackForm.get('email')
  }
  get mobileNo(){
    return this.feedbackForm.get('mobileNo')
  }
  get comment(){
    return this.feedbackForm.get('comment')
  }


}
