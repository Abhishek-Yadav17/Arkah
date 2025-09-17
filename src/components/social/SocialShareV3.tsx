import { Link } from "react-router-dom";

const SocialShareV3 = () => {
    return (
        <>
            <li>
                <Link className="facebook" to="https://www.facebook.com/" target="_blank">
                    <i className="ri-facebook-fill" />
                </Link>
            </li>
            <li>
                <Link className="twitter" to="https://www.x.com" target="_blank">
                    <i className="ri-twitter-x-fill" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.pinterest.com/" target="_blank">
                    <i className="ri-pinterest-fill" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.linkedin.com/" target="_blank">
                    <i className="ri-linkedin-fill" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV3;