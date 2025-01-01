import { Container } from "@mui/material";
import constructionIcon from "/imgs/building.png";

function LandingPage() {
  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}>
      <img width="30%" src={constructionIcon} />
    </Container>
  );
}

export default LandingPage;
