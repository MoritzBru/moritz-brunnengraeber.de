import 'creepyface';

import init404 from './mb/404';
import initBootstrap from './mb/bootstrap';
import initMap from './mb/maps';
import initParticles from './mb/particles';
import initScrollReveal from './mb/scrollReveal';
import initLightbox from './mb/lightbox';
import initContact from './mb/contact';

function init() {
    initBootstrap();
    initContact();
    initParticles();
    initScrollReveal();
    initLightbox();
    window.initMap = initMap; // will be called once google maps is loaded
    init404();
}

init();
