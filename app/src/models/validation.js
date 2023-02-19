function getEle(ele) {
  return document.getElementById(ele);
}
var tbID = getEle("tbMaNhanVien");
var tbName = getEle("tbTenNhanVien");
var tbChucVu = getEle("tbChucVu");
var tbMoney = getEle("tbLuongCoBan");
var tbTimeWork = getEle("tbSoGioLam");

/**
 *
 *
 */
/**
 * Check mã nhân viên
 */
function validId() {
  var idPer = getEle("manv").value;
  if (idPer.length >= 7 || idPer.length <= 3) {
    tbID.innerHTML = "Vui lòng nhập từ 4 -> 6 ký tự!";
    return false;
  }
  tbID.innerHTML = "";
  return true;
}
/**
 * Check tên nhân viên
 */
function validName() {
  var namePer = getEle("name").value;
  var letter =
    "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
  if (namePer.match(letter)) {
    tbName.innerHTML = "";
    return true;
  }
  tbName.innerHTML = "Vui lòng nhập đúng họ tên!";
  return false;
}
/**
 * Check lương nhân viên
 */
function validMoney() {
  var moneyPer = getEle("money").value;
  if (moneyPer < 1000000 || moneyPer > 20000000) {
    tbMoney.innerHTML = "Vui lòng kiểm tra!";
    return false;
  }
  tbMoney.innerHTML = "";
  return true;
}
/**
 * Check thoi gian lam viec
 */
function validTimeWork() {
  var timeWorkPer = getEle("timeWork").value;
  if (timeWorkPer <= 50 || timeWorkPer >= 150) {
    console.log(tbTimeWork);
    tbTimeWork.innerHTML = "Số giờ không hợp lệ ! ";
    return false;
  }
  tbTimeWork.innerHTML = "";
  return true;
}
