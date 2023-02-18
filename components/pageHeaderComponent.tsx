import type { NextPage } from "next";
import { Image, Container } from "react-bootstrap";
import * as React from "react";
import Link from "next/link";

interface SectionProps {
		title: string;
		text: string;
		imageLocation: string;
}

const pageHeaderComponent: NextPage<SectionProps> = ({ title, text, imageLocation }) => {
		return (
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
										<h1 className="font-weight-light">{title}</h1>
										<p>{text}</p>
								</div>
						</div>
				</Container>
		);
};

export default pageHeaderComponent;