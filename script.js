const modal = document.querySelector(".modalView");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

function openModelfn() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", openModelfn);
}

// we can make a close model function

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

const closeModelFn = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModelFn);
overlay.addEventListener("click", closeModelFn);
