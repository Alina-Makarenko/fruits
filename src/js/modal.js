(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    
btnEl : document.getElementById("qwert"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
refs.btnEl.addEventListener("click",onBtnClick)
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

function onBtnClick(){
    const crimson =Math.round(Math.random()* 255-1+1)
   const green =Math.round(Math.random()* 255-1+1)
      const blue =Math.round(Math.random()* 255-1+1)
document.body.style.backgroundColor=`rgb(${crimson},${green},${blue})`
}

})();







const btnEl = document.getElementById("qwert");
console.log(btnEl)
// btnEl.addEventListener("click",onBtnClick);
// function onBtnClick(){
//     const red =Math.round(Math.random()* 255-1+1)
//     console.log(red)
// }