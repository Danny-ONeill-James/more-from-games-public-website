"use client";
import { Container } from 'react-bootstrap';

export default function RootLayout({
		children,
}: {
		children: React.ReactNode
}) {
		return (
				<Container fluid>
						{children}
				</Container>
		)
}