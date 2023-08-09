import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  val:any = "Peter"

  col=["red","blue"]
  dis = true

//   user = "admin1"
//   pass= "pass@12"
//   display=1
//   display2=1
//   status=0
//   msg="Invalid input"

//   show1(inp1:any){
//     if(inp1.includes("@")){
//     this.display =0
//   }
//   else{
//     this.display =1
//   }
//   }

//   show2(inp2:any){
    // if(inp2.length==8){
    //   this.display2 =0
    // }
    // else{
    //   this.display2 =1
    // }
//   }

//   check(){
//     if(this.display ==0 && this.display2 ==0){
//       this.dis=false
//     }
//     else{
//       this.dis=true
//   }
//   }

// show(username:any, password:any){
//   if(this.user === username && this.pass === password){
//     alert("Successfully login")
//   }

// }



  username = "admin1@gmail.com"
  password= "pass@123"
  display=1
  display2=1
  msg="Invalid"

  show1(inp1:any, field:any){
    if(field == 1){
        if(inp1.includes("@")){
          this.display =0
        }
        else{
          this.display =1
        }
      }
    else if(field == 2){
      if(inp1.length==8){
        this.display2 =0
      }
      else{
        this.display2 =1
      }
    }
    else{
      this.msg="Invalid choise"
    }

    
  }

  login(user:any,passwd:any){
    if(this.username == user && this.password == passwd)
    alert("login success")
  }




}
