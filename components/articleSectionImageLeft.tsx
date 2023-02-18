import type { NextPage } from "next";
import { Image } from "react-bootstrap";

interface SectionProps {
    title: string;
    text: string;
    imageLocation: string;
    belowText: string;
}

const ArticleSectionImageLeft: NextPage<SectionProps> = ({
    title,
    text,
    belowText,
    imageLocation,
}) => {
    return (
        <section className="py-5" id="scroll-target">
            <div className="container px-3 my-3">
                <div className="row gx-3 align-items-center">
                    <div className="col-lg-6 ">
                        <Image
                            className="img-fluid rounded mb-5 mb-lg-0"
                            src={imageLocation}
                            alt="..."
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">{title}</h2>
                        <p className="lead fw-normal text-muted mb-0">{text}</p>
                    </div>
                </div>
                <p className="lead fw-normal text-muted mb-0">{belowText}</p>
            </div>
        </section>
    );
};

export default ArticleSectionImageLeft;