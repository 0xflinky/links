import { Container, Text } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
    return (
        <>
            <ColorSchemeToggle />
            <Container size={450} px={0} mt="sm">
                <Text>
                    Datenschutz
                </Text>
            </Container>
        </>
    );
}
