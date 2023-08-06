import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Admin(props) {
    const location = useLocation();
    React.useEffect(() => {
        props.setLoader(10);
        props.setLoader(70);
        props.setLoader(100);
    }, [location.pathname]);

    return (
        <Container maxWidth='xl' sx={{height:'100vh'}}>
            <Box sx={{
                display:{xs:'flex',md:'flex',flexDirection:'row'}
            }}>
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    sx={{
                    mt: 9,
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'Helvetica',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                    }}
                >
                    Make<br/>Interactive Learnings
                </Typography>
            </Box>
        </Container>
    )
}
