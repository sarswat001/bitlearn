import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Admin(props) {
    React.useEffect(() => {
        props.setLoader(10);
        props.setLoader(70);
        props.setLoader(100);
    }, []);

    const updateLoader = (load) => {
        props.setLoader(load);
    }

    return (
        <Container maxWidth='xl' sx={{height:'100vh'}}>
            {updateLoader(10)}
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
