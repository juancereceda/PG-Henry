import React, { useState } from 'react';
import { adminContact } from '../../actions/FAQs';
import { StyledContainer } from './styles';
import swal from 'sweetalert';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const submitForm = await swal(`${form.name}, are you sure this message:
        " ${form.message} " ?`, {
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (submitForm) {
            await adminContact(form);
            await swal("Message sent! Thanks for your feedback", {
            icon: "success",
            buttons: false,
            timer: 2000,
        });
            setForm({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        };

    }
    const handleChange = async e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <StyledContainer>
            <form id="contact" action="" method="post" onSubmit={handleSubmit} onChange={handleChange}>
                <h3>Contact with us!</h3>
                <h4>Contact us today, and get reply with in 24 hours!</h4>
                <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus name='name' value={form.name} />
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required name='email' value={form.email} />
                </fieldset>
                <fieldset>
                    <input placeholder="Your Phone Number" type="tel" tabindex="3" required name='phone' value={form.phone} />
                </fieldset>
                <fieldset>
                    <input placeholder="Subject" type="text" tabindex="4" required name='subject' value={form.subject} />
                </fieldset>
                <fieldset>
                    <textarea placeholder="Message..." tabindex="5" required name='message' value={form.message} />
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </StyledContainer>
    )
}

export default Contact;

