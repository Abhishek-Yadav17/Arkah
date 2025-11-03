import { useState, useRef } from 'react';
import ProcessV1 from '../process/ProcessV1';
import '../../assets/styles/ExpertiseV1.scss';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ExpertiseV1 = () => {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const toggleForm = () => {
        setShowForm(prev => !prev);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                'service_d2f5eh3',
                'template_qsd9ryc',
                formRef.current,
                '9fnsmCKxRyLmUuAFg'
            )
            .then(
                () => {
                    toast.success('Application submitted successfully!');
                    formRef.current?.reset();
                },
                (error) => {
                    toast.error('Failed to submit. Please try again.');
                    console.error('EmailJS error:', error);
                }
            );
    };

    return (
        <div className="container expertise">
            <div className="expertise-area text-center" style={{ marginTop: '2vw' }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="site-heading">
                            <h4 className="sub-title" style={{ fontSize: '2vw' }}>Why Arkah</h4>
                        </div>
                    </div>
                </div>
                <ProcessV1 />
            </div>

            <h2 style={{ fontSize: '3vw', marginTop: '5vw' }}>Where You Can Make an Impact</h2>
            <div className="custom-list-container">
                <ul className="custom-two-column-list">
                    <li><span className="line" />Subsurface & Reservoir</li>
                    <li><span className="line" />Operations & Production</li>
                    <li><span className="line" />RNG / CBG Plant Management</li>
                    <li><span className="line" />Project Execution</li>
                    <li><span className="line" />ESG & Community</li>
                    <li><span className="line" />Digital & Data</li>
                </ul>
            </div>

            <div className="apply-now-section">
                <button className="apply-btn" onClick={toggleForm}>
                    Apply Now
                </button>

                {showForm && (
                    <form ref={formRef} className="apply-form" onSubmit={handleFormSubmit}>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="tel" name="phone" placeholder="Mobile" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="position" placeholder="Position Applied For" required />
                        <input
                            type="url"
                            name="resume_link"
                            placeholder="Google Drive Resume Link"
                            required
                        />
                        <small className="file-note">* Paste your Google Drive shareable link here</small>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ExpertiseV1;
