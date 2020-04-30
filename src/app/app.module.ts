import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {Routes , RouterModule} from  '@angular/router';
import {Router} from '@angular/router';
import { HomeComponent } from './home/home.component';


const ROUTES: Routes =[
  {path : 'edit', component : EditComponent},
  {path : 'list', component : ListComponent},
  {path : 'input', component: InputComponent},
  {path : '', component: HomeComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, InputComponent, ListComponent, EditComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
