import { Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ExhibitionComments({ comments, setExhibition }) {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const handleAddNewExhibition = async (event) => {
    const response = await fetch(`/api/exhibitions/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: comment }),
    });
    const exhibition = await response.json();
    setExhibition(exhibition);
  };

  if (!comments) {
    return null;
  }

  return (
    <>
      <Typography variant="h4">Comments</Typography>
      {comments.map((review) => (
        <Typography key={review._id}>{review.comments}</Typography>
      ))}
      <label>Comment:</label>
      <textarea
        type="text"
        rows="4"
        cols="50"
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      ></textarea>
      <Link to={`/exhibitions/${id}`}>
        <Button
          onClick={handleAddNewExhibition}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Link>
    </>
  );
}

export default ExhibitionComments;
