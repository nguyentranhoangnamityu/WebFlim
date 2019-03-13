import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { RouterModule, Routes } from '@angular/router';
const adminRoutes:Routes = [
  {path: '', component: AdminLayoutComponent, children:[
    {path: 'quanlyphim', component: QuanLyPhimComponent},
  ]}
]
@NgModule({
  declarations: [
  AdminLayoutComponent, 
  QuanLyNguoiDungComponent, 
  QuanLyPhimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
