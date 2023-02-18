"use client"
import { NextPage, GetServerSideProps } from 'next';
import { Container } from 'react-bootstrap';

import PageHeaderComponent from 'components/pageHeaderComponent'
import CardGroupContainer from 'components/cardGroupContainer'
import CardComponent from 'components/cardComponent'



const Games: NextPage = () => {
		return (
				<Container>
						<PageHeaderComponent
								title="Games"
								text="Here you will find the selection of games that we have content for. As the More From Games website is still in its infancy, our collection is very small, but this will continue to grow over the near future."
								imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676549773/More%20From%20Games/placeholder_urxkej.png"
						/>
						<h2 className="fw-bolder">Board Games</h2>
						<CardGroupContainer>
								<CardComponent
										title="Hero Quest"
										text="Brave adventurers, exploring dungeons, fighting monsters and using strategy and teamwork to complete objectives."
										imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676546001/More%20From%20Games/Site/Games/hero_quest_ufrncm.png"
										linkDestination="/games/hero-quest"
										linkTarget="_self"
								/>
						</CardGroupContainer>
				</Container>
		);
}

export default Games;

