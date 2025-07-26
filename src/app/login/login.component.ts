import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name = "";
  displayName="";
  email="";

  getName(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
  }

  showName(event:Event){
    this.displayName=this.name;
    return this.displayName;
  }

  setName(){
    this.name= "default@459"
  }

  getEmail(val:string){
    this.email = val;
    console.log(this.email);
  }

  setEmail(){
    this.email ='default@example.com';
  }
}
