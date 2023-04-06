import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Typography>
        Page Not Found. Check out homepage <Link to="/">Here</Link>
      </Typography>
    </>
  );
}

export default PageNotFound;
