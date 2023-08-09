import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SovyServiceService {

  constructor(private http: HttpClient) { }


  //*******************GET API*****************
  //Cakes
  getCakesDetails(){
    return this.http.get('http://localhost:4500/cakes')
  }

     //Cookies
  getCookiesDetails(){
    return this.http.get('http://localhost:4500/cookies')
  }

   //Snacks
  getSnacksDetails(){
    return this.http.get('http://localhost:4500/snacks')
  }





  //********************POST API*********************
  addProdDetails(formdata:any, category:any){
      return this.http.post(`http://localhost:4500/${category}/addproduct`,formdata)
  }

  // addProdDetails(formdata:any, category:any){
  //   if(category == 'cakes'){
  //     return this.http.post('http://localhost:4500/cakes/addproduct',formdata)
  //   }
  //   else if(category == "cookies"){
  //     return this.http.post('http://localhost:4500/cookies/addproduct',formdata)
  //   }
  //   else{
  //     return this.http.post('http://localhost:4500/snacks/addproduct',formdata)
  //   }
  // }




  //*******************Delete API**********************
  deleteCakes(id:any){
    return this.http.delete(`http://localhost:4500/cakes/deleteCakes/${id}`)
  }
 
  deleteCookies(id:any){
    return this.http.delete(` http://localhost:4500/cookies/deleteCookie/${id}`)
  }

  deleteSnacks(id:any){
    return this.http.delete(` http://localhost:4500/snacks/deleteSnacks/${id}`)
  }


}
