import { Box, Container, Typography } from '@mui/material';

import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { progressState } from '../store/atoms/Course';

export default function Landing(props) {
    const location = useLocation();
    const setProgress = useSetRecoilState(progressState);

    React.useEffect(() => {
        const updateProgress = () => {
            setProgress(10);
            setTimeout(() => {
                setProgress(70);
            }, 1000);
            setTimeout(() => {
                setProgress(90);
            }, 1000);
            setTimeout(() => {
                setProgress(100);
            }, 2000);
        };
        updateProgress();
    }, [location.pathname]);
    
    return (
            <Container maxWidth='xl' sx={{height:'100vh'}}>
                <Box sx={{
                    display:{xs:'flex',md:'flex',flexDirection:'row'}
                }}>
                    <Typography
                        variant="h4"
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
                        Learn<br/>Creative Things
                    </Typography>
                </Box>
            </Container>
    )
}
