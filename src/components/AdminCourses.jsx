import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import * as React from 'react';
import CourseCard from './CourseCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    //overflow: 'clip',
    // position: 'relative',
    maxHeight: 400,
    // textOverflow: 'ellipsis',
}));

const description = "In this setup, the Navbar is rendered above the AdminDashboard, and the AppBar remains fixed below the Navbar. The content in the Box scrolls independently of the AppBar. Please adjust the styling and positioning as needed to match your design. In this setup, the Navbar is rendered above the AdminDashboard, and the AppBar remains fixed below the Navbar. The content in the Box scrolls independently of the AppBar. Please adjust the styling and positioning as needed to match your design."

export default function AdminCourses() {
    const[courses,setCourses] = React.useState([]);
    React.useEffect(() => {
        async function fetchCourses(){
            const res = await fetch(`http://localhost:3000/admin/courses/`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("token")
                },
            })
            const data = await res.json();
            console.log(data);
            setCourses(data);
        }
        fetchCourses();
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                {courses.map((course, index) => (
                    <Grid item xs={1} sm={4} md={3} key={index}>
                        <Item>
                            <CourseCard
                                courseId={course._id}
                                title={course.title}
                                description={course.description}
                                imageLink={course.imageLink}
                                author={course.author}
                                price={course.price}
                            />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
