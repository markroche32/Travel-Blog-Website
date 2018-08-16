import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  ngOnInit() {

    if (isDevMode()) {
      console.log(' Development!');
      console.log("dev environment api url  " + environment.apiUrl);
    } else {
      console.log(' Production!');
    }
  }
}
