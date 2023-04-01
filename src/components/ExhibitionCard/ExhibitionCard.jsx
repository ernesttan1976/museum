import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function ExhibitionCard() {
  const [exhibitions, setExhibition] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch("/api/exhibitions")
      .then((response) => response.json())
      .then((data) => setExhibition(data));
  }, []);

  return (
    <>
    {exhibitions.map((exhibition, index) => (
        <Card key={index} className="Card" sx={{ maxWidth: 345 }}>
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
        <Typography variant="body2" color="text.secondary">
        {exhibition.exhibitionEntry}
          </Typography> 
        <Typography variant="body2" color="text.secondary">
        {exhibition.exhibitionStartDate}
          </Typography> 
          <Typography variant="body2" color="text.secondary">
            {exhibition.exhibitionDescription}
          </Typography>
        </CardContent>
      </Card>
    ))}
      
    </>
  );
}