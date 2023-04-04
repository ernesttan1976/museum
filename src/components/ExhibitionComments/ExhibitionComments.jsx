import { Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ExhibitionComments({ comments }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [exhibitions, setExhibition] = useState([]);
  const [data, setData] = useState([]);

  // add exhibition
  const addExhibition = (exhibition) =>
    setExhibition([exhibition, ...exhibitions]);

  const handleAddNewExhibition = async () => {
    const response = await fetch(`/api/exhibitions/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const exhibition = await response.json();
    addExhibition(exhibition);
    navigate("/");
  };

  function handleChange(ev) {
    ev.preventDefault();
    setData({ ...data, [ev.target.name]: ev.target.value });
  }

  if (!comments) {
    return null;
  }

  return (
    <>
      <Typography>{JSON.stringify(comments)}</Typography>
      {/* {comments.map((comment) => (
        <Typography>{comment}</Typography>
      ))} */}
      <label>Comment:</label>
      <textarea
        type="text"
        name="comments"
        rows="4"
        cols="50"
        onChange={handleChange}
      ></textarea>
      <Link to={`/exhibitions/${id}`}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleAddNewExhibition}
        >
          Submit
        </Button>
      </Link>
    </>
  );
}

export default ExhibitionComments;
