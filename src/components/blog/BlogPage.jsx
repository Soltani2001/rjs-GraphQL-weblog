import { useQuery } from '@apollo/client';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_CONTENT } from '../graphql/queries';
import Loader from '../shared/Loader';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import sanitizeHtml from 'sanitize-html'
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';
import ScrollTop from '../shared/ScrollTop';


function BlogPage() {
  <ScrollTop />
  const {slug} = useParams();
  const navigate = useNavigate()
  const {loading, data, errors} = useQuery(GET_CONTENT,{
    variables: {slug}
  })
  console.log(data); 
  if (loading) return <Loader />
  if (errors) return <h4>error!</h4>
  return (
    <Container maxWidth="lg" sx={{scrollY: "0"}}>
      
      <Grid container sx={scrollY = "0"}>
        <Grid item ml={0} mt={4} sx={{cursor: "pointer"}}>
        <ArrowBackIosRoundedIcon onClick={()=>navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography component="h2" variant='h4' color='primary' fontWeight={700}>{data.post.title}</Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img width="100%" src={data.post.coverPhoto.url} alt={data.post.title} style={{borderRadius: "15px"}} />
        </Grid>
        <Grid item xs={12} display='flex' alignItems='center' mt={5}>
          <Avatar src={data.post.author.avatar.url} sx={{width: 70, height: 70, marginRight: 2}}/>
          <Box component='div'> 
          <Typography component="p" variant='h5' fontWeight={700}>{data.post.author.name}</Typography>
          <Typography component="p" variant='h6' fontWeight={300} color='text.secondary'>{data.post.author.field}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5} lineHeight={1.6} fontSize={20}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}>
          </div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug = {slug}/>
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage