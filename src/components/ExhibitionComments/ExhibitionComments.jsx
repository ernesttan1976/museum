import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ExhibitionComments({ user, comments, setExhibition }) {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const handleAddNewComment = async (event) => {
    const response = await fetch(`/api/exhibitions/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: comment }),
    });
    const exhibition = await response.json();
    setExhibition(exhibition);
    setComment("");
  };

  return (
    <>
      {user ? (
        <>
          <br></br>
          <Typography variant="h6">Submit Your Comment:</Typography>
          <br></br>
          <TextField
            type="text"
            rows="4"
            cols="50"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
          ></TextField>
          <br></br>
          <Button
            onClick={handleAddNewComment}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit Comment
          </Button>
          <br></br>
        </>
      ) : null}

      {!comments || comments.length === 0 ? (
        null
      ) : (
        <>
          <Typography variant="h4">Comments</Typography><br></br>
          {comments.map((review) => (
            <Typography variant="subtitle1" key={review._id}>
              {review.comments}
            </Typography>
          ))}
        </>
      )}
    </>
  );
}

export default ExhibitionComments;
