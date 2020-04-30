import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  test1='';
  ngOnInit() {
    this.test1=InputComponent.namajurusan1;
  }
  namajurusan1:string;
  penjelasanjurusan1:string;
  namajurusan2:string;
  penjelasanjurusan2:string;
  namajurusan3:string;
  penjelasanjurusan3:string;
}