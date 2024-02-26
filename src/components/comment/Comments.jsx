import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({slug}) {
    const {loading, data, errors} = useQuery(GET_POST_COMMENT , {
        variables:{ slug }
      })
  
    if (loading) return null
  return (
    <>
    <Grid container sx={{boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px", borderRadius: 4 , py:1, mt: 8, mb:8}}>
    <Grid item xs={12} m={2} >
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
            Comments:
        </Typography>
    </Grid>
    {data.comments.map(c =>
    <Grid key={c.id} item xs={12} m={2} p={2} border="1px silver solid" borderRadius={1}>
        <Box component="div" display="flex" alignItems="center" mb={3}>
            <Avatar>{c.name[0]}</Avatar>
        <Typography component="span" variant="p" fontWeight={700} ml={1}>{c.name}</Typography>
        </Box>
        <Typography component="p" variant="p" fontSize={18} lineHeight={1.6}>{c.text}</Typography>
    </Grid>
    )}
    </Grid>
    </>
  )
}

export default Comments