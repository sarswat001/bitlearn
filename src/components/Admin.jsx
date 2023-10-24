import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Card, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { progressState, userState } from '../store/atoms/Course';

export default function Admin(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const setProgress = useSetRecoilState(progressState);
    const setUser = useSetRecoilState(userState);

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
        <>
            <Container maxWidth='xl' sx={{ display: 'flex',height: { xs: 'none', md: '91vh'},flexDirection: { xs: 'column', md: 'row' },flexWrap:1,alignItems:'center',justifyContent:'spacing-between'}}>
                <Box
                    m={8}
                    // pr={20}
                    // //pt={10}
                    // pb={5}
                    sx={{
                        display:{xs:'flex',md:'flex',flexDirection:'column',flexGrow:1},
                        //backgroundColor:'red',
                        //mt:'200px'
                    }}
                >
                    <Typography
                        variant="h6"
                        component="a"
                        sx={{
                            display: { xs: "flex", md: "flex" },
                            fontFamily: "Helvetica",
                            fontWeight: 500,
                            //letterSpacing: ".1rem",
                            textDecoration: "none",
                            color: "#ce93d8",
                            mb: 4
                        }}
                        >
                        SHARE YOUR SKILL
                    </Typography>
                    <Typography
                        variant="h3"
                        component="a"
                        //p={25}
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Helvetica',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            mb: 4
                        }}
                    >
                        Make<br/>Interactive Learnings
                    </Typography>
                    <Typography
                        variant="h6"
                        component="a"
                        //p={25}
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Helvetica',
                            fontWeight: 500,
                            textDecoration: 'none',
                            lineHeight: 1.2,
                            mb: 4
                        }}
                    >
                        Join a growing community,get peer insights,and contribute
                        exciting learning courses and collaborations.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            display: "flex",
                            lineHeight: 2.75,
                            border: "2px solid",
                            fontWeight: "500",
                        }}
                        onClick={()=>{
                            setUser('admin');
                            navigate('/signup');
                        }}
                        >
                        Create Admin Account
                    </Button>
                </Box>
                <Box
                    //m={10}
                    // mt={10}
                    // mr={10}
                    // mb={8}

                    ssx={{
                        display: { xs: "flex", md: "flex", flexDirection: "column" },
                    }}>
                    <img
                        width="100%"
                        src="../../public/mainadmin.png"
                        alt=""
                        loading="lazy"
                    />
                </Box>
            </Container>
            <Container maxWidth='xl' sx={{  display: 'flex',flexDirection:{ xs: 'column', md: 'row' },flexWrap:1,backgroundColor:'#E8BFEC',color:'black'}}>
                <Box
                    //m={10}
                    sx={{
                        display:{xs:'flex',md:'flex',flexDirection:'column',flexGrow:0},
                        margin: {xs: 2,md: 5},
                }}>
                    <Typography
                        variant="h4"
                        component="a"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Helvetica',
                            fontWeight: 700,
                            letterSpacing: '.05rem',
                            textDecoration: 'none'
                        }}
                    >
                        Keep<br/>your students<br/>engaged.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="a"
                        //p={25}
                        sx={{
                            fontFamily: 'Helvetica',
                            fontWeight: 500,
                            textDecoration: 'none',
                            lineHeight: 1,
                            mt: 4
                        }}
                    >
                        Imagine the possibilities, with<span style={{ color: "#910D9E",fontWeight:'700'}}> bitlearn</span>,
                        you can use interactive tools to contextualize learning for your students and measure their progress.
                    </Typography>
                    <Typography
                        variant="h7"
                        component="a"
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            fontFamily: 'Helvetica',
                            fontWeight: 600,
                            textDecoration: 'none',
                            lineHeight: 0.7,
                            mt: 4
                        }}
                    >
                        LEARN MORE <ArrowRightAltIcon/>
                    </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem sx={{display:{ xs: 'none', md: 'flex' },mt:10,mb:10,border:'2px solid',borderRadius:'5px',color:'#121212'}}/>
                <Divider orientation="horizontal" variant="middle" flexItem sx={{display:{ xs: 'flex', md: 'none' },mt:5,mb:5,border:'2px solid',borderRadius:'5px',color:'#121212'}}/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        margin: {xs: 1,md: 5},
                        flexGrow: 0,
                        flexWrap: 1,
                }}>
                    <Card variant="outlined" sx={{display:'flex',flexDirection:'column',m:2,backgroundColor:'#EEDCF1',color:'black',borderRadius:'10px'}}>
                        <Divider orientation="horizontal" variant="fullWidth" flexItem sx={{border:'3px solid',borderRadius:'5px',color:'#910D9E'}}/>
                        <img
                            width="20%"
                            style={{margin:15,marginTop:20,color:'#910D9E'}}
                            src="../../public/course.png"
                            alt=""
                            color='#910D9E'
                            loading="lazy"
                        />
                        <Typography
                        variant="h7"
                        
                        component="a"
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            fontFamily: 'Helvetica',
                            fontWeight: 600,
                            textDecoration: 'none',
                            ///lineHeight: 0.7,
                            //mt: 4
                            p:2
                        }}
                    >
                        CREATE COURSES
                    </Typography>
                    <Typography
                        variant="h7"
                        component="a"
                        //p={25}
                        sx={{
                            fontFamily: 'Helvetica',
                            fontWeight: 500,
                            textDecoration: 'none',
                            lineHeight: 1.2,
                            mt: 1,
                            p:2
                        }}
                    >
                        Create content in your preferred language. Design courses in simple and easy way & store files
                        on dashboard before publishing the course.
                    </Typography>
                    </Card>
                    <Card variant="outlined" sx={{display:'flex',flexDirection:'column',m:2,backgroundColor:'#EEDCF1',color:'black',borderRadius:'10px'}}>
                        <Divider orientation="horizontal" variant="fullWidth" flexItem sx={{border:'3px solid',borderRadius:'5px',color:'#910D9E'}}/>
                        <img
                            width="20%"
                            style={{margin:15,marginTop:20,color:'#910D9E'}}
                            src="../../public/engage.png"
                            alt=""
                            color='#910D9E'
                            loading="lazy"
                        />
                        <Typography
                        variant="h7"
                        component="a"
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            fontFamily: 'Helvetica',
                            fontWeight: 600,
                            textDecoration: 'none',
                            ///lineHeight: 0.7,
                            //mt: 4
                            p:2
                        }}
                        >
                            ENGAGE USERS
                        </Typography>
                        <Typography
                            variant="h7"
                            component="a"
                            //p={25}
                            sx={{
                                fontFamily: 'Helvetica',
                                fontWeight: 500,
                                textDecoration: 'none',
                                lineHeight: 1.2,
                                mt: 1,
                                p:2
                            }}
                        >
                            Create content in your preferred language. Design courses in simple and easy way & store files
                            on dashboard before publishing the course.
                        </Typography>
                    </Card>

                </Box>
            </Container>
            <Container maxWidth='xl' sx={{ height: '10vh', display: 'flex',flexDirection:'row',flexWrap: 1}}>

            </Container>
        </>
    )
}
