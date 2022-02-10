const scroll = () => {
    const scroll = document.querySelector('.smooth-scroll__img')

    const heightScroll = () => {
        let scrolled = window.pageYOffset;
        
        if (scrolled > 2) {
            scroll.style.display = 'block'
        }
        if (!scrolled) {
            scroll.style.display = 'none'
        }
    }

    const scrollTo = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -10);
            setTimeout(scrollTo, 0);
          }
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (window.pageYOffset < 400) {
            window.addEventListener('scroll', heightScroll);
        }
    })
    
    scroll.addEventListener('click', scrollTo);

}
export default scroll