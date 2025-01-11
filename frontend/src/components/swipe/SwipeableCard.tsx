import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface SwipeableCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onSwipe: (direction: "left" | "right") => void;
  style?: React.CSSProperties;
}

function SwipeableCard({ title, description, imageUrl, onSwipe, style }: SwipeableCardProps) {
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);

  const handleSwipeEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    const swipeThreshold = 100; // Minimum swipe distance to count as a swipe
    if (info.offset.x > swipeThreshold) {
      setSwipeDirection("right");
      onSwipe("right");
    } else if (info.offset.x < -swipeThreshold) {
      setSwipeDirection("left");
      onSwipe("left");
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleSwipeEnd}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        opacity: 0,
        x: swipeDirection === "left" ? -300 : 300,
        y: 40,
        rotate: swipeDirection === "left" ? -20 : 20,
        transition: { duration: 0.5 }
      }}
      transition={{ duration: 0.3 }}
      style={{
        ...style, // Merge passed styles
        width: "300px",
        cursor: "grab"
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <Card
        sx={{
          width: "100%",
          height: "450px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box height="90%" position="relative">
          <CardMedia
            component="img"
            height="100%"
            draggable="false"
            image={imageUrl}
            alt={title}
          ></CardMedia>
          <Typography
            variant="h5"
            color="primary.main"
            position="absolute"
            fontWeight={800}
            fontSize="4rem"
            padding="0.5rem"
            bottom="2rem"
            left={0}
            lineHeight={1}
            gutterBottom
            width="100%"
            textAlign="center"
            margin={0}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.7)"
            }}
          >
            {title}
          </Typography>
        </Box>
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "auto 0", padding: "0 !important" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default SwipeableCard;
