import { Box, Container } from "@mui/material";
import CardDeck from "../../components/swipe/CardDeck";

function SwipePage() {
  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          textAlign: "center",
          height: "calc(100vh - 3.9rem)",
          paddingTop: "2rem"
        }}
      >
        <CardDeck />
      </Container>
    </Box>
  );
}

export default SwipePage;
