export default function ArtworkDeleteButton({ id, delArtwork }) {
  const handleDelete = async () => {
    const response = await fetch(`/api/artworks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    delArtwork(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};


//! to do - after delete to redirect to (/artworks) page.