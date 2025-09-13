import { ScrollToTop } from 'react-simple-scroll-up';
import { ToastContainer } from 'react-toastify';

const Dependency = () => {
    return (
        <>
            <ScrollToTop symbol={<i className="ri-arrow-up-line" />} />
            <ToastContainer />
        </>
    );
};

export default Dependency;