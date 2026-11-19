import { useState, useRef } from "react";
import "./CSS/Contact.css";

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef(null);

    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log("Contact form submission:", formInputData);
        setIsSubmitted(true);
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                {isSubmitted && (
                    <div className="form-success-banner">
                        <p>Thank you! Your message has been received. We will get back to you soon.</p>
                        <button
                            type="button"
                            className="close-success-btn"
                            onClick={() => setIsSubmitted(false)}
                            aria-label="Dismiss message"
                        >
                            ✕
                        </button>
                    </div>
                )}

                <form ref={formRef} action={handleFormSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter Your Name"
                            aria-label="Your Name"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Your Email"
                            aria-label="Your Email"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="7"
                            name="message"
                            placeholder="Enter Your Message"
                            aria-label="Your Message"
                            autoComplete="off"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
