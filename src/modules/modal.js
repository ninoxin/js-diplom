const modal = () => {
    const doc = document.querySelector('body')
    const modalTel = document.querySelector('.header-modal--opened')
    const modalMan = document.querySelector('.services-modal--opened')
    
    const overlay = document.querySelector('.overlay')
    
    const openModal = (elem) => {
        elem.style.display = 'block'
        overlay.style.display = 'block' 
    }
    const closeModal = (elem) =>{
        elem.style.display = 'none'
        overlay.style.display = 'none'
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