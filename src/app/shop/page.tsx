"use client"
import { NextPage, GetServerSideProps } from 'next';
import { Container } from 'react-bootstrap';

import PageHeaderComponent from 'components/pageHeaderComponent'
import CardGroupContainer from 'components/cardGroupContainer'
import CardComponent from 'components/cardComponent'



const Shop: NextPage = () => {
				return (
								<Container>
												<PageHeaderComponent
																title="The Shop"
																text="We are currently selling cards through the cardmarket website, Once we open other revenues, the items will show up here."
																imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676549773/More%20From%20Games/placeholder_urxkej.png"
												/>
												<h2 className="fw-bolder">Cardmarket Cards Shop</h2>
												<p className="lead fw-normal text-muted mb-0">If you do purchase our cards from cardmarketm thank you very much, your support is most welcome.</p>
												<p className="lead fw-normal text-muted mb-0">If you do sign up please add MoreFromGames into the Referral Program field, this helps us with a little kickback from your first few orders.</p>
												<CardGroupContainer>
																<CardComponent
																				title="Pokemon"
																				text="Use 60-card decks to battle. Players build decks around cards that feature Pokemon characters, and then take turns using attacks to try to defeat their opponent. The game requires some strategy and planning to win."

																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676725565/More%20From%20Games/Site/Games/pokemon-tcg_bsgwtm.png"
																				linkDestination="https://www.cardmarket.com/en/Pokemon/MainPage/browseUserProducts?idUser=991365845"
																				linkTarget="_new"
																/>
																<CardComponent
																				title="Final Fantasy"
																				text="Players play cards by spending Crystal Points, earned by dulling (turning from vertical to horizontal) Backup cards, or by discarding cards. The game features a wide range of Characters from games in the Final Fantasy series."
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676725564/More%20From%20Games/Site/Games/finalFantasy-tcg_e9qnvi.png"
																				linkDestination="https://www.cardmarket.com/en/FinalFantasy/MainPage/browseUserProducts?idUser=991365845"
																				linkTarget="_new"
																/>
																<CardComponent
																				title="Yu-Gi-Oh!"
																				text="It is a game of strategy, where players create individual Decks of cards collected from Structure Decks and Booster Packs."
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676725564/More%20From%20Games/Site/Games/yuGiOh-tcg_fdu2gw.png"
																				linkDestination="https://www.cardmarket.com/en/YuGiOh/MainPage/browseUserProducts?idUser=991365845"
																				linkTarget="_new"
																/>
																<CardComponent
																				title="Dagonball Super"
																				text="A two-player competitive trading card game! Players make decks of 1 Leader Card and 50 to 60 Battle/Extra/Unison Cards to fight it out! And you can build a Z-Deck with up to 7 Z-Leader Cards and Z-Battle Cards!"
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676725563/More%20From%20Games/Site/Games/dragonballSuper-tcg_zwausw.png"
																				linkDestination="https://cardmarket.com/en/DragonBallSuper/MainPage/browseUserProducts?idUser=991365845"
																				linkTarget="_new"
																/>
																<CardComponent
																				title="Magic the Gathering"
																				text="A player in Magic takes the role of a Planeswalker, a powerful wizard who can travel between planes of the Multiverse, doing battle with other players as Planeswalkers by casting spells, using artifacts, and summoning creatures as depicted on individual cards drawn from their individual decks."
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676725562/More%20From%20Games/Site/Games/magicTheGathering-tcg_vnhvh0.png"
																				linkDestination="https://www.cardmarket.com/en/Magic/MainPage/browseUserProducts?idUser=991365845"
																				linkTarget="_new"
																/>
																<CardComponent
																				title="Digimon"
																				text="A competitive trading card game. Each player has a companion Digimon in the battle area to attack the opponent. Your Digimon evolves, gets stronger, and gains new power!"
																				imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676725567/More%20From%20Games/Site/Games/digimon-tcg_qrbtpl.png"
																				linkDestination="https://www.cardmarket.com/en/Digimon/MainPage/browseUserProducts?idUser=991365845"
																				linkTarget="_new"
																/>
												</CardGroupContainer>
								</Container>
				);
}

export default Shop;

