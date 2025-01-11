import { Container, Typography, Card, CardMedia, CardContent, Grid2 } from "@mui/material";

const favoriteMoviesShows = [
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: "https://via.placeholder.com/300x450?text=Inception"
  },
  {
    title: "The Shawshank Redemption",
    description: "An uplifting story of hope and friendship.",
    image: "https://via.placeholder.com/300x450?text=Shawshank"
  },
  {
    title: "Breaking Bad",
    description: "A thrilling TV series with unforgettable characters.",
    image: "https://via.placeholder.com/300x450?text=Breaking+Bad"
  },
  {
    title: "The Dark Knight",
    description: "The ultimate superhero film with a legendary performance.",
    image: "https://via.placeholder.com/300x450?text=The+Dark+Knight"
  },
  {
    title: "Stranger Things",
    description: "A nostalgic journey into the supernatural.",
    image: "https://via.placeholder.com/300x450?text=Stranger+Things"
  },
  {
    title: "Stranger Things",
    description: "A nostalgic journey into the supernatural.",
    image: "https://via.placeholder.com/300x450?text=Stranger+Things"
  }
];

function AboutUsFavoritesMoviesShows() {
  return (
    <Container sx={{ margin: "0 auto", marginBottom: "3rem" }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Our Favorites
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ marginBottom: "2rem", fontSize: "1.1rem" }}
      >
        Here are some of our all-time favorite films and shows that inspire us.
      </Typography>
      <Grid2 container spacing={4}>
        {favoriteMoviesShows.map((film) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={film.title}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 3,
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "background.paper"
              }}
            >
              <CardMedia component="img" height="200" image={film.image} alt={film.title} />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="text.secondary"
                  textAlign="center"
                  gutterBottom
                >
                  {film.title}
                </Typography>
                <Typography variant="body2" textAlign="center" color="text.secondary">
                  {film.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default AboutUsFavoritesMoviesShows;
