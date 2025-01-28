import { Box, Typography, Grid2, Card, CardMedia, CardContent } from "@mui/material";

function LandingPageTrending() {
  const recommendations = [
    {
      title: "Inception",
      description: "A mind-bending thriller that will keep you guessing.",
      image: "https://i.ytimg.com/vi/hMQ7VhcCpuY/maxresdefault.jpg"
    },
    {
      title: "Stranger Things",
      description: "Dive into the nostalgic supernatural world.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb0VGE6o-UdwBZoOZ4BwllSxg_El1JCrjng&s"
    },
    {
      title: "Breaking Bad",
      description: "A thrilling journey of transformation.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg"
    }
  ];

  return (
    <Box
      className="landing-page-trending"
      sx={{
        width: "100%",
        height: "fit-content",
        paddingTop: "6rem",
        paddingBottom: "12rem",
        paddingInline: { xs: "4rem", sm: "8rem", md: "10rem" },
        backgroundColor: "primary.main"
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBlock: "2rem", fontWeight: 800, fontSize: "2.4rem" }}
        gutterBottom
      >
        Trending on Bingr
      </Typography>
      <Grid2 container spacing={3} justifyContent="center">
        {recommendations.map((rec, index) => (
          <Grid2 key={index} size={{ xs: 20, sm: 6, md: 4 }}>
            <Card
              sx={{
                borderRadius: "20px",
                backgroundColor: "background.paper",
                boxShadow: 3
              }}
            >
              <CardMedia
                component="img"
                draggable="false"
                height="300px"
                image={rec.image}
                alt={rec.title}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 2,
                  margin: "auto 0"
                }}
              >
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {rec.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {rec.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default LandingPageTrending;
