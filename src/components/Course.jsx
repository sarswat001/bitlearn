import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <GrayTopper title={course.title}/>
            <Container
                maxWidth='xl'
                //disableGutters
                sx={{
                    padding:2,
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Grid container spacing={{ xs: 2, md: 5,lg: 12 }}>
                    <Grid item lg={4} md={12} sm={12}>
                        <CourseDescription course={course}/>
                    </Grid>
                    <Grid item lg={8} md={12} sm={12}>
                        <CourseContent content={course.videoLink} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

function GrayTopper({title}){
    return (
        <Box sx={{
            height:200,
            width:'100%',
            zIndex:0,
            top:0,
            //marginBottom:-10
        }}>
            <Paper
                elevation={3}
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%',
                    height:200,
                    borderRadius:0
                }}
            >
                <Typography variant='h4'>
                    {title}
                </Typography>
            </Paper>
        </Box>
    )
}

function CourseDescription({course}){
    const {title,description,imageLink,author,courseId,price} = course;
    return (
        <Card
            variant='outlined'
            sx={{
                display:'flex',
                flexDirection:'column',
                //justifyContent: 'space-between',
                // minHeight: 380,
                // maxHeight: 380,
                marginTop:-7,
                zIndex:1,
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
                    alignItems: 'space-between',
                    //mb: -1.5
                }}
            >
                {/* <Typography noWrap variant='h5' color={'#ce93d8'}>
                    {title}
                </Typography> */}
                <Typography variant='h7'>
                    {description}
                </Typography>
                <Typography variant='h7' sx={{mt:1,color:'gray'}}>
                    Published By: {author}
                </Typography>
                <Typography variant='h7'>
                    Rs. {price}
                </Typography>
            </CardContent>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                ml:1.5
            }}>
                <PlayCircleOutlineIcon fontSize='medium' sx={{color:'#ce93d8'}} />
            </Box>
        </Card>
    )
}

function CourseContent({content}){
    return(
        <Box sx={{
            display:'flex',
            marginTop:-5
        }}>
            <video
            className="VideoInput_video"
            width="100%"
            controls
            src={content}
            />
        </Box>
    )
}
