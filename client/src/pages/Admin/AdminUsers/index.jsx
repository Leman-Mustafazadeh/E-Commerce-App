import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useOutletContext } from 'react-router';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useFormik } from 'formik'
import { deleteOne, patch } from '../../../API';
import User from '../../../classes/userClass';
import endpoints from '../../../API/base';
import Swal from 'sweetalert2';
const AdminUsers = () => {


  const [getId, setId] = useState(null);



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [users, setUsers, adminId, setAdminId, localStorageId, setlocalStorageId, adProducts, setadProduct] = useOutletContext();



  const [open, setOpen] = React.useState(false);


  const handleOpen = (id) => {
    setId(id)
    setOpen(!open);
  }


  const editStatusUser = (buttunValue) => {
   
    users.map(user => {
      if (user.id == getId) {
        user.role = buttunValue;
        patch(endpoints.users, getId, user)
      }
    })

    setOpen(!open);
  }


  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const handleDel = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(endpoints.users,id)
        const del = users.filter((x)=>x.id!=id)
        setUsers(del)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-between", margin: "30px" }}>
      {users.map((item) => (
          <Box  key={item.id}sx={{ width: 275 }}>
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.email}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.username}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.password}
                  </Typography>
                  <Typography variant="body2">
                    {item.createdAt}
                  </Typography>
                </CardContent>
               {
                item.role == "super-admin" ?  <Button>Super Admin Siline bilmez</Button>  :  <CardActions>
                <Button onClick={() => handleOpen(item.id)} size="small">Edit</Button>
                <Button size="small" onClick={()=>handleDel(item.id)}>Delete</Button>
              </CardActions>
               }
              </React.Fragment>
            </Card>
          </Box>




     

      ))}

      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button value="admin" onClick={(e) => editStatusUser(e.target.value)}  >Admin</Button>
          <Button value="client" onClick={(e) => editStatusUser(e.target.value)}  >Client</Button>
        </Box>
      </Modal>

    </div>

  )
}

export default AdminUsers
