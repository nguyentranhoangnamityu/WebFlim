import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.css']
})
export class LichChieuComponent implements OnInit, OnDestroy {

  subParam: Subscription;
  phim: any = {};
  constructor(private atvRoute: ActivatedRoute, private phimService: PhimService, private title: Title) { }

  ngOnInit() {
    this.subParam = this.atvRoute.queryParams.subscribe((thamso) => {
      this.LayThongTinPhim(thamso.MaPhim);
      this.title.setTitle(thamso.TenPhim);
    });
  }

  LayThongTinPhim(maPhim) {
    // Lấy thông tin phim từ service
    this.phimService.layThongTinPhim(maPhim).subscribe((data) => {
      console.log(data);
      this.phim = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
  }

}
