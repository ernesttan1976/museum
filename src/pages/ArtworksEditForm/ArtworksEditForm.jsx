import React from 'react';

function ArtworksEditForm(props) {
    return (
    <div>
        <h1>Edit Artworks</h1>
        <form>
          <label>Image URL:</label>
          <input type="text" />
          <br />
          <label>Artist Name:</label>
          <input type="text" />
          <br />
          <label>Artwork Title :</label>
          <input type="text" />
          <br />
          <label>Year:</label>
          <input type="text" />
          <br />
          <label>Artwork Medium:</label>
          <input type="text" />
          <br />
          <label>Artwork Dimension:</label>
          <input type="text" />
          <br />
          <label>Artwork Information:</label>
          <input type="text" />
          <br />
          <label>Artwork Location:</label>
          <input type="text" />
          <br />
        </form>
        <br />
        <button>Update Artwork</button>     
    </div>
    );
}
 
export default ArtworksEditForm;