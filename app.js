const container = document.querySelector(".container");
const seat = document.querySelector(".row-seat");
const changes = document.getElementById("movie");
const count = document.getElementById("count");
const amount = document.getElementById("amount");

//*olay izleyiciler
container.addEventListener("click", tikla);
changes.addEventListener("change", degisti);
function tikla(e) {
  const eleman = e.target;
  if (
    eleman.classList.contains("row-seat") &&
    !eleman.classList.contains("reserved")
  ) {
    eleman.classList.toggle("selected"); //*eğer tıklanılan elemanda selected kılası varsa çıkar yoksa ekle dedik toggle sayesinde
    hesaptoplam();
  }
}
function degisti() {
  hesaptoplam();
}

function hesaptoplam() {
  let selectCount = container.querySelectorAll(".row-seat.selected").length;
  let price = changes.value;
  count.innerText = selectCount;

  amount.innerText = selectCount * price + "₺";
}
