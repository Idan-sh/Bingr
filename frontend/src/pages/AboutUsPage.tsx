import { Box, Container, Typography, Grid2, Card, Avatar, Divider } from "@mui/material";
import AboutUsFavoritesMoviesShows from "../components/about-us/AboutUsFavoritesMoviesShows";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Idan Shalom",
    role: "Founder & CEO",
    avatar: "/imgs/about-us/portrait-idan.jpeg"
  },
  {
    name: "Ronen Gelmanovich",
    role: "Founder & CEO",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFfKnVoN-vaWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680414162558?e=1741824000&v=beta&t=wNuu5l8DV9Di8M4C6a01zxtl82asvaYucHaYh2S6TuQ"
  }
];

function AboutUsPage() {
  return (
    <Box
      sx={{ backgroundColor: "background.default", color: "text.primary", padding: "0 0 6rem 0" }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" fontWeight="800" letterSpacing="0px">
            About Us
          </Typography>
          <Typography variant="body1" fontSize="1.4rem" sx={{ lineHeight: 1.6 }}>
            Welcome to Bingr, your ultimate matchmaker for movies and TV shows! <br /> We are a
            passionate team of entertainment enthusiasts dedicated to helping you discover your next
            binge-worthy adventure.
          </Typography>
        </Container>
      </Box>

      {/* Our Vision & Mission */}
      <Container sx={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ fontSize: "1.1rem", marginBottom: "4rem" }}
        >
          We envision a world where finding entertainment that resonates with you is effortless,
          personalized, and fun!
        </Typography>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ fontSize: "1.1rem" }}>
          Our mission is to simplify the way you explore movies and TV shows by offering curated
          recommendations tailored to your preferences, so you never waste time searching again.
        </Typography>
      </Container>

      <Divider sx={{ margin: "2rem 0" }} />

      {/* Meet the Team Section */}
      <Container
        sx={{
          minWidth: "min-content",
          width: { xs: "70%", sm: "80%", md: "50%" },
          borderRadius: "10px",
          padding: "4rem 0 5rem 0",
          marginBottom: "5rem",
          backgroundColor: "background.paper"
        }}
      >
        <Typography
          variant="h4"
          color="text.secondary"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Meet the Team
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={member.name}>
              <Card
                sx={{
                  boxShadow: 0,
                  textAlign: "center",
                  padding: "1rem",
                  background: "none"
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    boxShadow: "2",
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    marginBottom: "1rem"
                  }}
                />
                <Typography
                  variant="h6"
                  minWidth="max-content"
                  color="text.secondary"
                  fontWeight="bold"
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      <Divider sx={{ margin: "2rem 0" }} />

      {/* Favorite Movies Gallery Section */}
      <AboutUsFavoritesMoviesShows />
    </Box>
  );
}

export default AboutUsPage;
