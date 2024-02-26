import Button from '@mui/material/Button';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { shortenText } from '../../helper/helper';

function CardEL({title, slug, coverPhoto, author}) {
  return (
    <Card sx={{boxShadow: "rgb(0, 0, 0, 0.2) 0px 4px 12px", borderRadius: 4, margin: "15px"}}>
        
        <CardHeader 
        avatar= {<Avatar 
            src={author.avatar.url}
            sx={{marginLeft: 2}}
            />}
        title = {<Typography 
            component="p" 
            variant='p' 
            color="text.primary">
                {author.name}
                </Typography>}
         />
        <CardMedia 
            component="img" 
            height="225" 
            // sx={{maxHeight: "50px"}}
            image={coverPhoto.url} 
            alt={slug}/>
        <CardContent >
            <Typography component="h3" variant="h6" color="text.primary" fontWeight={500} fontSize={15} height={60}  >
                {/* {title}  */}
                {shortenText(title)}
            </Typography>
        </CardContent>
            <Divider variant='middle' sx={{margin: "10px"}} />
        <CardActions>
        <Link to ={`/blogs/${slug}`} style={{textDecoration: "none", width: "100%" }}>
        <Button variant="outlined" size= "small" sx={{width: "100%", borderRadius: 3}}>
            Read more
        </Button> 
        </Link>
        </CardActions>
        {console.log(slug)}
    </Card>
  )
}

export default CardEL