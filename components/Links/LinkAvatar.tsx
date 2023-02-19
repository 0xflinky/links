import { Avatar, Text, Stack, Title} from '@mantine/core';

export default function LinkAvatar() {
  return (
    <>
        <Stack align="center" mt="md">
            <Avatar color="blue" radius="xl" size="xl">
            MW
            </Avatar>
            <Title
                order={1}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                ta="center"
                fz="xl"
                fw={800}
            >
                Heading
            </Title>
            <Text c="dimmed">Slogan</Text>
        </Stack>
    </>
  );
}