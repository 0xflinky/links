import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import LinkContainer from '../components/Links/LinkContainer';
import { Container } from '@mantine/core';
import SocialMediaCard from '../components/Links/SocialMediaCard';
import FooterText from '../components/Links/FooterText';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Container size={450} px={0} mt="sm">
        <LinkContainer/>
        <SocialMediaCard/>
        <FooterText/>
      </Container>
    </>
  );
}
