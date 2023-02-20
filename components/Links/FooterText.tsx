import { Text } from "@mantine/core";
import FooterTextData from "./FooterTextData";

export default function FooterText() {
    return (
        <Text c="dimmed" mt="sm" align="center" size="sm">
            {FooterTextData.text}
        </Text>
    );
}
