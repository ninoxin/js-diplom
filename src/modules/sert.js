import { animate } from "./helper"

const sert = () => {
    const sectionDoc = document.getElementById('documents')
    const sertBlocks = sectionDoc.querySelectorAll('.text-center > div')
    const sertModal = document.querySelector('.sert-modal--opened')
    const sertClose = document.querySelector('.sert-close')


    const overlay = document.querySelector('.overlay')

    

    sertBlocks.forEach((sertBlock) => {
       let sertLink = sertBlock.querySelector('a')

        sertLink.addEventListener('click', (e) => {
            e.preventDefault()
            sertModal.style.display = 'block'
            overlay.style.display = 'block'
            animate({
                duration: 600,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    sertModal.style.opacity = progress;
                    sertModal.style.top = 50 * progress + "%";
                },
            })
        })
    })
    sertClose.addEventListener('click', () =>{
        sertModal.style.display = 'none'
        overlay.style.display = 'none'
    })

}

export default sert