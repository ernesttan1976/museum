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


  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <>
      <Typography variant="h5">Comments</Typography>
      {comments.map((review) => (
        <Typography variant="subtitle1" key={review._id}>
          {review.comments}
        </Typography>
      ))}
      {user && user.userRole === "user" ? (
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
          <br></br>
          <Button
            onClick={handleAddNewComment}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </>
      ) : null}

      
    </>
  );
}

export default ExhibitionComments;