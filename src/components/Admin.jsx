import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Card, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Admin(props) {
    const location = useLocation();
    const navigate = useNavigate();
    React.useEffect(() => {
        props.setLoader(10);
        props.setLoader(70);
        props.setLoader(100);
    }, [location.pathname]);

    return (
        <>
            <Container maxWidth='xl' sx={{height: '91vh',  display: 'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Box
                    m={10}
                    pr={20}
                    //pt={10}
                    pb={5}
                    sx={{
                        display:{xs:'flex',md:'flex',flexDirection:'column',flexGrow:1},
                        //backgroundColor:'red',
                        //mt:'200px'
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
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
                        noWrap
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
                            props.updateUser('admin');
                            navigate('/signup');
                        }}
                        >
                        Create Admin Account
                    </Button>
                </Box>
                <Box
                    //m={10}
                    mt={10}
                    mr={10}
                    mb={8}

                    sx={{
                        display:{xs:'flex',md:'flex',flexDirection:'row',flexGrow:1}
                }}>
                    <img
                        width="110%"
                        src="../../public/mainadmin.png"
                        alt=""
                        loading="lazy"
                    />
                </Box>
            </Container>
            <Container maxWidth='xl' sx={{ height: '70vh', display: 'flex',flexDirection:'row',backgroundColor:'#E8BFEC',color:'black'}}>
                <Box
                    m={10}
                    sx={{
                        display:{xs:'flex',md:'flex',flexDirection:'column',flexGrow:8},
                        //backgroundColor:'red',
                        //mt:'200px'
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
                <Divider orientation="vertical" variant="middle" flexItem sx={{mt:10,mb:10,border:'2px solid',borderRadius:'5px',color:'#121212'}}/>
                <Box
                    m={10}
                    sx={{
                        display:{xs:'flex',md:'flex',flexDirection:'row',flexGrow:1},
                }}>
                    <Card variant="outlined" sx={{width:'330px' ,display:'flex',flexDirection:'column',m:2,backgroundColor:'#EEDCF1',color:'black',borderRadius:'10px'}}>
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
                        noWrap
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
                    <Card variant="outlined" sx={{width:'330px' ,display:'flex',flexDirection:'column',m:2,backgroundColor:'#EEDCF1',color:'black',borderRadius:'10px'}}>
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
                        noWrap
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
            <Container maxWidth='xl' sx={{ height: '10vh', display: 'flex',flexDirection:'row'}}>

            </Container>
        </>
    )
}
