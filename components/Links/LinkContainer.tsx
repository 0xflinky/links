import { Card, Image, Text, Badge, Button, Group, Chip, Divider } from '@mantine/core';
import LinkStack from './LinkStack';
import LinkAvatar from './LinkAvatar';

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
      
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Call To Action
      </Button>
    </Card>
  );
}