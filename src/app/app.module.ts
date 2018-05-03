import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from '@angular/http'
import { AppComponent }  from './app.component';
import { UserComponent } from './Components/Tag/Tag.component'
import { HobbiesComponent } from './Components/Hobbies/Hobbies.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, UserComponent, HobbiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
