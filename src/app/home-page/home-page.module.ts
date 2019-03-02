import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { ShowingMovieComponent } from './showing-movie/showing-movie.component';
import { UpComingMovieComponent } from './up-coming-movie/up-coming-movie.component';
import { ItemMovieComponent } from './item-movie/item-movie.component';
import { NewsComponent } from './news/news.component';
import { MovieIndustryComponent } from './movie-industry/movie-industry.component';
import { ReviewComponent } from './review/review.component';
import { DiscountComponent } from './discount/discount.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInforComponent } from './contact-infor/contact-infor.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    SliderComponent, 
    MovieTypeComponent, 
    ShowingMovieComponent, 
    UpComingMovieComponent, 
    ItemMovieComponent, 
    NewsComponent, 
    MovieIndustryComponent, 
    ReviewComponent, 
    DiscountComponent, 
    ContactComponent, 
    ContactFormComponent, 
    ContactInforComponent, 
    HomePageComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent, 
    SliderComponent, 
    MovieTypeComponent, 
    ShowingMovieComponent, 
    UpComingMovieComponent, 
    ItemMovieComponent, 
    NewsComponent, 
    MovieIndustryComponent, 
    ReviewComponent, 
    DiscountComponent, 
    ContactComponent, 
    ContactFormComponent, 
    ContactInforComponent,
    HomePageComponent
  ]
})
export class HomePageModule { }
