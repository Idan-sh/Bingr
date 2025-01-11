import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Pagination,
  Container
} from "@mui/material";

// Mock data for movies/TV shows (replace this with an API later)
const mockData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Movie/Show ${i + 1}`,
  description: `This is the description for Movie/Show ${i + 1}.`,
  image: `https://via.placeholder.com/300x450?text=Movie+${i + 1}`
}));

function BrowsePage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination variables
  const itemsPerPage = 10; // Items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtered and paginated results
  const filteredResults = mockData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const paginatedResults = filteredResults.slice(startIndex, endIndex);

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ backgroundColor: "background.default", color: "text.primary", minHeight: "100vh" }}>
      <Container sx={{ padding: "2rem 0.6rem" }}>
        {/* Search Bar */}
        <Box sx={{ marginBottom: "4rem", textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight="800"
            letterSpacing="-1px"
            fontSize="2.6rem"
            gutterBottom
          >
            Search Movies and TV Shows
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search for movies or TV shows..."
            fullWidth
            value={query}
            onChange={handleSearchChange}
            sx={{
              width: { xs: "90%", sm: "90%", md: "60%" },
              color: "text.primary",
              borderRadius: "6px",
              margin: "0 auto",
              backgroundColor: "background.paper",
              "& .MuiInputBase-input": {
                color: "text.secondary"
              },
              "& .MuiInputBase-input::placeholder": {
                color: "gray",
                opacity: 1
              }
            }}
          />
        </Box>

        {/* Results Grid */}
        <Grid2
          container
          spacing={3}
          sx={{ justifyContent: { xs: "center", sm: "flex-start", md: "flex-start" } }}
        >
          {paginatedResults.length > 0 ? (
            paginatedResults.map((item) => (
              <Grid2 size={{ xs: 10, sm: 6, md: 4 }} key={item.id}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: "16px",
                    overflow: "hidden",
                    backgroundColor: "background.paper"
                  }}
                >
                  <CardMedia component="img" height="300" image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))
          ) : (
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ width: "100%", marginTop: "1rem", fontSize: "1.2rem", color: "text.primary" }}
            >
              No results found.
            </Typography>
          )}
        </Grid2>

        {/* Pagination */}
        {filteredResults.length > itemsPerPage && (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <Pagination
              count={Math.ceil(filteredResults.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default BrowsePage;
