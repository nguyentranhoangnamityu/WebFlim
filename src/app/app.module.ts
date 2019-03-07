import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeModule } from './module/home/home.module';
import { AdminModule } from './module/admin/admin.module';
import { Routes, RouterModule } from '@angular/router';


const appRouter:Routes = [
  {path: 'home', loadChildren: () => HomeModule},
  {path: '', loadChildren: ()=> HomeModule},
  {path: 'admin', loadChildren: ()=> AdminModule}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
