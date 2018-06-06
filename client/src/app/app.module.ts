import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubNubAngular } from 'pubnub-angular2';

/** COMPONENTS **/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

/** SERVICES **/




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'home', component: HomeComponent},
        {path: '**', redirectTo: '/home'}
    ])
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
