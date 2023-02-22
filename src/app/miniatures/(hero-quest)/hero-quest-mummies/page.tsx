"use client";
import { Card, Row, Col, Container, Button } from 'react-bootstrap';

import PageHeaderComponent from 'components/pageHeaderComponent'

export default function Games() {
				return (
								<Container>
												<PageHeaderComponent
																title="Mummies"
																text="Embalmed and preserved by secret and magical arts, mummies are controlled by a more powerful version of the magic that animates zombies and skeletons. They are very hard to overcome in single-handed combat."
																imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676646347/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-mummies-painted_kwyqnk.png"
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
																																				src="https://www.youtube.com/embed/z6Qw-wfnClQ"
																																				title="YouTube video player"
																																				frameBorder="0"
																																				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
																																				allowFullScreen
																																></iframe>
																												</div>
																												<div className="col-lg-6">
																																<h2 className="fw-bolder">How to paint the Mummies</h2>
																																<p className="lead fw-normal text-muted mb-0"><b>Paints List: </b>Stonewall Grey, Bloody Red.</p>
																																<p className="lead fw-normal text-muted mb-0"><b>Wash List: </b>Black Wash, Blue Wash, Sepia Wash.</p>
																																<p className="lead fw-normal text-muted mb-0">
																																				<b>Guide: </b>
																																				Base the entire miniature with stonewall grey, pick out the skin areas and wash them with the black wash, once this wash
																																				is dry, wash over the black wash with blue wash, once the blue wash is dry wash the entiraty of the wrapping with Sepia Wash.
																																				For extra detail drybrush the wraps, focusing on the top down areas then squiddle a few lines on the wrapping as runes or spells.
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