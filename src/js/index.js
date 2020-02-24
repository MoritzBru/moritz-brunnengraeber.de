import init404 from './mb/404';
import initBootstrap from './mb/bootstrap';
import initMap from './mb/maps';
import initParticles from './mb/particles';
import initScrollReveal from './mb/scrollReveal';
import initLightbox from './mb/lightbox';
import initContact from './mb/contact';

function init() {
    initBootstrap();
    initMap();
    initContact();
    initParticles();
    initScrollReveal();
    initLightbox();
    init404();
}

document.addEventListener('DOMContentLoaded', init);
