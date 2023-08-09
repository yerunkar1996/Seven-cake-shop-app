import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Seven*Cake shop';
  a=15;
  num=205;

  // Pass data Parent to Child component
  data:any
  passData(val:any){
    this.data=val
  }



  // Pass data child to Parent component
  ParentData:any=""
  getData(val:any){
    this.ParentData=val
  }




}






























  //   a =45;
//   num=25
//   power = 2**2
//   data =  Math.floor(2.365)
//   show= false
//   owais=18
//   sagar=10
//   samson=12

//   address:any

//   color= "blue"

//   student =["Yashashree","Ankit","Vishal"]

// Name:any=[]
// // N1:number=0
// // N2:any=0
//   event1(){
//     for(let val of this.student){
//       if(val == "Ankit"){
//         break
//       }
//       console.log(val)
//       this.Name.push(val)
//     }
//   }


// Username:any
// Password:any
//   login(user:string, pass:string){
//     this.Username=user
//     this.Password=pass
//   }

// StudentList:any=[]

//   Register(name:any, mobile:any, address:any){
//     let obj:any={}
//     obj["name"]=name
//     obj["mobile"]=mobile
//     obj["address"]=address

//     this.StudentList.push(obj)
//     console.log(this.StudentList)
// }


// Data:any
// event2(val:string){
//   this.Data = val
//   console.log(this.Data)
// }

// event3(val:string){
//   this.Data = val
//   console.log(this.Data)
// }

// event4(val:string){
//   this.Data = val
//   console.log(this.Data)
// }


// event5(val:string){
//   this.Data = val
//   console.log(this.Data)
// }


// dis:any=1
// show(v:any){
//   this.dis = v
// }

// show1(v:any){
//   this.dis = v
// }


// name:any


