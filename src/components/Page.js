import { Helmet } from "react-helmet-async";
// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = ({ children, title = "" }) => (
  <Box>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
);
export default Page;
