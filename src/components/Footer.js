import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AppStore from "Assets/Images/app_store.svg";
import PlayStore from "Assets/Images/google_play.svg";
import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled";
import caretDownFilled from "@iconify/icons-ant-design/caret-down-filled";
import outlineLanguage from "@iconify/icons-ic/outline-language";
import { Icon } from "@iconify/react";
const RootStyles = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
}));
const Link1 = ["Home", "Featured", "Pricing", "Tools", "FAQ"];
const Link2 = [
  "iLovePDF Desktop",
  "iLovePDF Mobile",
  "Developers",
  "Wordpress Plugin",
  "iloveimg.com",
];
const Link3 = ["Business", "Education"];
const Link4 = ["Our Story", "Blog", "Press", "Legal & Privacy", "Contact"];

const ILOVEPDF = (
  <Stack spacing={1}>
    <Typography gutterBottom variant="h4">
      <Link underline="hover" sx={{ color: "red" }}>
        ILOVEPDF
      </Link>
    </Typography>
    {Link1.map((item, index) => {
      return (
        <Typography key={index} variant="body1">
          <Link sx={{ color: "black" }}>{item}</Link>
        </Typography>
      );
    })}
  </Stack>
);
const Product = (
  <Stack spacing={1}>
    <Typography gutterBottom variant="h4">
      <Link underline="hover" sx={{ color: "red" }}>
        Product
      </Link>
    </Typography>
    {Link2.map((item, index) => {
      return (
        <Typography key={index} variant="body1">
          <Link sx={{ color: "black" }}>{item}</Link>
        </Typography>
      );
    })}
  </Stack>
);
const Solutions = (
  <Stack spacing={1}>
    <Typography gutterBottom variant="h4">
      <Link underline="hover" sx={{ color: "red" }}>
        Solutions
      </Link>
    </Typography>
    {Link3.map((item, index) => {
      return (
        <Typography key={index} variant="body1">
          <Link sx={{ color: "black" }}>{item}</Link>
        </Typography>
      );
    })}
  </Stack>
);
const Company = (
  <Stack spacing={1}>
    <Typography gutterBottom variant="h4">
      <Link underline="hover" sx={{ color: "red" }}>
        Company
      </Link>
    </Typography>
    {Link4.map((item, index) => {
      return (
        <Typography key={index} variant="body1">
          <Link sx={{ color: "black" }}>{item}</Link>
        </Typography>
      );
    })}
  </Stack>
);

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8, 0, 8, 8),
}));

const FooterBox = styled(Box)(({ theme }) => ({
  //   sx={{ px: 8, mb: 8 }}
  padding: theme.spacing(2, 0),
  [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 8),
  },
}));

const Footer = () => {
  return (
    <RootStyles maxWidth="xl">
      <GridContainer container>
        <Grid item xs={6} md={3}>
          {ILOVEPDF}
        </Grid>
        <Grid item xs={6} md={3}>
          {Product}
        </Grid>
        <Grid item xs={6} md={3}>
          {Solutions}
        </Grid>
        <Grid item xs={6} md={3}>
          {Company}
        </Grid>
      </GridContainer>
      <FooterBox>
        <Stack direction="row" justifyContent="flex-end">
          <Button>
            <Box component="img" src={PlayStore} alt="play Store" />
          </Button>
          <Button>
            <Box component="img" src={AppStore} alt="play Store" />
          </Button>
        </Stack>
        <Divider sx={{ color: "gray", m: 2 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center">
            <Icon icon={outlineLanguage} width={30} height={30} />
            <Button
              sx={{ color: "black" }}
              endIcon={<Icon icon={caretDownFilled} width={14} height={14} />}
            >
              English
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">
              © iLovePDF 2022 ® - Your PDF Editor
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Icon icon={twitterCircleFilled} width={30} height={30} />
              <Icon icon={facebookFilled} width={30} height={30} />
            </Stack>
          </Stack>
        </Stack>
      </FooterBox>
    </RootStyles>
  );
};

export default Footer;
