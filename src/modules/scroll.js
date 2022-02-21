const scroll = () => {
    const scroll = document.querySelector('.smooth-scroll'); 
    let counter = 0 
    
    window.addEventListener('scroll', () => { 
        if (window.pageYOffset < 200) { 
            scroll.style.display = "none" 
            counter++ 
        } if (window.pageYOffset > 500 && counter > 0) { 
            scroll.style.display = "block" 
        } }) 
        scroll.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: "smooth" }) }) 

}
export default scroll