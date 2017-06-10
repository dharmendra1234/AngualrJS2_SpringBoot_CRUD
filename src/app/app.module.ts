import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

{ path: '',component :ListComponent},
{ path: 'customer/add',component :AddComponent},
{ path: 'UpdateCustomer/:id',component :UpdateComponent},
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
