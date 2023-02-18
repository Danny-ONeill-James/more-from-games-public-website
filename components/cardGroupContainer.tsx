import type { NextPage } from "next";
import { Container, Row } from "react-bootstrap";
import * as React from "react";

interface SectionProps {
		children: React.ReactNode;
}

const CardGroupContainer: NextPage<SectionProps> = ({ children }) => {
		return (
				<Container>
						<Row xs={2} md={4} className="g-4">
								{children}
						</Row>
				</Container>
		);
};

export default CardGroupContainer;