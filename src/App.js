import React from 'react';
import './App.css';
import axios from 'axios';
import { Box, Pagination, Stack } from '@mui/material';
import UserBox from './UserBox';

function App() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [allUsers,setAllUsers] = React.useState([])
  const [users,setUsers] = React.useState([])
  
  React.useEffect(()=> {
    for (let i=0;i<9;i++) {
      axios.get('https://random-data-api.com/api/v2/users')
      .then(function (response) {
        // handle success
       users.push(response.data)
       setUsers([...users])
       setAllUsers([...allUsers,users])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  },[currentPage])

  const handlePageChange = (event, value) => {
    setAllUsers([...allUsers,users])
    setCurrentPage(value); // Update the currentPage state when the page changes
    setUsers([])
  };

  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"24px", paddingTop:"60px"}}>
      {allUsers[currentPage] && 
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {allUsers[currentPage].slice(0, 3).map(user => <UserBox user={user} />
            )}
          </Box>
         <Box sx={{ display: "flex", flexDirection: "row" }}>
           {allUsers[currentPage].slice(3, 6).map(user => <Box>
              <UserBox user={user} />
          </Box>)}
         </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            { allUsers[currentPage].slice(6, 9).map(user => <Box>
              <UserBox user={user} />
            </Box>)}
          </Box>
        </Box>
      }
      
    <Stack spacing={2}>
        <Pagination count={10}  
          page={currentPage}
          onChange={handlePageChange} 
        />
    </Stack>
  </Box>

  );
}

export default App;
