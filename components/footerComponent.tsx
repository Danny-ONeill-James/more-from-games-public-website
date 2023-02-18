import type { NextPage } from "next";
import { Button } from "react-bootstrap";
import * as React from "react";
import Link from "next/link";

const FoterComponent: NextPage = () => {
		return (
				<footer className="bg-dark py-4 mt-auto" >
						<div className="container px-5">
								<div className="row align-items-center justify-content-between flex-column flex-sm-row">
										<div className="col-auto">
												<div className="small m-0 text-white">
														Created by More From Games 2021-2023
												</div>
										</div>
										<div className="col-auto">
												<Button
														variant="link"
														href="https://www.instagram.com/morefromgames/"
														target="_new"
												>
														<img
																src="https://res.cloudinary.com/deftmtx9e/image/upload/v1669904249/More%20From%20Games/siteIcons/instagram-logo_fwdaj4.png"
																width="32px"
														/>
												</Button>
												<Button
														variant="link"
														href="https://www.tiktok.com/@morefromgames"
														target="_new"
												>
														<img
																src="https://res.cloudinary.com/deftmtx9e/image/upload/v1669904240/More%20From%20Games/siteIcons/ticktock-logo_n6e8wg.png"
																width="32px"
														/>
												</Button>
												<Button
														variant="link"
														href="https://www.youtube.com/@morefromgames"
														target="_new"
												>
														<img
																src="https://res.cloudinary.com/deftmtx9e/image/upload/v1669904240/More%20From%20Games/siteIcons/youtube-shorts-logo_bxpuag.png"
																width="32px"
														/>
												</Button>
										</div>
										<div className="col-auto">
												<Link className="link-light small" href="/information/privacy-policy">
														Policy
												</Link>
										</div>
								</div>
						</div>
				</footer>
		);
};

export default FoterComponent;