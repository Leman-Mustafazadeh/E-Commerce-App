import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useOutletContext } from 'react-router';
import { deleteOne } from '../../../API';
import endpoints from '../../../API/base';
import Swal from 'sweetalert2';
import { Modal } from '@mui/material';
import { message } from 'antd';
const Messages = () => {
  const [users, setUsers, adminId, setAdminId, localStorageId, setlocalStorageId, adProducts, setadProduct, messag, setMessag] = useOutletContext()
  
  const [getUsers, setGetUsers] = React.useState({})
  const handleDel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      deleteOne(endpoints.messages, id)
      const del = messag.filter((x) => x.id !== id)
      setMessag(del)
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
console.log(getUsers);
  const handleClose = () => setOpen(false);
  const handleRead = (id) => {
    
    messag.map((user) => {
      if (user.id === id) {
        console.log(user);
        setGetUsers(user)
      }
    });
    setOpen(true)
  };



  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
      {messag.map((item) => (
        <Box sx={{ minWidth: 275 }} key={item.id} style={{ width: "30%" }}>
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  FullName: {item.fullName}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained' onClick={() => handleDel(item.id)}>Delete</Button>
                <Button onClick={() => handleRead(item.id)} size="small" variant='contained'>Read</Button>
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClick={() => handleRead()} sx={style} style={{ gap: "5px" }}>


          <div>FULNAME: {getUsers.fullName}</div>
          <div>TITLE: {getUsers.title}</div>
          <div>MESSAGE: {getUsers.message}</div>
          <div>EMAIL: {getUsers.email}</div>

        </Box>
      </Modal>
    </div>
  )
}

export default Messages
