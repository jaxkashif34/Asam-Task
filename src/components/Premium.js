import React from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(7),
}));

const Premium = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#383e45" }}>
      <Grid container>
        <GridItem item xs={12} md={6}>
          <Box sx={{ color: "#fff" }}>
            <Typography gutterBottom variant="h3">
              Get more with Premium
            </Typography>
            <Typography gutterBottom variant="h5">
              Complete projects faster with batch file processing, convert
              scanned documents with OCR and e-sign your business agreements.
            </Typography>
          </Box>
        </GridItem>
        <GridItem item xs={12} md={6}>
          <Button
            variant="contained"
            sx={{
              color: "black",
              boxShadow: "none",
              pl: 2,
              pr: 2,
              bgcolor: "yellow",
              "&:hover": { bgcolor: "gray", color: "#fff" },
            }}
            size="large"
          >
            Get Premium
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Premium;
