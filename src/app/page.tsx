"use client"
import { NextPage, GetServerSideProps } from 'next';
import { Container } from 'react-bootstrap';
import ArticleContainer from '../../components/articleContainer';
import ArticleSectionImageLeft from '../../components/articleSectionImageLeft';
import CardComponent from '../../components/cardComponent';
import CardGroupContainer from '../../components/cardGroupContainer';
import PageHeaderComponent from '../../components/pageHeaderComponent';


const Home: NextPage = () => {
				return (
								<Container>
												<PageHeaderComponent
																title="Hello Friend!"
																text="Here at more from games we are looking to have a trove of information and tools to allow you to expand your board, tabletop and role play games. In a sense, we are looking to deliver tools that will help you get more from your games."
																imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676549773/More%20From%20Games/placeholder_urxkej.png"
												/>

												<h2 className="fw-bolder">Highlights</h2>
												<CardGroupContainer>
																<CardComponent
																				title="Hero Quest added to games"
																				text="The Hero Quest board game is the first game that we have conent for. This will be the first of many items to be added to our rosta"
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676546001/More%20From%20Games/Site/Games/hero_quest_ufrncm.png"
																				linkDestination="/games/hero-quest"
																				linkTarget="_self"
																/>
																<CardComponent
																				title="Mummies painting Video"
																				text="Our first Installment of start painting kicks off with the mummy from Hero Quest."
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676646347/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-mummies-painted_kwyqnk.png"
																				linkDestination="/miniatures/hero-quest-mummies"
																				linkTarget="_self"
																/>
												</CardGroupContainer>
								</Container>
				);
}

export default Home;