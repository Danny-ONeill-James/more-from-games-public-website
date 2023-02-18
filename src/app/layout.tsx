"use client"; // this is a client componen

import Link from 'next/link'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import NavigationComponent from 'components/navigationComponent'
import FoorerComponent from 'components/footerComponent'

export default function RootLayout({
		children,
}: {
		children: React.ReactNode
}) {
		return (
				<html lang="en">
						{/*
		<head /> will contain the components returned by the nearest parent
		head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
	  */}
						<head />
						<body>
								<main>
										<NavigationComponent />
										{children}
										<FoorerComponent />
								</main>
						</body>
				</html>
		)
}
