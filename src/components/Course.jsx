import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/course.css';
import Reviews from './Reviews';

export default function Course() {
    const { courseId } = useParams();
    const [course,setCourse] = useState({});

    React.useEffect(() => {
        async function fetchCourses(){
            const res = await fetch(`http://localhost:3000/course/${courseId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            })
            const data = await res.json();
            console.log(data);
            setCourse(data.course);
        }
        fetchCourses();
    }, []);

    return (
        <>
            <Container disableGutters maxWidth='xl' sx={{
                p:3,
                pl:{ xs: '3%', md: '10%' },
                pr:{ xs: '3%', md: '10%' }
            }}>
                <Box sx={{ position: { md: 'relative' } }}>
                    <GrayTopper course={course} />
                    <CourseBuyCard course={course} />
                </Box>
                <CourseDescription description={course.description}/>
                <CourseContent content={course.videoLink}/>
                <ReviewsComponent/>
            </Container>
        </>
    )
}

function GrayTopper({course}){
    const {title,category,author,publishedDate,imageLink,price} = course;

    const getDiscountPercentage = (amount) => {
        return Math.floor((3999 - amount) / 3999 * 100);
    }
    return (
        <Box sx={{
            display:'flex',
            flexDirection: {xs:'column', md:'row'},
            height:{ md: 200 },
            width:'100%',
            fontFamily:'Helvetica',
            position:'relative',
            //zIndex:0,
            //top:0
        }}>
            <CardMedia
                component="img"
                //height={200}
                image={imageLink}
                alt=""
                sx={{
                    display: {xs:'flex',md:'none'},
                }}
            />
            <Paper
                elevation={3}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:{ xs: 'flex-start', md: 'center' },
                    //alignItems:{ xs: 'flex-start'},
                    width:{md:'100%'},
                    height:{ md: 200 },
                    borderRadius:2,
                    gap:{ xs: 1, md: 4 },
                    pl:{ xs: 1, md: 6 },
                    pb:{xs:1}
                }}
            >
                <Typography  sx={{fontWeight:'bold',fontSize:{ xs: '20pt', md: '30pt' },mb:1,mt:1}}>
                    {title}
                </Typography>
                <Box sx={{
                    display:'flex',
                    flexDirection:{xs:'column',md:'row'},
                    alignItems:{ xs: 'flex-start'},
                    gap:{xs:1,md:6}
                }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:{ xs: 'flex-start', md: 'center' },
                        justifyContent:'space-between'
                    }}>
                        <Typography variant='h7' className='graytopper-subheaders'>
                            Author
                        </Typography>
                        <Typography variant='h6'>
                            {author}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:{ xs: 'flex-start', md: 'center' },
                        justifyContent:'space-between'
                    }}>
                        <Typography variant='h7' className='graytopper-subheaders'>
                            Category
                        </Typography>
                        <Typography variant='h6'>
                            {category}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:{ xs: 'flex-start', md: 'center' },
                        justifyContent:'space-between'
                    }}>
                        <Typography variant='h7' className='graytopper-subheaders'>
                            Published On
                        </Typography>
                        <Typography variant='h6'>
                            {publishedDate}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:{ xs: 'flex-start', md: 'center' },
                        justifyContent:'space-between'
                    }}>
                        <Typography variant='h7' className='graytopper-subheaders'>
                            Purchases
                        </Typography>
                        <Typography variant='h6'>
                            {'100+'}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:{xs:'flex',md:'none'},
                        flexDirection:'column',
                        alignItems:{ xs: 'flex-start' },
                        mt:2
                    }}>
                        <Box sx={{
                            display:'flex',
                            alignItems: 'center'
                        }}>
                            <Typography variant='h4' fontWeight={'bold'} fontFamily={'inherit'}>
                                &#8377; {price}
                            </Typography>
                            <Typography variant='h7' ml={1} sx={{textDecoration:'line-through'}} fontFamily={'inherit'}>
                                &#8377; {3999}
                            </Typography>
                            <Typography variant='h7' ml={2} sx={{color:'violet'}} fontFamily={'inherit'} fontWeight={'bold'}>
                                {getDiscountPercentage(price)}% off
                            </Typography>
                        </Box>
                        <Typography variant='h7' sx={{color:'#ce93d8'}} fontFamily={'inherit'}>
                            Hurry 😱 8 hours left at this price!
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:{xs:'flex',md:'none'},
                        width:'98%'
                    }}>
                        <Button
                            variant='contained'
                            color="secondary"
                            fullWidth
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                textTransform: 'none',
                                mt:1
                            }}
                        >
                            Buy Now
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

function CourseBuyCard({course}){
    const {title,description,imageLink,author,courseId,price} = course;

    const getDiscountPercentage = (amount) => {
        return Math.floor((3999 - amount) / 3999 * 100);
    }

    return (
        <Box
            sx={{
                display:{ xs: 'none', md: 'flex' },
                position: 'absolute',
                right: 70,
                top: 25,
                width:'30%',
                zIndex: 1,
            }}
        >
            <Card
                variant='outlined'
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    // marginTop:-5,
                    // zIndex:1,
                    backgroundColor:'#121212',backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
                }}
            >
                
                <CardMedia
                    component="img"
                    //height={200}
                    image={imageLink}
                    alt=""
                    sx={{
                        display:'flex'
                    }}
                />
                <CardContent
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        fontFamily:'Open Sans'
                        //mb: -1.5
                    }}
                >
                    <Box sx={{
                        display:'flex',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h5' fontWeight={'bold'} fontFamily={'inherit'}>
                            &#8377; {price}
                        </Typography>
                        <Typography variant='h7' ml={1} sx={{textDecoration:'line-through'}} fontFamily={'inherit'}>
                            &#8377; {3999}
                        </Typography>
                        <Typography variant='h7' ml={2} sx={{color:'violet'}} fontFamily={'inherit'} fontWeight={'bold'}>
                            {getDiscountPercentage(price)}% off
                        </Typography>
                    </Box>
                    <Typography variant='h7' sx={{color:'#ce93d8'}} fontFamily={'inherit'}>
                        Hurry 😱 8 hours left at this price!
                    </Typography>
                </CardContent>
                <Box sx={{
                    
                    //width:'100%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:2,
                    paddingTop:2
                }}>
                    <Button
                        variant='contained'
                        color="secondary"
                        fullWidth
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            textTransform: 'none'
                        }}
                    >
                        Buy Now
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}

function CourseDescription({description}){
    return(
        <Box sx={{
            display:'flex'
        }}>
            <Card variant='outlined' sx={{
                width:{ xs: '100%', md: '50%' },
                margin:{ xs: 1, md: 5 },
                p:{ xs: 1, md: 3 },
                mb:{ xs: 2},
                border:'1px solid #ce93d8'
            }}>
                <Typography variant='h5' color={'#ce93d8'} fontWeight={'400'} mb={2}>
                    About
                </Typography>
                <Typography  lineHeight={1.5}>
                    {description}
                </Typography>
            </Card>
        </Box>
    )
}

function CourseContent({content}){
    return(
        <Box sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            //margin:5,
        }}>
            <Typography variant='h5' sx={{color:'#ce93d8',mb:1}}>
                Course Content
            </Typography>
            <Accordion sx={{
                padding:1
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:'violet'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Video</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <video
                        className="VideoInput_video"
                        width="100%"
                        controls
                        src={content}
                    />
                </AccordionDetails>
            </Accordion>
            
        </Box>
    )
}

function ReviewsComponent(){
    return (<Box sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            mt:3
            //margin:5,
        }}>
            <Typography variant='h5' sx={{color:'#ce93d8',mb:1}}>
                Reviews
            </Typography>
            <Reviews/>
        </Box>
    )
}
