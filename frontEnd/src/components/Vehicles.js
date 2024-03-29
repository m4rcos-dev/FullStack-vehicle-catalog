import { Alert, Backdrop, Box, Button, InputAdornment, Snackbar, styled, TablePagination, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import VehiclesServices from '../services/VehiclesServices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyContext } from '../context/MyContext';
import { common } from '@mui/material/colors';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AddIcon from '@mui/icons-material/Add';
import Loading from './Loading';

function Vehicles() {
  const [allVehicles, setAllVehicles] = useState([]);
  const [query, setQuery] = useState("");
  const [allPages, setAllPages] = useState(25)
  const [pageNumber, setPageNumber] = useState(0);
  const [pageQuantity, setPageQuantity] = useState(25);
  const { valueContext, handleCurrentFilter } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [load, setLoad] = useState(true);
  const [resutlVehicle, setResultVehicle] = useState({
    nome: "",
    marca: "",
    modelo: "",
    valor: 0,
    foto: "",
  });
  const [resutlVehicleCreate, setResultVehicleCreate] = useState({
    nome: "",
    marca: "",
    modelo: "",
    valor: 0,
    foto: "",
  });
  const [currentIdEdit, setCurrentIdEdit] = useState();
  const [openAlert, setOpenAlert] = useState({
    type: 'success',
    message: '',
    isOpen: false,
  });
  const { releaseIcons } = useContext(MyContext);
  const [isDisableCreate, setisDisableCreate] = useState({
    nome: false,
    marca: true,
    modelo: true,
    valor: true,
    foto: true,
  });

  useEffect(() => {
    const fetchAllVehicle = async () => {
      setLoad(true);
      const vheicles = await VehiclesServices.fetchAllVehicles(valueContext.currentFilter, pageNumber, pageQuantity);
      setAllVehicles(vheicles.vehicles);
      setAllPages(vheicles.length)
      setLoad(false);
    };
    fetchAllVehicle();
  }, [valueContext.currentFilter, pageNumber, pageQuantity]);

  useEffect(() => {
    const handleQuery = () => {
      handleCurrentFilter("")
      setQuery("start")
    }
    handleQuery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query === ""])

  const runEditVehicle = async (currentVheicle) => {
    const resultVehicle = await VehiclesServices.fetchAllOneVehicle(currentVheicle);
    setResultVehicle(resultVehicle);
    setCurrentIdEdit(currentVheicle);
    handleToggle();
  }

  const runDeleteVehicle = async (currentVheicle) => {
    console.log(currentVheicle);
    setCurrentIdEdit(currentVheicle);
    handleToggle2();
  };

  const runCreateVehicle = async (currentVheicle) => {
    setCurrentIdEdit(currentVheicle);
    handleToggle3();
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };


  const handleToggle = () => {
    setOpen(!open);
  };

  const handleToggle2 = () => {
    setOpen2(!open);
  };

  const handleToggle3 = () => {
    setOpen3(!open3);
  };

  const handleValue = ({ target }) => {
    setResultVehicle({ ...resutlVehicle, [target.name]: target.value })
    console.log(resutlVehicle);
  }

  const handleValueCreate = ({ target }) => {
    setResultVehicleCreate({ ...resutlVehicleCreate, [target.name]: target.value });
    setisDisableCreate({ ...isDisableCreate, [target.id]: false })
    console.log(resutlVehicleCreate);
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
    console.log(result);
    if (result !== "Vehicle update sucess!") {
      handleClickAlert("error", "Erro ao se conectar com o servidor", true);
      return;
    }
    handleClickAlert("success", "Veículo editado com sucesso", true);
    handleClose();
    window.location.reload();
    return result;
  };

  const fetchDeleteVehicle = async (e) => {
    e.preventDefault();
    const token = VehiclesServices.getToken();
    const result = await VehiclesServices.fetchDeletetVehicle(currentIdEdit, token);
    if (result !== "Vehicle deleting sucess!") {
      handleClickAlert("error", "Erro ao se conectar com o servidor", true);
      return;
    }
    handleClickAlert("success", "Veículo deletado com sucesso", true);
    handleClose2();
    window.location.reload();
    return result;
  };

  const fetchCreateVehicle = async (e) => {
    e.preventDefault();
    const { nome, marca, modelo, valor, foto } = resutlVehicleCreate;
    const obj = {
      nome: nome,
      marca: marca,
      modelo: modelo,
      valor: valor,
      foto: foto,
    }
    const token = VehiclesServices.getToken();
    const result = await VehiclesServices.fetchCreateVehicle(obj, token);
    console.log(result);
    if (result !== "Vehicle addd sucess!") {
      handleClickAlert("error", "Erro ao se conectar com o servidor", true);
      return;
    }
    handleClickAlert("success", "Veículo adicionado com sucesso", true);
    handleClose3();
    window.location.reload();
    return result;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validTokenLocal = () => {
    const currentToken = VehiclesServices.getToken();
    if (currentToken === null) {
      releaseIcons(false);
      return;
    }
    releaseIcons(true);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { validTokenLocal() }, [])

  const handleClickAlert = (type, message, isOpen) => {
    setOpenAlert({ type: type, message: message, isOpen: isOpen });
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const sortByValor = () => {
    const sorted = allVehicles.sort((a, b) => a.valor - b.valor);
    return sorted;
  }

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
  }));

  const BoxCustom = styled(Box)(({ theme }) => ({
    '&:hover': {
      width: 300,
      height: 280,
      boxShadow: 11,
      cursor: 'pointer',
    }
  }))

  const handleChangePage = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageQuantity(parseInt(event.target.value, 10));
    setPageNumber(0);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {load ? <Loading /> : (<Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        {valueContext.validIconCreate && <BoxCustom
          onClick={runCreateVehicle}
          sx={{
            position: "fixed",
            left: 0, top: 150,
            width: 305,
            height: 287, p: "0 8 0 8",
            boxShadow: 8, m: "0.4rem", mt: '1.3rem',
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <AddIcon sx={{ color: "text.secondary", width: '30%', height: '100vh' }} />
        </BoxCustom>}
        <Box sx={{ width: "67%", display: "flex", flexWrap: "wrap", justifyContent: "center", mt: '1rem' }}>
          {sortByValor().map((vehicle) => (
            <Box key={`${vehicle.id}${vehicle.nome}`} sx={{
              width: 305,
              height: 287, p: "0 8 0 8",
              boxShadow: 8, m: "0.4rem",
              borderRadius: "0.375rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}>
              <img src={vehicle.foto} alt={vehicle.nome} style={{ width: "305px", height: "175.078px" }} />
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
                  {valueContext.validIconsEdit && <EditIconCustom onClick={() => runEditVehicle(vehicle.id)} color="primary" fontSize='medium' sx={{ m: "0rem 0rem 0.5rem 0rem", }} />}
                  {valueContext.validIconsDelete && <DeleteIconCustom onClick={() => runDeleteVehicle(vehicle.id)} color="error" fontSize='medium' sx={{ m: "0rem 0.3rem 0.5rem 0.3rem" }} />}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <TablePagination
          component="div"
          count={allPages}
          page={pageNumber}
          onPageChange={handleChangePage}
          rowsPerPage={pageQuantity}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>)}
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
              id="input-edit-nome"
              label="Nome"
              name="nome"
              onChange={e => handleValue(e)}
              value={resutlVehicle.nome}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='filled'
              autoFocus
              required={true}
              type="text"
              id="input-edit-marca"
              label="Marca"
              name="marca"
              onChange={e => handleValue(e)}
              value={resutlVehicle.marca}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='filled'
              required={true}
              type="text"
              id="input-edit-modelo"
              label="Modelo"
              name="modelo"
              onChange={e => handleValue(e)}
              value={resutlVehicle.modelo}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='filled'
              required={true}
              type="number"
              id="input-edit-valor"
              label="Valor"
              name="valor"
              onChange={e => handleValue(e)}
              value={resutlVehicle.valor}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='filled'
              required={true}
              type="text"
              id="input-edit-foto"
              label="URL da foto do veículo"
              name="foto"
              onChange={e => handleValue(e)}
              value={resutlVehicle.foto}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0 }}
        open={open3}
      >
        <Box sx={{ width: "100%", height: "100vh" }} onClick={handleClose3} />
        <Box sx={{ height: "415px", display: "flex", position: "fixed", boxShadow: 15, borderRadius: "10px 10px 10px 10px" }}>
          <Box
            component="form"
            onSubmit={e => fetchCreateVehicle(e)}
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
            <Typography sx={{ m: "0.5rem", textAlign: "center" }} color={common.black} variant="h7">Preencha os dados do veículo abaixo!</Typography>
            <TextField
              variant='filled'
              required={true}
              type="text"
              id="marca"
              label="Nome"
              name="nome"
              onChange={e => handleValueCreate(e)}
              value={resutlVehicleCreate.nome}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              disabled={isDisableCreate.marca}
              variant='filled'
              autoFocus
              required={true}
              type="text"
              id="modelo"
              label="Marca"
              name="marca"
              onChange={e => handleValueCreate(e)}
              value={resutlVehicleCreate.marca}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              disabled={isDisableCreate.modelo}
              variant='filled'
              required={true}
              type="text"
              id="foto"
              label="Modelo"
              name="modelo"
              onChange={e => handleValueCreate(e)}
              value={resutlVehicleCreate.modelo}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              disabled={isDisableCreate.foto}
              variant='filled'
              required={true}
              type="text"
              id="valor"
              label="URL da foto do veículo"
              name="foto"
              // onChange={e => handleValueCreate(e)}
              // onPaste={e => handleValueCreate(e)}
              onInput={e => handleValueCreate(e)}
              value={resutlVehicleCreate.foto}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              disabled={isDisableCreate.valor}
              variant='filled'
              required={true}
              type="number"
              id="input-valor"
              label="Valor"
              name="valor"
              onChange={e => handleValueCreate(e)}
              value={resutlVehicleCreate.valor}
              sx={{ m: "0.5rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ textAlign: "right", m: "2rem 1rem 0rem 0rem" }}>
              <Button
                type="button"
                onClick={handleClose3}
              >Cancelar</Button>
              <Button type="submit">OK</Button>
            </Box>
          </Box>
        </Box>
      </Backdrop>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0 }}
        open={open2}
      >
        <Box sx={{ width: "100%", height: "100vh" }} onClick={handleClose2} />
        <Box sx={{ height: "315px", display: "flex", position: "fixed", boxShadow: 15, borderRadius: "10px 10px 10px 10px" }}>
          <Box
            component="form"
            onSubmit={e => fetchDeleteVehicle(e)}
            sx={{
              width: 450,
              height: 315,
              backgroundColor: "common.white",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Box>
              <ReportProblemIcon sx={{ textAlign: 'center', fontSize: 100 }} color='warning' />
            </Box>
            <Typography sx={{ m: "0.5rem", textAlign: "center" }} color={common.black} variant="h5">Olá!</Typography>
            <Typography sx={{ m: "0.5rem", textAlign: "center" }} color={common.black} variant="h7">Tem certeza que deseja deletar esse veículo?</Typography>
            <Box sx={{ textAlign: "right", m: "2rem 1rem 0rem 0rem" }}>
              <Button
                type="button"
                onClick={handleClose2}
              >Cancelar</Button>
              <Button type="submit">SIM</Button>
            </Box>
          </Box>
        </Box>
      </Backdrop>
      <Snackbar open={openAlert.isOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={openAlert.type} sx={{ width: '100%' }}>
          {openAlert.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Vehicles
