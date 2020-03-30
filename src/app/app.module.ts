import { AppGlobalErrorHandler } from './../assets/appGlobalErrorHandler';
import { ErrorHandler } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from '../Http/interceptor';
import { DemoService } from '../Service/demo.service';
import { Context } from '../Service/DNN/context.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // important - this changed in Angular 4.3 
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},     
      {path:'list', component: ListComponent},
      {path:'detail/:id/:Title', component: DetailComponent},
      {path:'detail', component: DetailComponent},
      
      {path:'**', component: NotfoundComponent}

    ])
  ],
  providers: [    
    Context,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    DemoService,
    {provide: ErrorHandler, useClass: AppGlobalErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
