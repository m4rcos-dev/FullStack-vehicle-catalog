
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import VehiclesServices from '../services/VehiclesServices';

function Vehicles() {
  const [allVehicles, setAllVehicles] = useState([]);

  const fetchAllVehicle = async () => {
    const vheicles = await VehiclesServices.fetchAllVehicles();
    setAllVehicles(vheicles);
  }

  useEffect(() => { fetchAllVehicle() }, [])
  console.log(allVehicles);

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
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              m: "1rem"
            }}>
              <Typography sx={{ fontWeight: "bold" }}>{`${vehicle.marca} ${vehicle.nome} ${vehicle.modelo}`}</Typography>
              <Typography variant='h6' color="primary">{vehicle.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Vehicles
