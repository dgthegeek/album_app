import React from "react";
import { Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const Hero = () => {
  return (
    <>
      <Typography variant="h2" align="center" color="textPrimary" mt={3} mb={3}>
        My Photo Album
      </Typography>
      <Typography align="center" color="textSecondary" variant="h5">
        Im happy to share with you these beautifull photos <br />
        from unsplash ! <br /> They are just amazing ! <Favorite />
      </Typography>
    </>
  );
};

export default Hero;
