import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.css']
})
export class TrangDangKyComponent implements OnInit {
  mangNguoiDungDangKy:any[] = [];
  constructor() { }
  @ViewChild('formDangKy') formDK:NgForm;
  ngOnInit() {
  }
  CapNhat(thongTinNguoiDung){
    //Lay thong tin nguoi dung tu data-[attribute]
    let taikhoan = thongTinNguoiDung.getAttribute('data-taiKhoan');
    let matkhau = thongTinNguoiDung.getAttribute('data-matKhau');
    let email = thongTinNguoiDung.getAttribute('data-email');
    let hoten = thongTinNguoiDung.getAttribute('data-hoTen');
    let sodt = thongTinNguoiDung.getAttribute('data-soDT');
    let maloaind = thongTinNguoiDung.getAttribute('data-maLoaiND');
    //Gán lai gia tri cho form thong qua formDK.setValue
    // Giá trị gắn lại trên form must be object
    this.formDK.setValue({
      taiKhoan : taikhoan,
      matKhau : matkhau,
      email : email,
      hoTen : hoten,
      soDT : sodt,
      maLoaiND : maloaind,
    })
  }
  DangKy(value){
    this.mangNguoiDungDangKy.push(value);
    this.formDK.reset();
  }
}
