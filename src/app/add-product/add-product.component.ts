import { SovyServiceService } from 'src/app/sovy-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private sovyService: SovyServiceService){}
  addProduct = new FormGroup({
    prodName: new FormControl(),
    imgfile: new FormControl(),                    
    category: new FormControl(),
    prodPrice: new FormControl(),
    prodQty: new FormControl()
  })

  imgurl:any
  convertToBase64(e:any){
     const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = (events:any)=>{
      this.imgurl =  events.target.result
    }
    console.log(this.imgurl)

  }


  submitData(){
    this.addProduct.patchValue({
      imgfile:this.imgurl
    })
    console.log(this.addProduct.value);
    let cat = this.addProduct.value.category
    this.sovyService.addProdDetails(this.addProduct.value,cat).subscribe((resData)=>{
      console.log(resData)
      alert('Data Added Successfully!')
    })
  }

  
  }

