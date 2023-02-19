import { Button } from "@mantine/core";
import CallToActionData from "./CallToActionData";

export default function CallToAction() {
  return (
    <>
      {CallToActionData.map((link) => (
        <Button
          key={link.link}
          component="a"
          target="_blank"
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          href={link.link}
        >
          {link.text}
        </Button>
      ))}
    </>
  );
}
