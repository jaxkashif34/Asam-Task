import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyles = styled(Container)(({ theme }) => ({
  backgroundImage: `linear-gradient(90deg, #882e27,#6d869a 50%,#231641)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "5.5rem",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  //   width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
}));

const MiniHero = () => {
  return (
    <RootStyles maxWidth="xl">
      <StyledBox p={3}>
        <Typography variant="h3">
          Every tool you need to work with PDFs in one place
        </Typography>
        <Typography variant="h4">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </Typography>
      </StyledBox>
    </RootStyles>
  );
};

export default MiniHero;
