import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../graphql/mutations';

function CommentForm({slug}) {
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [text, setText] = useState ("")

    const [sendComment, {loading, data, errors}] = useMutation(SEND_COMMENT, {
        variables: {name, email, text, slug}
    })
    console.log(data);

    const sendHandeler =()=>{
        if (name && email && text){
            sendComment()
            console.log("{name, email, text}");
        }else{
            toast.warn("Please fill in all the fields.", {position: "top-center"})
        }
        
        if (data){
            toast.success("Your comment is registered and waiting for confirmation." , {position: "top-center"})
        }        
    }
    
  return (
    <Grid container  sx={{boxShadow: 'rgb(0, 0, 0, 0.1) 0 4px 12px' , borderRadius: 4, py:1, mt: 5}}>
        <Grid item xs={12} m={2}>
            <Typography component="p" variant='h6' fontWeight={700} color ="primary">Add a comment</Typography>
        </Grid>
        <Grid item xs={12} m={2}>
            <TextField 
                onChange={(e)=>setName(e.target.value)} 
                value={name} 
                label= "Username" 
                variant='outlined' 
                sx={{width: "100%"}}/>
        </Grid>
            
        <Grid item xs={12} m={2}>
        <TextField 
                onChange={(e)=>setEmail(e.target.value)} 
                value={email} 
                label= "Email" 
                variant='outlined' 
                sx={{width: "100%"}}/>
        </Grid>

        <Grid item xs={12} m={2}>
        <TextField 
                multiline
                minRows={4}
                onChange={(e)=>setText(e.target.value)} 
                value={text} 
                label= "Your Comment" 
                variant='outlined' 
                sx={{width: "100%"}}/>
        </Grid>
        <Grid item xs={12} m={2} >
            {loading ? <Button variant='contained' disabled>Sending...</Button> : 
            <Button onClick={sendHandeler} variant='contained'>Send</Button>}
        </Grid>
        <ToastContainer />
    </Grid>
  )
}

export default CommentForm