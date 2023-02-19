var CallAPI = new callAPI();
function getEle(ele) {
  return document.getElementById(ele);
}
function getListPersonnel() {
  getEle("loader").style.display = "display";
  CallAPI.fetchListData()
    .then(function (result) {
      getEle("loader").style.display = "none";
      console.log(result.data);
      renderData(result.data);
    })
    .catch(function (error) {
      getEle("loader").style.display = "display";
      console.log(error);
    });
}
getListPersonnel();

function renderData(data) {
  var content = "";
  data.forEach(function (nhanvien) {
    content += `
    <tr>
    <td>${nhanvien.maNhanVien}</td>
    <td>${nhanvien.tenNhanVien}</td>
    <td>${nhanvien.chucVu}</td>
    <td>${nhanvien.luongCoBan}</td>
    <td></td>
    <td>${nhanvien.soGioLamTrongThang}</td>
    <td></td>
    <td>
        <button class="btn btn-danger" onclick="deletePers('${nhanvien.maNhanVien}')">Delete</button>
    </td>
</tr>`;
  });
  getEle("tableDanhSach").innerHTML = content;
}

/**
 * Delete Personnel
 */
function deletePers(maNhanVien) {
  CallAPI.deletePersonnel(maNhanVien)
    .then(function () {
      getListPersonnel();
    })
    .catch(function (error) {
      console.log(error);
    });
}
/**
 * Add Personnel
 */
function addPers() {
  var maNV = getEle("manv").value;
  var name = getEle("name").value;
  var chucVu = getEle("chucVu").value;
  var heS0ChucVu = "";
  var money = getEle("money").value;
  var timeWork = getEle("timeWork").value;
  console.log(maNV, name, chucVu, heS0ChucVu, money, timeWork);
  var nhanvien = new NhanVien(maNV, name, chucVu, heS0ChucVu, money, timeWork);
  CallAPI.addPersonnel(nhanvien)
    .then(function () {
      console.log(nhanvien);
      getListPersonnel();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function editPer(maNhanVien) {
  CallAPI.editPersonnel(maNhanVien)
    .then(function (result) {
      var nhanvien = result.data;

      getEle("manv").value = nhanvien.maNhanVien;
      getEle("name").value = nhanvien.tenNhanVien;
      getEle("chucVu").value = nhanvien.chucVu;
      getEle("money").value = nhanvien.luongCoBan;
      getEle("timeWork").value = nhanvien.soGioLamTrongThang;
      console.log(nhanvien);
    })
    .catch(function (error) {
      console.log(error);
    });
  1;
}
