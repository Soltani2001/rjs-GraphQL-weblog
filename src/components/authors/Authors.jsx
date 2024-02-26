import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom';
import { GET_AUTHORS_INFO } from '../graphql/queries'
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import AuthorPage from './AuthorPage';
import Loader from '../shared/Loader';

function Authors() {
  const {loading, data, errors} = useQuery(GET_AUTHORS_INFO)
  console.log(data);
  if (loading) return <Loader />

  if (errors) return <h4>error!</h4>
  return (
    <Grid container sx={{boxShadow: "rgb(0, 0, 0, 0.2) 0px 4px 12px", borderRadius: 4,} }>
      {data.authors.map((author, index) =>( <React.Fragment key={author.id}>
        <Grid item xs={12}  >
          <Link to={`/authors/${author.slug}`} component={<AuthorPage />} style={{display:'flex', alignItems: "center"}}>
          <Avatar src={author.avatar.url} sx={{margin: "10px", padding:"20px"}}/>
          <Typography component="p" variant='p' color='text.primary' padding={2}>{author.name}</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} ><Divider variant='middle' /></Grid>
        </React.Fragment>
        
      ))}
    </Grid>
  )
}


export default Authors