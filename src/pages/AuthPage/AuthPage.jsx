// import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Box from '@mui/material/Box';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
export default function AuthPage(){

        return (
        <Box className="AuthPage">
        <h2>Sign Up</h2>
        <SignUpForm />
        <h2>Log In</h2>
        <LoginForm />
        </Box>        
    )
}