import Link from 'next/link'
import { Group, Text } from '@mantine/core';
import FooterTextData from './FooterTextData';

export default function FooterText() {
    return (
        <>
            <Text c="dimmed" mt="sm" align="center" size="sm">
            {FooterTextData.text}
            </Text>
            <Group>
                <Link href="/impressum"> Impressum </Link>
                <Link href="/datenschutz"> Datenschutzerklärung </Link>
            </Group>
        </>
    );
}
