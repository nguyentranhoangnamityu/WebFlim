import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';

@NgModule({
  declarations: [AdminLayoutComponent, QuanLyNguoiDungComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdminLayoutComponent, QuanLyNguoiDungComponent
  ]
})
export class AdminModule { }
