import { SovyServiceService } from './../../sovy-service.service';
import { TransService } from './../../trans.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent {

  constructor(private service : TransService, private sovyService:SovyServiceService){}

  ngOnInit(){
    this.getCakes()
  }

  // cakes:any = this.service.cakesAPi

  // ngOnInit(){
  //   this.cakes =  this.service.cakesAPi
  // }

  cakesList:any;
  getCakes(){
    this.sovyService.getCakesDetails().subscribe((mongoData)=>{
      this.cakesList=mongoData
      console.log(this.cakesList)
    })
  }



}
