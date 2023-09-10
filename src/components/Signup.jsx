import { Button, Card, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signup(props) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        props.setLoader(10);
        props.setLoader(70);
        props.setLoader(100);
    }, [location.pathname]);

    const handleSignUp = async () => {
        try {
            console.log("signup")
            const res = await fetch(`http://localhost:3000/${props.user}/signup`, {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                }),
                headers: {
                    "Content-type": "application/json",
                },
            })
            const data = await res.json();
            console.log(data);
            localStorage.setItem("token",data.token);
            props.updateIsLogin(true);
            if(props.user === 'users') navigate("/");
            else if(props.user === 'admin') navigate("/admin/dashboard");
        } catch (error) {
            console.error();
        }
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
            height: "100vh",
            display: {
                xs: "flex",
                md: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            },
            }}
        >
            <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
                display: { xs: "flex", md: "flex" },
                fontFamily: "Helvetica",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
            }}
            >
            Welcome to{" "}
            <span style={{ color: "#ce93d8", marginLeft: 5 }}> bitlearn</span>.
            Please SignUp.
            </Typography>

            <Card
                variant="outlined"
                sx={{
                    m: 2,
                    padding: 5,
                    borderRadius: 2,
                    border: "1px solid",
                }}
            >
                <TextField
                    id="username"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{ m: 1 }}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <TextField
                    id="password"
                    fullWidth
                    label="Password"
                    variant="outlined"
                    sx={{ m: 1 }}
                    type="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button
                    size="large"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    sx={{ m: 1, mt: 4 }}
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
            </Card>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    display: { xs: "flex", md: "flex" },
                    fontFamily: "Helvetica",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                }}
            >
                Already have an account.
                <Button
                    color="secondary"
                    sx={{
                    display: { xs: "flex", md: "flex" },
                    textTransform: "none",
                    }}
                    onClick={() => {
                    navigate("/login");
                    }}
                >
                    Log In
                </Button>
            </Typography>
        </Container>
    );
}
