import { Component } from '@angular/core';
import { SovyServiceService } from 'src/app/sovy-service.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent {


  constructor(private sovyService:SovyServiceService){}

  ngOnInit(){
    this.getSnacks()
  }

  snacksList:any;
  getSnacks(){
    this.sovyService.getSnacksDetails().subscribe((mongoData)=>{
      this.snacksList=mongoData
      console.log(this.snacksList)
    })
  }

}
