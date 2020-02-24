function initScrollReveal() {
    const { ScrollReveal } = window;
    if (!ScrollReveal) { return; }

    const selectors = {
        bpMd: '--breakpoint-md',
        revealPrefix: '.mb-js-reveal-',
        directions: ['left', 'right', 'top', 'bottom'],
        icon: 'icons',
    };

    selectors.directions.forEach((direction) => {
        const selector = `${selectors.revealPrefix}${direction}`;
        const options = {
            origin: direction,
            distance: '2em',
            duration: 1000,
            reset: true,
        };
        ScrollReveal().reveal(selector, options);
    });

    const breakpointMd = getComputedStyle(document.documentElement).getPropertyValue(selectors.bpMd);
    const isSmall = window.matchMedia(`(max-width: ${breakpointMd})`).matches;
    const delay = isSmall ? null : 150;

    ScrollReveal().reveal(`${selectors.revealPrefix}${selectors.icon}`, {
        duration: 800,
        scale: 0.3,
        reset: true,
        interval: delay,
    });
}

export default initScrollReveal;
