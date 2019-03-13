import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './index/index.component';
import { TrangDatGheComponent } from './trang-dat-ghe/trang-dat-ghe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhimComponent } from './phim/phim.component';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyPhimComponent } from '../admin/quan-ly-phim/quan-ly-phim.component';
import { PipeModule } from 'src/app/_core/pipe/pipe/pipe.module';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';


const homeRoute: Routes = [{
  path: '', component: HomeLayoutComponent, children: [
    {path: '', component: QuanLyPhimComponent},
    { path: 'dangky', component: TrangDangKyComponent},
    { path: 'dangnhap', component: TrangDangNhapComponent},
    { path: 'index', component: IndexComponent},
    { path: 'danhsachphim', component: QuanLyPhimComponent},
    { path: 'chitiet/:id', component: PhimComponent},
    { path: 'chitietphim', component: PhimComponent},
    { path: 'lichchieu', component: LichChieuComponent},

  ]
}];

@NgModule({
  declarations: [
    HomeLayoutComponent,
    IndexComponent,
    TrangDatGheComponent,
    HeaderComponent,
    FooterComponent,
    PhimComponent,
    TrangDangKyComponent,
    TrangDangNhapComponent,
    QuanLyPhimComponent,
    LichChieuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(homeRoute),
    PipeModule
  ]
})
export class HomeModule { }
