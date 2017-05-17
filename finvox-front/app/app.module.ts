import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; 

import { AppComponent }  from './app.component';
import { UnidadesListComponent }  from './components/unidades-list.component';


@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
  	HttpModule
   ],
  declarations: [ AppComponent, UnidadesListComponent ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
