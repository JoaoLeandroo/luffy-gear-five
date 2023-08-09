const buttonOpenModal = document.querySelector(".button-open-modal")
const modal = document.querySelector(".modal")
const buttonModalClose = document.querySelector(".modal-close")
const videoControls = document.querySelector(".video-play-gear-five")

buttonOpenModal.addEventListener("click", () => {
    modal.style.display = 'block'
})

buttonModalClose.addEventListener("click", () => {
    videoControls.pause()
    modal.style.display = 'none'
})



