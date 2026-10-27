import "./CSS/Contact.css"


export const Contact = () => {

    const handleFormSubmit =(formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Enter Name"
                        required
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        required
                        autoComplete="off"
                    />
                    <textarea
                        className="form-control"
                        rows="10"
                        name="message"
                        placeholder="Enter Message"
                        autoComplete="off"
                        required
                    ></textarea>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </section >
    )
}