"use client";
import { Container } from 'react-bootstrap';

import PageHeaderComponent from 'components/pageHeaderComponent'
import CardComponent from '../../../components/cardComponent';
import CardGroupContainer from '../../../components/cardGroupContainer';

export default function Miniatures() {
		return (
				<Container>
						<PageHeaderComponent
								title="Miniatures"
								text="Here you will find the selection of miniatures that we have content for. We at More from Games take our own picctures of our miniatures, if the miniature is bare plastic then there is unlikley a painting tutorial yet, if they are shown as painted then there is likley to be a painting video, these will be updatred accordingly."
														imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1677020474/More%20From%20Games/Site/Page%20Headers/miniatures_header_md05sf.png"
						/>

						<section>
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
												text="A master of both magic and the sword. You must use both well if you are to triumph. You have the power to cast three magical spells, all relating to one element."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644742/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-elf_rocgxo.png"
												linkDestination="/miniatures/hero-quest-elf"
												linkTarget="_self"
										/>
										<CardComponent
												title="Goblin"
												text="These green-skinned creatures are small and quick. Despite their stature and lack of brute strength, they are dangerous foes."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676644828/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-goblin_xmyp5j.png"
												linkDestination="/miniatures/hero-quest-goblins"
												linkTarget="_self"
										/>
										<CardComponent
												title="Orcs"
												text="Orcs are related to goblins but are larger and much more powerful. They form the rank and file of Zargon's armies. Those who are allied with the evil sorcerer are fierce and deadly warriors who should never be underestimated."
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
												text="These humans have become monster-minions of darkness. They are always heavily armoured and oftern bear weapons enchanted with Dread magic. These Derad warriors strike fear into all but the bravest (or most foolish) of opponents."
												imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676645118/More%20From%20Games/Site/Miniatures/Hero%20Quest/heroQuest-deradWarrior_hbfl4n.png"
												linkDestination="/miniatures/hero-quest-dread-warriors"
												linkTarget="_self"
										/>
										<CardComponent
												title="Skeletons"
												text="The animated remains of long dead warriors, skeletons form the bulk of the armies of the undead. They are slow but relentless, controlled by Dread magic"
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
				</Container>
		);
}