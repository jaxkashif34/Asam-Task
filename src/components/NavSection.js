import { NavLink, matchPath, useLocation } from "react-router-dom";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon } = item;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    "&:before": { display: "block" },
  };

  return (
    <ListItemStyle
      component={NavLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  const match = (path) => matchPath(path, pathname);
  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => {
          return <NavItem key={item.title} item={item} active={match} />;
        })}
      </List>
    </Box>
  );
}
