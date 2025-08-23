import { Container, Paper, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container
      style={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Paper p="xl" radius="md" shadow="sm">
        <Title>Coming soon!</Title>
      </Paper>
    </Container>
  );
}
