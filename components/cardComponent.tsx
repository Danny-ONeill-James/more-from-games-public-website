import * as React from "react";
import type { NextPage } from "next";
import { Button, Card, Col } from "react-bootstrap";

interface SectionProps {
		title: string;
		text: string;
		imageLocation: string;
		linkDestination: string;
		linkTarget: string;
}

const CardComponent: NextPage<SectionProps> = ({ title, text, imageLocation, linkDestination, linkTarget, }) => {
		return (
				<>
						<style type="text/css">
								{`
										.limitToTwoLines {
										overflow: hidden;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-line-clamp: 2;
										line-clamp: 2;
										-webkit-box-orient: vertical;
										}
								`}
						</style>
						<Col>
								<Card>
										<Card.Img variant="top" src={imageLocation} />
										<Card.Body>
												<Card.Title>{title}</Card.Title>
												<Card.Text className="limitToTwoLines">{text}</Card.Text>
										</Card.Body>
										<Button variant="secondary" size="lg" href={linkDestination} target={linkTarget} >
												Open
										</Button>
								</Card>
						</Col>
				</>
		);
};

export default CardComponent;