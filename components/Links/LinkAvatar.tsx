import { Avatar, Text, Stack, Title } from "@mantine/core";
import LinkAvatarData from "./LinkAvatarData";

export default function LinkAvatar() {
    const { avatarText, heading, slogan } = LinkAvatarData;

    return (
        <>
            <Stack align="center" mt="md">
                <Avatar color="blue" radius="xl" size="xl">
                    {avatarText}
                </Avatar>
                <Title
                    order={1}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    ta="center"
                    fz="xl"
                    fw={800}
                >
                    {heading}
                </Title>
                <Text c="dimmed">{slogan}</Text>
            </Stack>
        </>
    );
}
