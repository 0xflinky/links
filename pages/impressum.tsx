import {Container, Text, Title, Space, Button} from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {IconTexture} from "@tabler/icons";
import impressumData from './ImpressumData.json';

export default function ImpressumPage() {
    return (
        <>
            <ColorSchemeToggle />
            <Container size={450} px={0} mt="sm">
                <Button component='a' href='/'>
                    Zurück
                </Button>
                <Space h="md" />
                <Title order={1}>
                    Angaben gem. § 5 TMG
                </Title>
                <Space h="md" />
                <Text>
                    Name des Unternehmens: {impressumData.companyName}
                </Text>
                <Text>
                    Anschrift: {impressumData.address}
                </Text>
                <Text>
                    Telefon: {impressumData.phone}
                </Text>
                <Text>
                    Fax: {impressumData.fax}
                </Text>
                <Text>
                    E-Mail: {impressumData.email}
                </Text>
                <Text>
                    Webseite: {impressumData.website}
                </Text>
                <Space h="md" />
                <Text>
                    Vertretungsberechtigte Geschäftsführer: {impressumData.executives.join(", ")}
                </Text>
                <Text>
                    Registergericht: {impressumData.court}
                </Text>
                <Text>
                    Registernummer: {impressumData.registerNumber}
                </Text>
                <Text>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {impressumData.vatId}
                </Text>
                <Space h="md" />
                <Text>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Max Mustermann
                </Text>
                <Space h="md" />
                <Title order={3}>
                    Haftungshinweis:
                </Title>
                <Text>
                    {impressumData.disclaimer}
                </Text>
            </Container>
        </>
    );
}
