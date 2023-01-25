import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VehiclesServices from '../services/VehiclesServices';

function Main() {
  const [allVehicles, setAllVehicles] = useState();

  const fetchAllVehicle = async () => {
    const vheicles = VehiclesServices.fetchAllVehicles();
    setAllVehicles(vheicles);
  }

  useEffect(() => { fetchAllVehicle() }, [])
  console.log(allVehicles);
  return (
    <div>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(30)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </div>
  )
}

export default Main;

