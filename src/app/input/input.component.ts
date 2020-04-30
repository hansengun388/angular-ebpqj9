import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  namajurusan1:string;
  penjelasanjurusan1:string;
  namajurusan2:string;
  penjelasanjurusan2:string;
  namajurusan3:string;
  penjelasanjurusan3:string;
  Pesan=' ';
  pesan1=' ';
  pesan2=' ';
  pesan3=' ';
  pesan4=' ';
  pesan5=' ';
  KlikButton(){
    this.Pesan=this.namajurusan1;
    this.pesan1=this.penjelasanjurusan1;
    this.pesan2=this.namajurusan2;
    this.pesan3=this.penjelasanjurusan2;
    this.pesan4=this.namajurusan2;
    this.pesan5=this.penjelasanjurusan2;
  }
}