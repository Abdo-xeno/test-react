import logo from './logo.svg';
import React from 'react';
import { Box, Typography } from '@mui/material';

function UserBox({user}) {
  return (
       <Box sx={{border:"1px solid black", width:"400px",height:"150px", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
         <Typography>
          {user.first_name}
         </Typography>
         <Typography>
          {user.last_name}
         </Typography>
         <Typography>
          <img style={{height:"50px",width:"50px"}}
      src={user.avatar}
      alt="avatar"
      />
         </Typography>
       </Box>
  );
}

export default UserBox;
