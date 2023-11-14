import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import reviewImage1 from '../reviewImage1.png';
import reviewImage2 from '../reviewImage2.png';

export default function Reviews() {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:{ xs: 'column', md: 'row' }
        }}>
            <Card sx={{
                display:'flex',
                flexDirection:'column',
                p:2,
                m:2,
                border:'1px solid gray',
                boxShadow: 'inset 0 1px 14px 0 rgba(255, 255, 255, 0.06)',
            }}>
                <Box sx={{
                    display:'flex',
                    mb:2,
                    gap:2
                }}>
                    <Typography variant='h6'>
                        I was struggling to learn a new language, but this course <span style={{color:'#ce93d8'}}> made it so easy</span>. I was able to learn the basics in just a few weeks.
                    </Typography>
                    <CardMedia
                        component="img"
                        //height={200}
                        image={reviewImage1}
                        alt=""
                        sx={{
                            display:{ xs: 'none', md: 'flex' },
                            ml:1,
                            width:'25%',
                            border:'0.5px solid violet',
                            borderRadius:2
                        }}
                    />
                </Box>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Typography variant='h6' fontFamily={'cursive'}>Jacob Smith</Typography>
                        <Typography variant='h6' fontFamily={'initial'} sx={{color:'#ce93d8',ml:3}}>- Feelancer</Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        //height={200}
                        image={reviewImage1}
                        alt=""
                        sx={{
                            display:{ xs: 'flex', md: 'none' },
                            ml:1,
                            width:'25%',
                            border:'0.5px solid violet',
                            borderRadius:2
                        }}
                    />
                </Box>
            </Card>
            <Card sx={{
                display:'flex',
                flexDirection:'column',
                p:2,
                m:2,
                border:'1px solid gray',
                boxShadow: 'inset 0 3px 24px 0 rgba(255, 255, 255, 0.06)',
            }}>
                <Box sx={{
                    display:'flex',
                    mb:2,
                    gap:2
                }}>
                    <Typography variant='h6'>
                    As a busy professional, finding time for <span style={{color:'#ce93d8'}}>learning seemed impossible</span>. This course helped a lot. Now, I fit learning into my schedule effortlessly.
                    </Typography>
                    <CardMedia
                        component="img"
                        //height={200}
                        image={reviewImage2}
                        alt=""
                        sx={{
                            display:{ xs: 'none', md: 'flex' },
                            ml:1,
                            width:'20%',
                            border:'0.5px solid violet',
                            borderRadius:2
                        }}
                    />
                </Box>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Typography variant='h6' fontFamily={'cursive'}>Mark Wood</Typography>
                        <Typography variant='h6' fontFamily={'initial'} sx={{color:'#ce93d8',ml:3}}>- Student</Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        //height={200}
                        image={reviewImage2}
                        alt=""
                        sx={{
                            display:{ xs: 'flex', md: 'none' },
                            ml:1,
                            width:'25%',
                            border:'0.5px solid violet',
                            borderRadius:2
                        }}
                    />
                </Box>
            </Card>
        </Box>
    )
}
