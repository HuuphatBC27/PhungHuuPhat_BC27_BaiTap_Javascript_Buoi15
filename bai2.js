function baitap2() {
  var inputKW = +document.getElementById("inputKW").value;
  var inputName = document.getElementById("inputName").value;

  var total = tinhTien(inputKW);
  if (inputKW === "" || inputName === "") {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else {
    document.getElementById("ketqua").style.display = "block";
    document.getElementById(
      "ketqua"
    ).innerHTML = `họ tên :  ${inputName}  số tiền điện là :   ${total}`;
  }
}

function tinhTien(inputKW) {
  var price = 0;
  if (inputKW <= 50) {
    price += 500 * inputKW;
  } else if (inputKW <= 100) {
    price += 500 * 50 + 650 * (inputKW - 50);
  } else if (inputKW <= 200) {
    price += 500 * 50 + 650 * 50 + 850 * (inputKW - 100);
  } else if (inputKW <= 350) {
    price += 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (inputKW - 200);
  } else {
    price +=
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (inputKW - 350);
  }

  return price;
}
