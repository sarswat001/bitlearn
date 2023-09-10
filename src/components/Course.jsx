import { Container, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Course() {
    const { courseId } = useParams();
    return (
        <>
            <Container
                maxWidth='xl'
                sx={{
                    display:'flex',
                    flexDirection:{md:'column',xs:'column'},
                    justifyContent:'space-between',
                    minHeight:'91vh'
                }}
            >
                <Typography variant='h7'>
                    This is id:{courseId} course card.
                </Typography>
            </Container>
        </>
    )
}
