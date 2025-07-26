import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count:number = 0;

  handleCount(val:string){
    if(val == 'minus' && this.count>0){
      this.count--;
    }
    if(val == 'plus'){
      this.count++;
    }
    if(val == 'reset'){
      this.count=0;
    }

  }
}
