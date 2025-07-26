import { Component, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from "./counter/counter.component";
import { FormsModule } from '@angular/forms'; //Ussed for Two-way-binding
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, CounterComponent, FormsModule, NgIf, NgFor,
    NgSwitch,NgSwitchCase, NgSwitchDefault

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  //---------------NgSwitch------------------------------------

  colour = ''
  changeColor(colour:string){
    this.colour=colour
  }

  //---------------NgIf------------------------------------

  // block = 0
  // onClick(){
  //   this.block++;
  // }

  // login = true

  // authControll(){
  //   this.login=!this.login
  // }


  //------------- NgFor---------------------------------------------------

//   students = ["Anil","Sam", "Peter","Vinay", "Bruce"];

//   studentData = [
//   {
//     name: "John Doe",
//     age: 28,
//     email: "john.doe@example.com"
//   },
//   {
//     name: "Jane Smith",
//     age: 34,
//     email: "jane.smith@example.com"
//   },
//   {
//     name: "Sam Brown",
//     age: 22,
//     email: "sam.brown@example.com"
//   },
//   {
//     name: "Lisa White",
//     age: 40,
//     email: "lisa.white@example.com"
//   },
//   {
//     name: "Mike Green",
//     age: 30,
//     email: "mike.green@example.com"
//   }
// ]


  //-----------Directives--------------------------------------------------

  // show = false

  // showToggle(){
  //   this.show = !this.show
  // }



  // ----------Dynamic Styling------------------------------------------------

  // bgColor="green"
  // fontSize="30"
  // headingSizeBig="80px"
  // headingSizeSmall="30px"

  // zoom=true
  // updateHeadingSize() {
  //   this.zoom=!this.zoom
  //   console.log("Anubhab === <3 Angular");
    
  // }


  // --------------------------------------------------------------

  // task=""
  // private currentId = 1

  // taskList:{id:number,taskName:string}[]=[]
  // addTask(){
    // const newTask = {
    //   id : this.currentId,
    //   taskName : this.task
    // };

    // this.taskList.push(newTask)
    
    // this.currentId++; 

    //___________ method 2_________________________________

  //   this.taskList.push({id:this.taskList.length+1 , taskName:this.task})
  //   this.task=''
  // }

  // deleteTask(taskId:number){
  //   this.taskList = this.taskList.filter((TASK )=> TASK.id!= taskId)
  // }


// ----------------------------------------------------------------------------------------
  // name='Musk'

  // updateName(event:Event){
  //   const val = (event.target as HTMLInputElement).value
  //   this.name = val
  // }

  // -------------------------------------------------------------
  // users=['Anil', 'Sidhu', 'Sam', 'Peter', 'Bruce', 'Smith', 'Bhasker', 'Praveen', 'Vinay', 'Tony']
  // users= []
  // -------------------------------------------

  // count = signal<number>(0);

  // displayHeading = false

  // toggleValue(){
  //   // this.displayHeading=!this.displayHeading
  //   this.count.set(this.count()+1)
  // }

  // // userName = signal('Anubhab')
  // constructor() {
  //   effect (() =>{ 
  //     if(this.count() == 2){
  //       this.displayHeading=true;
  //       setTimeout(() => {
  //         this.displayHeading=false;
  //       }, 2000);
  //     }
  //     else{
  //       this.displayHeading=false;
  //     }
  //   })

  // }
// -----------------------------------------------------------------------------
  // count = signal(10);

  // updateValue(val:string){
  //   if(val == 'inc')
  //   this.count.set(this.count()+1);
  //   else if(val == 'dec' && this.count() > 0)
  //   this.count.set(this.count()-1);
  // }


//   users = ["Anil", "Sam", "Peter", "Bruce", "Tony"]

//   students=[
//       {name: 'Anil', age: 29, email: 'anil@test.com'},
//       {name: 'Sam', age: 23, email: 'sam@test.com'},
//       { name: 'Peter', age: 45, email: 'peter@test.com'},
//       { name: 'Bruce', age:10, email: 'bruce@test.com'},
// ]
//   getName(name: string){
//       console.log(name);
      
  // }
  // title = 'tutorial';
  // handleClickEvent() {
  //   alert('Button clicked!');

  //   this.otherFunction();
  // }

  // otherFunction() {
  //   alert('This is another function in the AppComponent.');
  // }
}
