const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnOpenModel = document.querySelectorAll(".show-model");

const closeModel = () => {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModel = () => {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener("click", openModel);

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
