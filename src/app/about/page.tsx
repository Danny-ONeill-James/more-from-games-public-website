"use client";
import { NextPage } from 'next';
import { Card, Row, Col, Container, Image} from 'react-bootstrap';

interface SectionProps {
    title: string;
    text: string;
    imageLocation: string;
}

const About: NextPage<SectionProps> = ({ title, text, imageLocation }) => {
    return (
        <>
            <Container>
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-7">
                        <Image
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src={imageLocation}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light text-center">{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </Container>
            <h1>About</h1>
            <p>Some Test Code</p>
            <Row xs={2} md={5} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default About;