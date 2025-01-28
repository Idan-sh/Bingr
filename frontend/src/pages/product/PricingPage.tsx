import { useRef } from "react";
import { Box, Typography, Button, Card, CardContent, CardActions, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function PricingPage() {
  const pricingOptions = [
    {
      title: "Free Tier",
      price: "$0",
      description: ["Basic features", "Limited access", "Community support"]
    },
    {
      title: "Monthly Plan",
      price: "$9.99/mo",
      description: ["All features", "Priority support", "Cancel anytime"]
    },
    {
      title: "Yearly Plan",
      price: "$99.99/yr",
      description: ["All features", "Priority support", "Save 15%"]
    },
    {
      title: "Premium Plan",
      price: "$199.99/yr",
      description: ["Exclusive features", "24/7 Support", "Ultimate access"]
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 3.9rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        padding: "2rem",
        gap: "1rem"
      }}
    >
      {/* Scrollable Cards */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "1rem",
          maxWidth: "100%",
          "&::-webkit-scrollbar": { display: "none" } // Hide scrollbar for a cleaner look
        }}
      >
        {pricingOptions.map((option, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 auto", // Prevent cards from shrinking
              height: 500,
              width: 350,
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2rem",
              boxShadow: 3
            }}
          >
            {/* Card Content */}
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="text.secondary"
                textAlign="center"
                gutterBottom
              >
                {option.title}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                textAlign="center"
                gutterBottom
              >
                {option.price}
              </Typography>
              <Box>
                {option.description.map((line, i) => (
                  <Typography key={i} variant="body2" color="text.secondary" textAlign="center">
                    {line}
                  </Typography>
                ))}
              </Box>
            </CardContent>

            {/* Card Actions */}
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem", padding: "0.8rem 1.5rem", fontWeight: "bold" }}
              >
                Choose {option.title}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "1rem"
        }}
      >
        <IconButton onClick={() => handleScroll("left")} color="primary" size="large">
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => handleScroll("right")} color="primary" size="large">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default PricingPage;
