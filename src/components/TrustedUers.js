import React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import PDF from "Assets/Images/pdf-association-logo.svg";
import SSL from "Assets/Images/ssl-encrypted-logo.svg";
import ISO from "Assets/Images/iso-logo.svg";

const RootStyles = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));

const TrustedUers = () => {
  const theme = useTheme();
  return (
    <RootStyles
      maxWidth="xl"
      sx={{ bgcolor: theme.palette.background.neutral }}
    >
      <StyledBox sx={{ py: 10 }}>
        <Typography variant="h3">
          The PDF software trusted by millions of users
        </Typography>
        <Typography variant="overline">
          iLovePDF is your number 1 web app for editing PDF with ease. Enjoy all
          the tools you need to work efficiently with your digital documents
          while keeping your data safe and secure.
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box component="img" src={PDF} alt width={50} height={40} />
            <Box component="img" src={ISO} alt width={50} height={40} />
            <Box component="img" src={SSL} alt width={85} height={85} />
          </Stack>
        </Box>
      </StyledBox>
    </RootStyles>
  );
};

export default TrustedUers;
