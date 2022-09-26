import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice_day1';

  changeTitle(event: Event){
    this.title = (event.target as HTMLInputElement).value;
  }
}
