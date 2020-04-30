import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  namajurusan1:string;
  penjelasanjurusan1:string;
  namajurusan2:string;
  penjelasanjurusan2:string;
  namajurusan3:string;
  penjelasanjurusan3:string;
  name = 'Angular';
  constructor(private router:Router){

  }
}
