import { Box, styled, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import VehiclesServices from '../services/VehiclesServices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyContext } from '../context/MyContext';

function Vehicles() {
  const [allVehicles, setAllVehicles] = useState([]);
  const {value} = useContext(MyContext)

  const fetchAllVehicle = async () => {
    const vheicles = await VehiclesServices.fetchAllVehicles();
    setAllVehicles(vheicles);
  }


  useEffect(() => { fetchAllVehicle() }, [])

  // const DialogCustom = styled(Dialog)(({ theme }) => ({
  //   '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
  //     maxWidth: "800px",
  //   }
  // }));

  const EditIconCustom = styled(EditIcon)(({ theme }) => ({
    '&:hover': {
      fontSize: 'large',
      cursor: 'pointer'
    }
  }))

  const DeleteIconCustom = styled(DeleteIcon)(({ theme }) => ({
    '&:hover': {
      fontSize: 'large',
      cursor: 'pointer'
    }
  }))

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "67%", display: "flex", flexWrap: "wrap", justifyContent: "center", mt: '1rem' }}>
        {allVehicles.map((vehicle) => (
          <Box sx={{
            width: 305,
            height: 287, p: "0 8 0 8",
            boxShadow: 8, m: "0.4rem",
            borderRadius: "0.375rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}>
            <img src={vehicle.foto} alt={vehicle.nome} style={{ width: "305px" }} />
            <Box sx={{
              width: "90%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              m: "1rem"
            }}>
              <Typography sx={{ fontWeight: "bold" }}>{`${vehicle.marca} ${vehicle.nome} ${vehicle.modelo}`}</Typography>
              <Typography variant='h6' color="primary">{vehicle.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Typography>
              <Box sx={{ width: "100%", textAlign: "right" }}>
                {value.validIconsEdit && <EditIconCustom color="primary" fontSize='medium' sx={{ m: "0rem 0rem 0.5rem 0rem", }} />}
                {value.validIconsDelete && <DeleteIconCustom color="error" fontSize='medium' sx={{ m: "0rem 0.3rem 0.5rem 0.3rem" }} />}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Vehicles
