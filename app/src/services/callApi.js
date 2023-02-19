function callAPI() {
  this.fetchListData = function () {
    return axios({
      //   url: "https://63df6fcb59bccf35dab340bf.mockapi.io/api/nhanvien",
      url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien",
      method: "GET",
    });
  };
  this.deletePersonnel = function (maNhanVien) {
    return axios({
      url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
      method: "DELETE",
    });
  };
  this.addPersonnel = function (nhanvien) {
    return axios({
      url: "http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien",
      method: "POST",
      data: nhanvien,
    });
  };
  this.editPersonnel = function (maNhanVien) {
    return axios({
      url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
      method: "GET",
    });
  };
}
