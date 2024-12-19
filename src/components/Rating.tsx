import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function AspectRating() {
  const value = 3.5;

  return (
    <Rating
      name="text-feedback"
      size="large"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
  );
}