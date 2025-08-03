(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-element-open]"),
    closeModalBtn: document.querySelector("[data-element-close]"),
    modal: document.querySelector("[data-element]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();