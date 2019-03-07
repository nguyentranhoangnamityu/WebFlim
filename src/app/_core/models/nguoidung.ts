export class NguoiDung {
    public TaiKhoan: string;
    public MatKhau: string;
    public HoTen: string;
    public Email: string;
    public SoDT: string;
    // tslint:disable-next-line:no-inferrable-types
    public MaNhom: string;
    public MaLoaiNguoiDung;
    constructor(taiKhoan: string, matKhau: string, hoTen: string, email: string, soDT: string,) {
        this.TaiKhoan = taiKhoan;
        this.HoTen = hoTen;
        this.Email = email;
        this.MatKhau = matKhau;
        this.SoDT = soDT;
        this.MaNhom = 'GP02';
        this.MaLoaiNguoiDung = 'KhachHang';
    }
} 