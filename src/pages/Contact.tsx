import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactV1 from "../components/contact/ContactV1";
import LayoutV1 from "../components/layout/LayoutV1";
// import ContactMap from "../components/map/ContactMap";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Contact Us Light</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Get In Touch' breadCrumb='contact-us-light'  />
                <ContactV1 />
                {/* <ContactMap /> */}
            </LayoutV1>
        </>
    );
};

export default Contact;