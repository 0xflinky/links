import { Stack, Button } from '@mantine/core';
import linksData from './linksData';

export default function LinkStack() {
  return (
    <Stack>
      {linksData.map(link => (
        <Button component='a' target="_blank" key={link.url} variant="outline" href={link.url}>
          {link.text}
        </Button>
      ))}
    </Stack>
  );
}
