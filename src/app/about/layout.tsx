"use client";
import { Container } from 'react-bootstrap';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Container fluid>
            <h1>Above Children</h1>
            {children}
            <h1>Layout here</h1>
        </Container>
    )
}