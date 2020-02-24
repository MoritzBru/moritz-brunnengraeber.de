function init404() {
    const { gsap } = window;
    if (!gsap) { return; }

    const selectors = {
        id4: '#_404__4',
        id40: '#_404__40',
        id404: '#_404__404',
        svg4: {
            bottom: (id) => `${id} ._4__bottom`,
            slant: (id) => `${id} ._4__slant`,
            hz: (id) => `${id} ._4__hz`,
            top: (id) => `${id} ._4__top`,
        },
        svg0: {
            circle: (id) => `${id} ._0__circle`,
            highlight: (id) => `${id} ._0__highlight`,
        },
    };
    const tlDefaults = {
        defaults: {
            duration: 1,
            ease: 'power2.inOut',
        },
    };

    function getTimelineAnimate4(id) {
        const tl = gsap.timeline(tlDefaults);
        tl
            .from(selectors.svg4.top(id), { yPercent: 100 })
            .fromTo(selectors.svg4.hz(id), { yPercent: 100, scaleX: 0.5, transformOrigin: 'right center' }, { yPercent: 0 }, '<')
            .to(selectors.svg4.hz(id), { scaleX: 1 }, '>')
            .from(selectors.svg4.slant(id), { scale: 0, transformOrigin: 'right bottom' }, '<0.2');
        return tl;
    }

    function getTimelineAnimate0(id) {
        const tl = gsap.timeline(tlDefaults);
        tl
            .from(selectors.svg0.circle(id), { scale: 0.5, transformOrigin: 'right bottom', duration: 1.5 })
            .from(selectors.svg0.highlight(id), { scale: 0, transformOrigin: 'right bottom' }, '<0.7');
        return tl;
    }

    const tl4 = getTimelineAnimate4(selectors.id4);
    const tl40 = getTimelineAnimate0(selectors.id40);
    const tl404 = getTimelineAnimate4(selectors.id404);

    const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 2,
    });
    tl
        .add(tl4, '+=0')
        .add(tl40, '<0.5')
        .add(tl404, '<0.5');
}

export default init404;
