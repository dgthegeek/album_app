import { Box, Grid } from "@mui/material";
import Cards from "./Card";
import { DogList } from "../constants/constants";

const Album = () => {
  return (
    <Box mt={10} >
      <Grid container spacing={2} justifyContent="center">
        {DogList.map((dog) => (
          <Grid item>
            <Cards dog={dog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Album;
