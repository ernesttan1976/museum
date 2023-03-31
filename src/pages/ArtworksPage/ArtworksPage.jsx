// admin user -> show artworks
import Box from '@mui/material/Box';
import ArtworkGrid from '../../components/ArtworkGrid/ArtworkGrid';

export default function Artworks(){
    return(
        <Box className="ArtworksPage">
            <h2>Artworks</h2>
            <ArtworkGrid />
        </Box>
    )
}

