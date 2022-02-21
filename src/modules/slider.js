import { animate } from "./helper"

const slider = () => {
    
    const sliderBlocks = document.querySelectorAll('.slider')

    
    const getToSlide = (sliderBlock) => {
        const sliderAll = document.querySelectorAll(`.${sliderBlock.id}__item`);
            let slides = []
            let slide1 = []
            let slide2 = []

            sliderAll.forEach(slide => {
                if (slide.classList.contains('no-active')) {
                    slide2.push(slide)
                } else slide1.push(slide)
            })
            slides.push(slide1)
            slides.push(slide2)
            return {slides}
    }

    const prevSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.add(strClass)
            animate({
                duration: 800,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    slide.style.opacity = progress;
                },
            })
        })
    }

    const nextSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.remove(strClass)
            animate({
                duration: 800,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    slide.style.opacity = progress;
                },
            })
        })
    }

    sliderBlocks.forEach((sliderBlock) => {
        sliderBlock.addEventListener('click', (e) => {

            let slides = getToSlide(sliderBlock).slides
            let currentSlide = 0

            if (!e.target.closest('.arrows')) {
                return
            }
           
            prevSlide(slides, currentSlide, 'no-active')

            if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {
                currentSlide++;
                
            } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {
                currentSlide--;
            }
            if (currentSlide >= slides.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - 1
            }        
            
            nextSlide(slides, currentSlide, 'no-active')
        })
    })
}
export default slider