import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import pepe from "../../images/pepe.jpg";

function PageNotFound() {
  return (
    <>
      <Typography variant="h4" className="PageNotFoundMsg">
        Page Not Found. <br></br>
        <br></br>
        <img src={pepe} />
        <br></br>
        <Link to="/">Check out Homepage Here</Link>
      </Typography>
    </>
  );
}

export default PageNotFound;
