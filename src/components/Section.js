import React from "react";
import {
  Container,
  Grid,
  Box,
  Stack,
  Link,
  Typography,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SecImg from "Assets/Images/section.png";

const RootStyles = styled(Container)(({ theme }) => ({
  //   backgroundColor: theme.palette.error.main,
}));

const Section = () => {
  return (
    <RootStyles maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ padding: 10 }}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            alt="The house from the offer."
            src={SecImg}
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Box>
            <Typography variant="h3">Looking for another solution?</Typography>
            <Stack
              spacing={2}
              //   sx={{ bgcolor: "yellow" }}
              justifyContent="space-around"
            >
              {[...Array(3)].map((item) => {
                return (
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h4">I LovePDF Desktop</Typography>
                    <Typography variant="body1">
                      Download{" "}
                      <Link sx={{ color: "red", cursor: "pointer" }}>
                        iLovePDF Desktop{" "}
                      </Link>
                      App to work with your favourite PDF tools on your Mac or
                      Windows PC. Get a lightweight PDF app that helps you
                      process heavy PDF tasks offline in seconds.
                    </Typography>
                  </Paper>
                );
              })}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </RootStyles>
  );
};

export default Section;
