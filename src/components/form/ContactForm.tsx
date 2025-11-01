import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_d2f5eh3",
                "template_jmmmc7i",
                formRef.current,
                "9fnsmCKxRyLmUuAFg"
            )
            .then(
                () => {
                    toast.success("Thanks for your email!");
                    formRef.current?.reset();
                },
                (error) => {
                    toast.error("Failed to send. Please try again.");
                    console.error("EmailJS error:", error);
                }
            );
    };

    return (
        <form ref={formRef} className="contact-form" onSubmit={handleForm}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control no-arrows" id="phone" name="phone" placeholder="Phone" type="number" required />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group comments">
                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" required />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button type="submit" id="submit">
                        <i className="ri-send-plane-line" /> Get in Touch
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
