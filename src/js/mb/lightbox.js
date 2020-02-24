function initLightbox() {
    const { Tobi } = window;
    if (!Tobi) { return; }
    // eslint-disable-next-line no-unused-vars
    const tobi = new Tobi({
        selector: '[data-lightbox]',
        docClose: false,
    });
}

export default initLightbox;
