function baitap1() {
  var diem1 = +document.getElementById("point1").value;
  var diem2 = +document.getElementById("point2").value;
  var diem3 = +document.getElementById("point3").value;
  var khuVuc = document.getElementById("area").value;
  var diemChuan = +document.getElementById("inputScore1").value;
  var doiTuong = document.getElementById("subject").value;
  var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
  var tongDiem = diem1 + diem2 + diem3;
  var diemTongKet = tongDiem + diemDoiTuong + diemKhuVuc;
  hienra(diem1, diem2, diem3, diemTongKet, diemChuan);
}

function tinhDiemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
}

function tinhDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

function hienra(diem1, diem2, diem3, diemTongKet, diemChuan) {
  if (!diem1 || !diem2 || !diem3 || !diemChuan) {
    document.getElementById("tong").style.display = "block";
    document.getElementById("tong").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diemTongKet < diemChuan) {
    document.getElementById("tong").style.display = "block";
    document.getElementById("tong").innerHTML = "Rớt vì không đủ điểm chuẩn ";
  } else {
    document.getElementById("tong").style.display = "block";
    document.getElementById(
      "tong"
    ).innerHTML = `chúc mừng bạn đã đậu : ${diemTongKet}`;
  }
}
