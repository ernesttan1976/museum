import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Box from '@mui/material/Box';

export default function AuthPage(){

        return (
        <Box className="AuthPage">
        <h2>Sign Up</h2>
        <SignUpForm />
        </Box>        
    )
}