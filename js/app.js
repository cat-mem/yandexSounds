gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
})

gsap.fromTo('.hero-content', { opacity: 1 }, {
    opacity: -1, scrollTrigger: {
        trigger: '.hero-content',
        start: 'center',
        end: 'bottom',
        scrub: true
    }
})

gsap.fromTo('.container__left .gallery__item', { x: -100, y: 100, opacity: 0 }, {
    opacity: 2, x: 0, y: 0, scrollTrigger: {
        trigger: '.gallery__item',
        scrub: true
    }
})

gsap.fromTo('.container__right .gallery__item', { x: 100, y: 100, opacity: 0 }, {
    opacity: 2, x: 0,y: 0, scrollTrigger: {
        trigger: '.gallery__item',
        scrub: true
    }
})





document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${( e.clientX - window.innerWidth / 2 ) * -.005}deg;
            --move-y: ${( e.clientY - window.innerHeight / 2 ) * -.01}deg;
        `
    })
})