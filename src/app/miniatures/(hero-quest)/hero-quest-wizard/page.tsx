"use client";
import { NextPage } from 'next';
import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap';

import PageHeaderComponent from 'components/pageHeaderComponent'

const Games: NextPage = () => {
		return (
				<Container>
						<PageHeaderComponent
								title="Hero Quest: Wizard"
								text="You have the ability to cast many different spells. However, you cannot wear armour or use large weapons. Therefore, you must cast your spells wisely and avoid physical combat where you are weak."
								imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644270/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuestWizard_otrmuv.png"
						/>
						
						<Container fluid>
								<h2 className="fw-bolder"></h2>
								<p className="lead fw-normal text-muted mb-0"></p>
								<section className="py-5" id="scroll-target">
										<div className="container px-3 my-3">
												<div className="row gx-3 align-items-center">
														<div className="col-lg-6 ">
																<iframe
																		width="560"
																		height="315"
																		src="https://www.youtube.com/embed/tDhGaIXkqEE"
																		title="YouTube video player"
																		frameBorder="0"
																		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
																		allowFullScreen
																></iframe>
														</div>
														<div className="col-lg-6">
																<h2 className="fw-bolder">How to paint the Wizard</h2>
																<p className="lead fw-normal text-muted mb-0">
																		The More from Games start painting series wil show you an easy and quick way to paint your miniatures to play.
																		This is currently not available
																</p>
														</div>
												</div>
										</div>
								</section>
								<section>
										<h2 className="fw-bolder">Links</h2>
										<Row xs={2} md={4} className="g-4">
												<Col>
														<Card>
																<Card.Img variant="top" src="https://res.cloudinary.com/deftmtx9e/image/upload/v1676546001/More%20From%20Games/Site/Games/hero_quest_ufrncm.png" />
																<Card.Body>
																		<Card.Title>Hero Quest</Card.Title>
																		<Card.Text>
																				Brave adventurers, exploring dungeons, fighting monsters and using strategy and teamwork to complete objectives.
																		</Card.Text>
																		<div className="d-grid gap-2">
																				<Button variant="secondary" size="lg" href="/games/hero-quest" target="_self">
																						Open
																				</Button>
																		</div>
																</Card.Body>
														</Card>
												</Col>
											</Row>
								</section>
						</Container>
				</Container>
		);
}

export default Games;