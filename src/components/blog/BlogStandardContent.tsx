import SingleBlogStandard from './SingleBlogStandard';
import BlogData from '../../assets/BlogData.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface DataType {
    sectionClass?: string;
}

const BlogStandardContent = ({ sectionClass }: DataType) => {

    const { page } = useParams<{ page?: string }>();

    // Set initial page from URL
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogData.slice(startIndex, endIndex);

    return (
        <>
            <div className={`blog-area full-blog blog-standard ${sectionClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {currentBlogData.map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;