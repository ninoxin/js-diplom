const modal = () => {
    const modal = document.querySelector('.header-modal')
    const buttons = document.querySelectorAll('a[href="#callback"]')
    const overlay = document.querySelector('.overlay')
    const closeBtn = modal.querySelector('.header-modal__close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            overlay.style.display = 'block'
        })
    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
    })

    

};

export default modal