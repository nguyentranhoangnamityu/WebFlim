import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NguoiDung} from '../../../_core/models/nguoidung'
import Swal from 'sweetalert2';
import {NguoiDungService} from '../../../_core/services/nguoidung.service';
@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.css']
})
export class TrangDangKyComponent implements OnInit {
  mangNguoiDungDangKy:NguoiDung[] = [];
  constructor(private nguoiDungService: NguoiDungService) { }
  @ViewChild('formDangKy') formDK:NgForm;
  ngOnInit() {
  }
  DangKy(nguoiDung: NguoiDung) {
    nguoiDung.MaNhom = 'GP02';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    this.nguoiDungService.dangKy(nguoiDung).subscribe((data) => {
      if (typeof data === 'object') {
        Swal.fire('Thông báo!', 'Chúc mừng bạn đăng ký thành công!', 'success');
        this.formDK.reset();
      } else {
        Swal.fire('Thông báo!', data , 'warning');
      }
    });
  }
}
