import 'particles.js';

function initParticles() {
    const selectorId = 'mb-particles-id';
    const particlesConfig = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 600,
                },
            },
            color: {
                value: '#62666c',
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000',
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 4,
                random: false,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#62666c',
                opacity: 0.5,
                width: 2,
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: false,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 250,
                    duration: 0.5,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };

    if (document.querySelector(`#${selectorId}`)) {
        window.particlesJS(selectorId, particlesConfig);
    }
}

export default initParticles;
