import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { TrangDatGheComponent } from './trang-dat-ghe/trang-dat-ghe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhimComponent } from './phim/phim.component';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const homeRoute: Routes = [{
  path: '', component: HomeLayoutComponent, children: [
    { path: 'dangky', component: TrangDangKyComponent},
    { path: 'dangnhap', component: TrangDangNhapComponent}
  ]
}];

@NgModule({
  declarations: [
    HomeLayoutComponent,
    IndexComponent,
    DetailComponent,
    TrangDatGheComponent,
    HeaderComponent,
    FooterComponent,
    PhimComponent,
    TrangDangKyComponent,
    TrangDangNhapComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(homeRoute),
  ],
  exports: [
    HomeLayoutComponent,
    IndexComponent,
    DetailComponent,
    TrangDatGheComponent,
    HeaderComponent,
    FooterComponent,
    PhimComponent,
    TrangDangKyComponent,
    TrangDangNhapComponent
  ]
})
export class HomeModule { }
