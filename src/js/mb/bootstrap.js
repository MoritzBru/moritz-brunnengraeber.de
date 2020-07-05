/* eslint-disable import/first */
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

import 'popper.js';
import 'bootstrap';

function initBootstrap() {
    const selectors = {
        scrollspy: {
            spy: 'body',
            target: '.mb-nav',
            active: '.mb-nav__list-link.active',
        },
        tooltips: '[data-toggle="tooltip"]',
        nav: {
            link: '.mb-nav__list-link',
            collapse: '#navbarResponsive',
        },
    };

    $(selectors.scrollspy.spy).scrollspy({
        target: selectors.scrollspy.target,
    });
    $(window).on('activate.bs.scrollspy', (e, obj) => {
        // eslint-disable-next-line no-restricted-globals
        history.replaceState(null, null, obj.relatedTarget);
    });

    $(selectors.tooltips).tooltip();

    $(selectors.nav.link).click(() => {
        $(selectors.nav.collapse).collapse('hide');
    });
}

export default initBootstrap;
