import { useQuery } from '@apollo/client'
import React from 'react'
// import {GET_BLOGS_INFO} from '../graphql/queries'
import { Grid } from '@mui/material'
import CardEL from '../shared/CardEL'
import { GET_BLOGS_INFO } from '../graphql/queries'
import Loader from '../shared/Loader'

function Blogs() {
  const {loading, data, errors}= useQuery(GET_BLOGS_INFO)
  if (loading) return <Loader />
  if (errors) return <h4>error!</h4>
  console.log(data);
  return (
    <Grid container spacing={2}>
    {data.posts.map(post => (
    <Grid xs={12} sm={6} md={4} key={post.id}>
    <CardEL {...post} />
  </Grid>
    ))} 
    </Grid>
  )
}

export default Blogs