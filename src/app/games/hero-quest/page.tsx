"use client";
import { NextPage } from 'next';
import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap';

import PageHeaderComponent from 'components/pageHeaderComponent'
import CardGroupContainer from 'components/cardGroupContainer'
import CardComponent from 'components/cardComponent'


interface SectionProps {
		title: string;
		text: string;
		imageLocation: string;
}

const HeroQuest: NextPage<SectionProps> = ({ title, text, imageLocation }) => {
		return (
				<Container>
						<PageHeaderComponent
								title="Hero Quest Game System"
								text="Players take on the roles of brave adventurers, exploring dungeons and fighting monsters. The game utilizes a unique game system which incorporates miniatures,
												dungeon tiles, and cards to create an immersive experience. Players must use strategy and teamwork to defeat the monsters and complete their objectives."
								imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676546001/More%20From%20Games/Site/Games/hero_quest_ufrncm.png"
						/>
						<section>
								<h2 className="fw-bolder">Miniatures</h2>
								<CardGroupContainer>
										<CardComponent
												title="Barbarian"
												text="The greatest warrior of all. But beware of magic for your sword is no defence against it."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676642775/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-barbarian_bdrx3f.png"
												linkDestination="/miniatures/hero-quest-barbarian"
												linkTarget="_self"
										/>
										<CardComponent
												title="Dwarf"
												text="A good warrior and has the unique ability to disarm traps without a tool kit. To do so, a black shiled must be avoided whilst rolling a combat die."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676642940/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-dwarf_p3brvn.png"
												linkDestination="/miniatures/hero-quest-dwarf"
												linkTarget="_self"
										/>
										<CardComponent
												title="Wizard"
												text="You have the ability to cast many different spells. However, you cannot wear armour or use large weapons. Therefore, you must cast your spells wisely and avoid physical combat where you are weak."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644270/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuestWizard_otrmuv.png"
												linkDestination="/miniatures/hero-quest-wizard"
												linkTarget="_self"
										/>
										<CardComponent
												title="Elf"
												text="A master of both magic and the sword. Yu must use both well if you are to triumph. You have the power to cast three magical spells, all relating to one element."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644742/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-elf_rocgxo.png"
												linkDestination="/miniatures/hero-quest-elf"
												linkTarget="_self"
										/>
										<CardComponent
												title="Goblin"
												text="These green-skinned creatures are small and quick."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644828/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-goblin_xmyp5j.png"
												linkDestination="/miniatures/hero-quest-goblins"
												linkTarget="_self"
										/>
										<CardComponent
												title="Orcs"
												text="Orcs are related to goblins ut are larger and much more powerful"
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644912/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-orc_ur6zat.png"
												linkDestination="/miniatures/hero-quest-orcs"
												linkTarget="_self"
										/>
										<CardComponent
												title="Abomination"
												text="Little is known of these monsters. The hulking amphibious humanoids are used by Zargon to enforce his tyranny and are quite dangerous even when encountered individually."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676645029/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-abomination_skzyql.png"
												linkDestination="/miniatures/hero-quest-abomination"
												linkTarget="_self"
										/>
										<CardComponent
												title="Dread Warriors"
												text="These humans have become monster-minionsof darkness"
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676645118/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-deradWarrior_hbfl4n.png"
												linkDestination="/miniatures/hero-quest-dread-warriors"
												linkTarget="_self"
										/>
										<CardComponent
												title="Skeletons"
												text="The animated remains of slow and relentless long dead warriors"
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676645211/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-skeleton-painted_id1zpn.png"
												linkDestination="/miniatures/hero-quest-skeletons"
												linkTarget="_self"
										/>
										<CardComponent
												title="Zombies"
												text="Like Skeletons, zombies are magically animated corpses. Unlike skeletons, some still beartraces of decaying flesh and muscle. Their movements are slow and awkward, and they carry the stench of the grave wherever they go."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676645295/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-zombie-painted_lwg7dg.png"
												linkDestination="/miniatures/hero-quest-zombies"
												linkTarget="_self"
										/>
										<CardComponent
												title="Mummies"
												text="Embalmed and preserved by secret and magical arts, mummies are controlled by a more powerful version of the magic that animates zombies and skeletons. They are very hard to overcome in single-handed combat."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676646347/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-mummies-painted_kwyqnk.png"
												linkDestination="/miniatures/hero-quest-mummies"
												linkTarget="_self"
										/>
										<CardComponent
												title="Gargoyle"
												text="These foul creatures are also produced by Dread magic. In essence, they are stone satues of great monsters, brought to life through arcane rituals. Their stone skin makes them very hard to wound in combat."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676646537/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-gargoyle_ys9uor.png"
												linkDestination="/miniatures/hero-quest-gargoyle"
												linkTarget="_self"
										/>
										<CardComponent
												title="Dread Sorcerer"
												text="Thisfigure will be used as several different characters(both good and bad)in various quests"
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676646707/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-dreadSorcerer_sr8by3.png"
												linkDestination="/miniatures/hero-quest-dread-sorcerer"
												linkTarget="_self"
										/>
								</CardGroupContainer>
						</section>
						<section>
								<h2 className="fw-bolder">Where to Buy</h2>
								<CardGroupContainer>
										<CardComponent
												title="Firestorm Games"
												text="Stock: Unknown"
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676552960/More%20From%20Games/Site/Affiliates/firestorm-games_meyzms.png"
												linkDestination="https://www.firestormgames.co.uk/heroquest?aff=6378bb243d570"
												linkTarget="_new"
										/>
								</CardGroupContainer>
						</section>
				</Container>
		);
}

export default HeroQuest;