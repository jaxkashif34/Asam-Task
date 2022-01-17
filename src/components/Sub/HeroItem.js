import { Icon } from "@iconify/react";
import WindowsFill from "@iconify/icons-ant-design/windows-fill";
import {
  Container,
  Box,
  Grid,
  Card,
  CardHeader,
  Typography,
  CardContent,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";

const RootStyles = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(8),
}));

const SubContainer = styled(Container)(({ theme }) => ({
  // backgroundColor: "orange",
  marginTop: theme.spacing(-10),
}));

const CardStyle = styled(Card)(({ theme }) => ({
  // backgroundColor: "red",
  cursor: "pointer",
  padding: 0,
  borderRadius: 0,
  boxShadow: "none",
  border: "0.01rem solid transparent",
  "&:hover": {
    backgroundColor: theme.palette.background.neutral,
  },
}));

const ItemsComponent = () => {
  return (
    <Grid item xs={6} md={4} lg={3}>
      <CardStyle>
        <Box sx={{ pl: 2, pt: 1 }}>
          <Icon icon={WindowsFill} width={70} height={60} />
        </Box>
        <CardHeader title="Merg PDF" />
        <CardContent>
          <Typography>
            Combine PDFs in the order you want with the easiest PDF merger
            available.
          </Typography>
        </CardContent>
      </CardStyle>
    </Grid>
  );
};

const Items = [...Array(22)].map((item, index) => {
  return <ItemsComponent key={index} />;
});

const HeroItem = () => {
  const theme = useTheme();
  return (
    <RootStyles maxWidth="xl">
      <SubContainer maxWidth="xl">
        <Grid container sx={{ bgcolor: theme.palette.background.neutral }}>
          {Items}
        </Grid>
      </SubContainer>
    </RootStyles>
  );
};

export default HeroItem;
