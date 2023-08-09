import { Component } from '@angular/core';
import { SovyServiceService } from 'src/app/sovy-service.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent {


  constructor(private sovyService:SovyServiceService){}

  ngOnInit(){
    this.getCookies()
  }


  cookiesList:any;
  getCookies(){
    this.sovyService.getCookiesDetails().subscribe((mongoData)=>{
      this.cookiesList=mongoData
      console.log(this.cookiesList)
    })
  }

}
