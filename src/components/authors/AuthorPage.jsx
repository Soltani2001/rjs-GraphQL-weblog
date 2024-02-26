import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHOR_INFO } from '../graphql/queries'
import { useParams } from 'react-router-dom';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import Loader from '../shared/Loader';
import sanitizeHtml from 'sanitize-html'


function AuthorPage() {
  const {slug} = useParams()
  console.log(slug);
  const {loading, errors, data} = useQuery(GET_AUTHOR_INFO, {
    variables:{ slug }
  })
  console.log(data);
  if (loading) return <Loader />
  if (errors) return <h4>error!</h4>
  return (<>
      <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
            <Avatar src={data.author.avatar.url} sx={{width: 250, height:250}}/>
            <Typography component="h3" variant="h5" fontWeight={700} mt={4}>{data.author.name}</Typography>
            <Typography component="p" variant="h5" mt={2} color="text.secondary">{data.author.field}</Typography>
          </Grid>
          <Grid item xs={12} mt={5} lineHeight={1.6} fontSize={20}>
            <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.author.description.html)}}></div>
            </Grid>
        </Grid>
      </Container>
    
  </>
  )
}

export default AuthorPage