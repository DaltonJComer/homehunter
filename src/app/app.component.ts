import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homehunter';
  constructor(db: AngularFireDatabase){} // here you can do stuff with lists
}
