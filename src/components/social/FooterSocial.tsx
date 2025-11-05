import { Link } from "react-router-dom";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link className="twitter" to="https://x.com/arkahenergies?s=11" target="_blank">
                    <i className="ri-twitter-x-fill" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.linkedin.com/company/arkah/?viewAsMember=true" target="_blank">
                    <i className="ri-linkedin-fill" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.instagram.com/arkahenergies?igsh=MXR6czR1bTNyMnRwbQ%3D%3D&utm_source=qr" target="_blank">
                    <i className="ri-instagram-fill" />
                </Link>
            </li>
        </>
    );
};

export default FooterSocial;