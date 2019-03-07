import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from 'src/app/services/nguoidung.service';

@Component({
  selector: 'app-trang-dang-nhap',
  templateUrl: './trang-dang-nhap.component.html',
  styleUrls: ['./trang-dang-nhap.component.css']
})
export class TrangDangNhapComponent implements OnInit {

  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
  }
  DangNhap(thongTinDangNhap: any) {
    console.log(thongTinDangNhap);
    this.nguoiDungService.dangNhap(thongTinDangNhap.TaiKhoan, thongTinDangNhap.MatKhau)
      .subscribe((data) => {
        if (typeof data === 'object') {
          // Thành công: Lưu vào localstorage;
          const sUserLogin: string = JSON.stringify(data);
          localStorage.setItem('userLogin', sUserLogin);
        } else {
          alert(data);
        }
      });
  }

}
