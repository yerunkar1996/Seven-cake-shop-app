import { SovyServiceService } from './../sovy-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(){
    this.getDate()
    this.show()
    this.getCakes()
    this.getCookies()
    this.getSnacks()
  }
  Cake1="Kitkat Oreo Wonder Cake"
  Cake2="Amusing Kitkat Cake"
  Cake3="Dainty Black Forest Cake"
  Price="price"

  today:any=Date()
  getDate(){
    setInterval(()=>{
      this.today=Date()
    },1000)
  }
  // setInterval(getDate,1000);

customer:any=0
MyCustomer = 266
  show(){
  setInterval(()=>{
    if(this.customer == this.MyCustomer){
      this.customer = this.MyCustomer
    }
    else{
      this.customer++
    }
  })
}

constructor(private sovyService: SovyServiceService){
}
//Get Cakes Details
cakesList:any;
getCakes(){
  this.sovyService.getCakesDetails().subscribe((mongoData)=>{
    this.cakesList=mongoData
    console.log(this.cakesList)
  })
}



//Get Cookies Details
cookiesList:any;
getCookies(){
  this.sovyService.getCookiesDetails().subscribe((mongoData)=>{
    this.cookiesList=mongoData
    console.log(this.cookiesList)
  })
}


//Get Snacks Details
snacksList:any;
getSnacks(){
  this.sovyService.getSnacksDetails().subscribe((mongoData)=>{
    this.snacksList=mongoData
    console.log(this.snacksList)
  })
}

}
