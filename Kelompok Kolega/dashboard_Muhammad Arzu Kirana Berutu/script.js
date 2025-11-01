const menuItems = document.querySelectorAll(".menu-item");
const btnTambah = document.querySelector(".btn-tambah");
const btnAdd = document.querySelector(".btn-add");
const notif = document.querySelector(".notif");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

btnTambah.addEventListener("click", function () {
  alert("Fitur tambah gym");
});

btnAdd.addEventListener("click", function () {
  alert("Fitur tambah gym");
});

notif.addEventListener("click", function () {
  alert("Tidak ada notifikasi");
});
