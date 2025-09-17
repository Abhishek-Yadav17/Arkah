import FooterV2 from "../footer/FooterV2";
import HeaderV2 from "../header/Header";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV2 />
                {children}
                <FooterV2 sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default LayoutV1;