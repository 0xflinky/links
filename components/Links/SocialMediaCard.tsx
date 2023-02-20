import { Card, Text, Badge, Button, Group } from '@mantine/core';
import { ActionIcon } from '@mantine/core';

//Icons
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons';

export default function SocialMediaCard() {
  return (
    <Card shadow="sm" p="lg" radius="md" mt="sm" withBorder>
        <Group position='center'>
            <ActionIcon size="lg" variant="filled">
                <IconBrandFacebook size={26} />
            </ActionIcon>
            <ActionIcon size="lg" variant="filled">
                <IconBrandInstagram size={26} />
            </ActionIcon>
            <ActionIcon size="lg" variant="filled">
                <IconBrandTwitter size={26} />
            </ActionIcon>
        </Group>
    </Card>
  );
}
