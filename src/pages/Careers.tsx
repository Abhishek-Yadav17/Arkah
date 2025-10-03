import { Helmet } from "react-helmet-async";
import LayoutV1 from "../components/layout/LayoutV1";
import ExpertiseV1 from "../components/expertise/ExpertiseV1";

const Careers = () => {
    return (
        <>
            <Helmet>
                <title>Arkah - Careers</title>
            </Helmet>

            <LayoutV1>
                <ExpertiseV1 />
            </LayoutV1>
        </>
    );
};

export default Careers;