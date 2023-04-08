import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ExhibitionCardL3() {
  const [exhibitions, setExhibition] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch("/api/exhibitions")
      .then((response) => response.json())
      .then((data) => setExhibition(data))
      .catch(error=>{
        console.log(error);
      })
  }, []);

  return exhibitions.map((exhibition) => {
    if (exhibition.exhibitionFloor === "L3") {
      return (
        <Card className="exhibitionGridCard" key={exhibition._id}>
          <CardHeader
            title={exhibition.exhibitionTitle}
            subheader={exhibition.exhibitionTitleSub}
          />
          <CardMedia
            component="img"
            height="194"
            image={exhibition.exhibitionImage}
            alt={exhibition.exhibitionTitle}
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {exhibition.exhibitionEntry}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exhibition.exhibitionDescription}
            </Typography>
            <Typography variant="p" color="text.secondary">
              Exhibition ends:{" "}
              {new Date(exhibition.exhibitionEndDate).toLocaleDateString(
                "en-GB"
              )}
              <br></br>
            </Typography>
            <Link to={`/exhibitions/${exhibition._id}`}>More Details</Link>
          </CardContent>
        </Card>
      );
    } else {
      return null;
    }
  });
}

