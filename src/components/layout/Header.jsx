import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position='sticky'>
        <Container maxWidth= "lg">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Link to="/" style={{textDecoration: "none" }} >
            <Typography 
              component="h1" 
              variant='h5' 
              color='#fff'
              fontWeight='Bold' 
              flex={1}>
                My Blog
            </Typography>
            </Link>
            <BookIcon />
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header