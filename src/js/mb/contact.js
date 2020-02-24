function initContact() {
    const selectors = {
        form: '.mb-js-contact-form',
        feedback: '.mb-js-contact__feedback',
    };

    const formDomEl = document.querySelector(selectors.form);
    if (!formDomEl) { return; }

    const classes = {
        wasValidated: 'was-validated',
    };

    const requestUrl = 'https://api.emailjs.com/api/v1.0/email/send-form';

    const requestData = {
        service_id: 'default_service',
        template_id: 'contact_form',
        user_id: 'user_VBLpCUz3kaZKJLYSgywB6',
    };

    const feedback = {
        ok: {
            message: 'Contact form successfully submitted. Thank you!',
            type: 'success',
        },
        error: {
            message: 'There was an error while submitting the form.<br>',
            type: 'danger',
        },
        sending: {
            message: '<div class="spinner-border text-primary" role="status"><span class="sr-only">Sending...</span></div><br>Sending mail...',
            type: 'primary',
        },
    };

    const getAlert = (type, message) => `<div class="alert alert-${type} alert-dismissable fade show"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>${message}</div>`;

    function setFeedback(type, message) {
        const feedbackDomEl = document.querySelector(selectors.feedback);
        if (!feedbackDomEl) { return; }
        feedbackDomEl.innerHTML = getAlert(type, message);
    }

    function onFormReset() {
        this.classList.remove(classes.wasValidated);
        this.reset();
    }

    function sendFormRequest(form) {
        const formData = new FormData(form);
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(requestData)) {
            formData.append(key, value);
        }
        const options = {
            method: 'POST',
            body: formData,
        };
        setFeedback(feedback.sending.type, feedback.sending.message);
        fetch(requestUrl, options)
            .then((response) => {
                if (!response.ok) {
                    throw response;
                }
                setFeedback(feedback.ok.type, feedback.ok.message);
                onFormReset.call(form);
            })
            .catch((response) => {
                if (response.text) {
                    response.text().then((error) => {
                        setFeedback(feedback.error.type, `${feedback.error.message}${error}`);
                    });
                } else {
                    setFeedback(feedback.error.type, feedback.error.message);
                }
            });
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (this.checkValidity() === false) {
            event.stopPropagation();
        }
        this.classList.add(classes.wasValidated);
        if (this.checkValidity() === true) {
            sendFormRequest(this);
        }
    }

    formDomEl.addEventListener('submit', onFormSubmit);
    formDomEl.addEventListener('reset', onFormReset);
}

export default initContact;
