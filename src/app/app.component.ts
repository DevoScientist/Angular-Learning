import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  handleClickEvent() {
    alert('Button clicked!');

    this.otherFunction();
  }

  otherFunction() {
    alert('This is another function in the AppComponent.');
  }
}
