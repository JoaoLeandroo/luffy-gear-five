const buttonOpenModal = document.querySelector(".button-open-modal")
const modal = document.querySelector(".modal")
const buttonModalClose = document.querySelector(".modal-close")

buttonOpenModal.addEventListener("click", () => {
    modal.style.display = 'block'
})

buttonModalClose.addEventListener("click", () => {
    modal.style.display = 'none'
})