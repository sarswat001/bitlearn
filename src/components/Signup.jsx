import { Button, Card, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
    const navigate = useNavigate();

    React.useEffect(() => {
        props.setLoader(10);
        props.setLoader(70);
        props.setLoader(100);
    }, []);

    const updateLoader = (load) => {
        props.setLoader(load);
    }

    return (
        <Container maxWidth="xl" sx={{
            height:'100vh',
            display: {
                xs: "flex",
                md: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
        }}}>
            {updateLoader(10)}
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'Helvetica',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    textDecoration: 'none'
                }}
            >
                Welcome to <span style={{ color: '#ce93d8', marginLeft:5 }}> bitlearn</span>. Please SignUp.
            </Typography>
            
            <Card variant="outlined" sx={{
                m:2,
                padding:5,
                borderRadius:2,
                border:'1px solid'
            }}>
                <TextField id="outlined-basic" fullWidth  label="Email" variant="outlined" sx={{m:1}}/>
                <TextField id="outlined-basic" fullWidth label="Password" variant="outlined" sx={{m:1}}/>
                <Button size="large" color="secondary" fullWidth variant="contained" sx={{m:1,mt:4}}>Sign Up</Button>
            </Card>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'Helvetica',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                }}
            >
                Already have an account.
            <Button
                color="secondary"
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    textTransform: 'none'
                }}
                onClick={()=>{
                    navigate('/login');
                }}
            >
                Log In
            </Button>
            </Typography>
        </Container>
    );
}
