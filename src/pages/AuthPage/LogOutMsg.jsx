import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./LogOutMsg.css";

export default function LogOutMsg({setUser}) {

  return (
    <Box className="LogOutMSG">
        <Typography> User has log out successfully.</Typography>
    </Box>
  );
};

