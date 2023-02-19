import { Card, Image, Text, Badge, Button, Group, Chip, Divider } from '@mantine/core';
import LinkStack from './LinkStack';
import LinkAvatar from './LinkAvatar';
import CallToAction from './CallToAction';

export default function LinkContainer() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <LinkAvatar/>
      </Card.Section>

      <Divider my="sm" />

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Subtitle</Text>
        <Chip defaultChecked variant='filled'>Verified</Chip>
      </Group>

      <LinkStack/>

      <Divider my="sm" />

      <CallToAction/>
    </Card>
  );
}