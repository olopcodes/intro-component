const inputFields = document.querySelectorAll(" input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputFields.forEach((input) => {
    if (input.value.length === 0) {
      input.closest("div").querySelector("p").classList.remove("d-none");
      setTimeout(() => {
        input.closest("div").querySelector("p").classList.add("d-none");
      }, 1000);
    }
  });
});
