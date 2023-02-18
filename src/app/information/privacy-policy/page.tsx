"use client"
import { NextPage, GetServerSideProps } from 'next';
import { Container } from 'react-bootstrap';
import ArticleContainer from '../../../../components/articleContainer';

import PageHeaderComponent from '../../../../components/pageHeaderComponent';


const PrivacyPolicy: NextPage = () => {
				return (
								<Container>
												<PageHeaderComponent
																title="Privacy Policy"
																text="Here you will find the More From Games privacy policy."
																imageLocation="https://res.cloudinary.com/deftmtx9e/image/upload/v1676549773/More%20From%20Games/placeholder_urxkej.png"
												/>

												<ArticleContainer title={"Information Collected"} text={""} content={""}>
																<p>Our site currently does not collect any information.</p>
												</ArticleContainer>
												<ArticleContainer title={"Use of Cookies"} text={""} content={""}>
																<p>Our site currently does not use cookies.</p>
												</ArticleContainer>

												<ArticleContainer title={"Information Security"} text={""} content={""}>
																<p>
																				As we currently do not collect any information, we have no security in
																				place to protect what we do not have. If we do start to use data, we
																				will update the policy here.
																</p>
												</ArticleContainer>

												<ArticleContainer
																title={"Links to External Websites"}
																text={""}
																content={""}
												>
																<p>
																				Within our site, we have links to external websites, we cannot control
																				what information they collect and how they manage this information, we
																				implore you to read the external sites privacy policy as you access
																				them.
																</p>
																<p>
																				Some of the links on our site will be affiliate links that when you do
																				go to the website they may collect information to allow them to recognise
																				where you came from.This helps us by providing us with a % of what you purchase
																				after clicking the link. If you do not like affiliate links, please feel free to
																				visit those websites without using our link.
																</p>
												</ArticleContainer>

												<ArticleContainer title={"Applications"} text={""} content={""}>
																<p>
																				Some of our applications that are in development will be created using 3rd party software.
																				Where this is true, the software owners may have their own Privacy Policy, the
																				information for these applications will be located on their websites.
																</p>
												</ArticleContainer>

												<ArticleContainer
																title={"Updating Our Privacy Policy"}
																text={""}
																content={""}
												>
																<p>
																				Please note that as we develop as a website, we will need to update
																				this privacy policy, any changes will reflect on this page. We cannot
																				let you know that they have changed at the moment, as we do not have any of your
																				information, so pop back here from time to time and check if any
																				changes have been made.
																</p>
												</ArticleContainer>
								</Container>
				);
}

export default PrivacyPolicy;