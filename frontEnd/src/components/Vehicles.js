import { Alert, Backdrop, Box, Button, Snackbar, styled, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import VehiclesServices from '../services/VehiclesServices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyContext } from '../context/MyContext';
import { common } from '@mui/material/colors';

function Vehicles() {
  const [allVehicles, setAllVehicles] = useState([]);
  const { value } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const [resutlVehicle, setResultVehicle] = useState({});
  const [currentIdEdit, setCurrentIdEdit] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  const fetchAllVehicle = async () => {
    const vheicles = await VehiclesServices.fetchAllVehicles();
    setAllVehicles(vheicles);
  };

  useEffect(() => { fetchAllVehicle() }, []);

  const runEditVehicle = async (currentVheicle) => {
    console.log(currentVheicle);
    const resultVehicle = await VehiclesServices.fetchAllOneVehicle(currentVheicle);
    console.log(resultVehicle);
    setResultVehicle(resultVehicle);
    setCurrentIdEdit(currentVheicle);
    handleToggle();
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleValue = ({ target }) => {
    setResultVehicle({ ...resutlVehicle, [target.name]: target.value })
    console.log(resutlVehicle);
  }

  const fetchEditVehicle = async (e) => {
    e.preventDefault();
    const { nome, marca, modelo, valor, foto } = resutlVehicle;
    const obj = {
      nome: nome,
      marca: marca,
      modelo: modelo,
      valor: valor,
      foto: foto,
    }
    const token = VehiclesServices.getToken();
    const result = await VehiclesServices.fetchEditVehicle(currentIdEdit, obj, token);
    handleClose();
    handleClickAlert();
    window.location.reload();
    return result;
  };

  const handleClickAlert = () => {
    setOpenAlert(true);
  };
 const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

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
                {value.validIconsEdit && <EditIconCustom onClick={() => runEditVehicle(vehicle.id)} color="primary" fontSize='medium' sx={{ m: "0rem 0rem 0.5rem 0rem", }} />}
                {value.validIconsDelete && <DeleteIconCustom color="error" fontSize='medium' sx={{ m: "0rem 0.3rem 0.5rem 0.3rem" }} />}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0 }}
        open={open}
      >
        <Box sx={{ width: "100%", height: "100vh" }} onClick={handleClose} />
        <Box sx={{ height: "415px", display: "flex", position: "fixed", boxShadow: 15, borderRadius: "10px 10px 10px 10px" }}>
          <Box
            component="form"
            onSubmit={e => fetchEditVehicle(e)}
            sx={{
              width: 750,
              height: 515,
              backgroundColor: "common.white",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <Typography sx={{ m: "0.5rem", textAlign: "center" }} color={common.black} variant="h5">Olá!</Typography>
            <Typography sx={{ m: "0.5rem", textAlign: "center" }} color={common.black} variant="h7">Abaixo estão os dados do veículo selecioado para editar!</Typography>
            <TextField
              variant='filled'
              required={true}
              type="text"
              id="outlined-basic"
              label="Nome"
              name="nome"
              onChange={e => handleValue(e)}
              value={resutlVehicle.nome}
              sx={{ m: "0.5rem" }}
            />
            <TextField
              variant='filled'
              autoFocus
              required={true}
              type="text"
              id="outlined-basic"
              label="Marca"
              name="marca"
              onChange={e => handleValue(e)}
              value={resutlVehicle.marca}
              sx={{ m: "0.5rem" }}
            />
            <TextField
              variant='filled'
              required={true}
              type="text"
              id="outlined-basic"
              label="Modelo"
              name="modelo"
              onChange={e => handleValue(e)}
              value={resutlVehicle.modelo}
              sx={{ m: "0.5rem" }}
            />
            <TextField
              variant='filled'
              required={true}
              type="number"
              id="outlined-basic"
              label="Valor"
              name="valor"
              onChange={e => handleValue(e)}
              value={resutlVehicle.valor}
              sx={{ m: "0.5rem" }}
            />
            <TextField
              variant='filled'
              required={true}
              type="text"
              id="outlined-basic"
              label="URL da foto do veículo"
              name="img"
              onChange={e => handleValue(e)}
              value={resutlVehicle.foto}
              sx={{ m: "0.5rem" }}
            />
            <Box sx={{ textAlign: "right", m: "2rem 1rem 0rem 0rem" }}>
              <Button
                type="button"
                onClick={handleClose}
              >Cancelar</Button>
              <Button type="submit">OK</Button>
            </Box>
          </Box>
        </Box>
      </Backdrop>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Cadastro alterado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Vehicles
