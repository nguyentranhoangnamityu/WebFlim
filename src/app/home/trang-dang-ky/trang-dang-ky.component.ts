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
  DangKy(value){
    this.mangNguoiDungDangKy.push(value);
    this.formDK.reset();
  }
}
