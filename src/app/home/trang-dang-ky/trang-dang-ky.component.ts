import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.css']
})
export class TrangDangKyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  DangKy(value){
    console.log(value);
  }
}
