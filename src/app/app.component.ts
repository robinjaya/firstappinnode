import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Robin';
  newtitle = 'First Angular Ex';
  openDialog()
  {
  	alert('hi');
  }
}
