const jquery = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>';
const bootstrap = '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js" integrity="sha256-OUFW7hFO0/r5aEGTQOz9F/aXQOt+TwqI1Z4fbVvww04=" crossorigin="anonymous"></script>';
const fontawesome = '<script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossorigin="anonymous"></script>';
const creepyface = '<script src="https://cdn.jsdelivr.net/npm/creepyface@7.1.6/dist/creepyface.umd.js" integrity="sha256-i3RUwLJur6Bc5TsF59/begBn7M+oJ6wyzSRSbSXAJg0=" crossorigin="anonymous"></script>';
const particles = '<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js" integrity="sha256-+u54FaX9J+k40eAcg5K2YzICSQjrEYBI9gju5nE3HfY=" crossorigin="anonymous"></script>';
const lightbox = '<script src="https://cdn.jsdelivr.net/npm/@rqrauhvmra/tobi@1.9.0/js/tobi.min.js" integrity="sha256-pDCXvswfgHZL8/KuBFEXt5jYB9BBIYRhq543ywMpBoc=" crossorigin="anonymous"></script>';
const scrollreveal = '<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.5/scrollreveal.min.js" integrity="sha256-8VU/+18Z5eyYrv12HuV6lH74T2PFmP1ggKi+JkwYDHE=" crossorigin="anonymous"></script>';
const gsap = '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js" integrity="sha256-cyEXrJKjO3YNkpCjPxVBdi7pRJ3EF+okm1oN9Qc4rRY=" crossorigin="anonymous"></script>';
const gmaps = '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeJbsLO30Ip1EaPqx9HuC363gT2r7WanA" defer></script>';
const recaptcha = '<script src="https://www.google.com/recaptcha/api.js" async defer></script>';

const js = {
    all: [
        jquery,
        bootstrap,
        fontawesome,
    ],
    index: [
        creepyface,
        particles,
        scrollreveal,
        lightbox,
        gmaps,
        recaptcha,
    ],
    404: [
        gsap,
    ],
};

module.exports = {
    js,
};
