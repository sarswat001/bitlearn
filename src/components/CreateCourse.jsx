import { Button, Card, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Course from './CourseCard';

export default function CreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageLink, setImageLink] = useState();
  const [videoLink, setVideoLink] = useState();
  const [published, setPublished] = useState(false);

  async function handleFileChange(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`http://localhost:3000/upload`, {
        method: "POST",
        body: formData
    })
    const data = await res.json();
    console.log(data);
    setImageLink(data.fileURL);
  }
  async function handleVideoChange(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`http://localhost:3000/upload`, {
        method: "POST",
        body: formData
    })
    const data = await res.json();
    console.log(data);
    setVideoLink(data.fileURL);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDescChange(e) {
    setDescription(e.target.value);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  const handleCreateCourse = async () => {
    try {
        console.log("signup")
        const res = await fetch(`http://localhost:3000/admin/courses`, {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                imageLink,
                videoLink,
                price,
                published
            }),
            headers: {
              "Content-type": "application/json",
              "Authorization": "Bearer "+localStorage.getItem("token")
            },
        })
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error();
    } finally{
      set
    }
  };

  return (
    <>
        <Container
          maxWidth='xl'
          sx={{
            display:'flex',
            flexDirection:{md:'row',xs:'column'},
            justifyContent:'space-between',
            alignItems:'center'
          }}
        >
          <Card
            variant='outlined'
            sx={{
              padding:2,
              m:2,
              display:'flex',
              flexDirection:'column',
              justifyContent: 'space-between',
              //alignItems:'center',
              border:'1px solid',
              flexGrow:1,
              minHeight:500
            }}
          >
            <Typography variant='h4' color={'#ce93d8'}>
              Create Course
            </Typography>
            <TextField onChange={handleTitleChange} fullWidth label="Title" variant="standard" />
            <TextField onChange={handleDescChange} fullWidth label="Description" multiline maxRows={4} variant="standard"/>
            <Typography variant='h7'>
              Upload Thumbnail:
              <input type="file" onChange={handleFileChange} style={{marginLeft:'15px'}}/>
            </Typography>
            <Typography variant='h7'>
              Upload Video:
              <input type="file" onChange={handleVideoChange} accept=".mov,.mp4" style={{marginLeft:'15px'}}/>
            </Typography>
            <TextField variant="standard" onChange={handlePriceChange} label="Price" type="number" />
            <Button variant='contained' color='secondary' onClick={handleCreateCourse}>
              CREATE
            </Button>
          </Card>
          <Card
            variant='outlined'
            sx={{
              display:'flex',
              flexDirection:'column',
              maxWidth:500,
              minWidth:400
            }}
          >
            <Course
              title={title}
              description={description}
              imageLink={imageLink}
            />
            {/* {video && (
              <video
                className="VideoInput_video"
                width="100%"
                controls
                src={video}
              />
            )} */}
          </Card>
        </Container>
    </>
  )
}
