import { animate } from "./helper"

const modal = () => {
    const doc = document.querySelector('body')
    const modalTel = document.querySelector('.header-modal--opened')
    const modalMan = document.querySelector('.services-modal--opened')
    
    const overlay = document.querySelector('.overlay')
    
    const openModal = (elem) => {
        elem.style.display = 'block';
        overlay.style.display = 'block';
        animate({
            duration: 600,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                elem.style.opacity = progress;
                elem.style.top = 50 * progress + "%";
            },
        })
    }
    const closeModal = (elem) =>{
        overlay.style.display = 'none';
        animate({
            duration: 300,
            timing(timeFraction) {
                return Math.sin(Math.acos(timeFraction));
            },
            draw(progress) {
                elem.style.opacity = progress
                if (progress === 0) {
                    elem.style.display = none
                    overlay.style.display = none
                }
            }
        })
    }



    doc.addEventListener('click', (e) =>{
        if(e.target.closest('a[href="#callback"]')){
            openModal(modalTel)
        } else if(e.target.closest('a[href="#application"]')){
            openModal(modalMan)
        } else if(e.target.closest('.header-modal__close')){
            closeModal(modalTel)
        } else if(e.target.closest('.services-modal__close')){
            closeModal(modalMan)
        }
    })
}
    

export default modal