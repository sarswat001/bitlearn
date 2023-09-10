import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Card, CardContent, CardMedia, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Course(props) {
    const {title,description,imageLink,author,courseId,price} = props;
    const [anchorElCourse,setAnchorElCourse] = useState(null);
    const settings = ['Edit','Publish','Delete'];
    const handleOpenCourseAdminMenu = (event)=>{
        setAnchorElCourse(event.currentTarget);
    }
    const handleCloseCourseAdminMenu = ()=>{
        setAnchorElCourse(null);
    }
    const handleCourseAdminMenu = (setting)=>()=>{
        console.log(setting)
        setAnchorElCourse(null);
    }
    return (
        <>
            <Card
                variant='outlined'
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    //justifyContent: 'space-between',
                    // minHeight: 380,
                    // maxHeight: 380,
                    backgroundColor:'#121212',backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
                }}
            >
                <Link to={`/courses/${courseId}`}
                    style={{textDecoration: 'none'}}
                >
                    <CardMedia
                        component="img"
                        height={200}
                        image={imageLink}
                        alt=""
                        sx={{
                            display:'flex'
                        }}
                    />
                </Link>
                <CardContent
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'space-between',
                        mb: -1.5
                    }}
                >
                    <Typography noWrap variant='h5' color={'#ce93d8'}>
                        {title}
                    </Typography>
                    <Typography variant='h7'>
                        {description.length > 150?description.substring(0,80)+'...':description}
                    </Typography>
                    <Typography variant='h7' sx={{mt:1,color:'gray'}}>
                        Published By: {author?author:'Unknown'}
                    </Typography>
                    <Typography variant='h7'>
                        Rs. {price?price:''}
                    </Typography>
                </CardContent>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    ml:1.5
                }}>
                    <PlayCircleOutlineIcon fontSize='medium' sx={{color:'#ce93d8'}} />
                    <Tooltip title='Course Settings'>
                        <IconButton onClick={handleOpenCourseAdminMenu}>
                            <MoreVertIcon/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElCourse}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElCourse)}
                        onClose={handleCloseCourseAdminMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCourseAdminMenu(setting)}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Card>
        </>
    )
}
