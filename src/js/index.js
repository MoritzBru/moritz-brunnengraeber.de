import 'creepyface';

import initBootstrap from './mb/bootstrap';
import initGmaps from './mb/maps';
import initParticles from './mb/particles';
import initScrollReveal from './mb/scrollReveal';
import initLightbox from './mb/lightbox';
import initContact from './mb/contact';
import initUserTimings from './mb/userTimings';

function init() {
    initBootstrap();
    initContact();
    initParticles();
    initScrollReveal();
    initLightbox();
    initGmaps();
    initUserTimings();
}

init();
