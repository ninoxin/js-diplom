const slider = () => {
    const sliderBlock = document.querySelector('.benefits-wrap')
    const slides = document.querySelectorAll('.benefits__item')
    
    const prevSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.add(strClass)
        })
    }

    const nextSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.remove(strClass)
        })
    }
    
}
export default slider