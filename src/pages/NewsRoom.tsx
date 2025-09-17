import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../components/layout/LayoutV1";
import BlogStandardContent from "../components/blog/BlogStandardContent";

const NewsRoom = () => {
    return (
        <>
            <Helmet>
                <title>Arkah - News Room</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='News Room' breadCrumb='blog-standard-light' />
                <BlogStandardContent sectionClass='default-padding-bottom' />
            </LayoutV1>
        </>
    );
};

export default NewsRoom;