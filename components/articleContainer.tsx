import type { NextPage } from "next";
import { Container } from "react-bootstrap";

interface SectionProps {
    children: React.ReactNode;
    title: string;
    content: string;
    text: string;
}

const ArticleContainer: NextPage<SectionProps> = ({
    children,
    title,
    content,
}) => {
    return (
        <Container fluid>
            <h2 className="fw-bolder">{title}</h2>
            <p className="lead fw-normal text-muted mb-0">{content}</p>
            {children}
        </Container>
    );
};

export default ArticleContainer;