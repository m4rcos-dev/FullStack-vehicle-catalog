import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Alert, AlertTitle, Autocomplete, Backdrop, Box, Button, Link, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VehiclesServices from '../services/VehiclesServices';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={0}>
      {children}
    </Slide>
  );
}

function Header() {
  const [allVehicles, setAllVehicles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setvalue] = useState({ email: "", password: "" })
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsvalid] = useState();

  const handleValue = ({ target }) => {
    setvalue({ ...value, [target.name]: target.value })
    const validEmail = /^[a-zA-Z]+@[a-zA-Z]+$/;
    const isValid = validEmail.test(value.email);
    setEmailIsValid(!isValid)

    const validPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})/;
    const isValidP = validPassword.test(value.password);
    setPasswordIsvalid(!isValidP);
  }

  const login = async (e) => {
    e.preventDefault();
    const loginResult = await VehiclesServices.fetchLogin(value.email, value.password);
    console.log(loginResult);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

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

  return (
    <div>
      <HideOnScroll>

        <AppBar sx={{
          height: '84px',
          backgroundColor: common.white,
          display: 'flex',
          alignItems: 'center',
        }}>

          <Toolbar sx={{
            width: '68%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Box sx={{
              width: '112px',
              height: '84px',
              display: 'flex',
            }}>
              <svg viewBox="0 0 7774 2048"><path d="M7296.82.052L6752.798 1024l544.022 1023.948h477.424L7239.034 1024 7774.244.052zm-1130.746 0v1705.534L5275.298.052 4205.476 2047.954h470.514l599.916-1147.71 254.406 487.47h-254.406l-178.412 341.108h611.236l166.464 319.132h726.816V.052h-435.96zm-1767.734 0l-599.916 1147.71L3199.138.052h-470.514l1069.822 2047.902L4868.268.052H4398.39zm-2076.172 0l-892.04 1707.424L1072.7 1024 1607.91.052h-477.424L586.464 1024l544.022 1023.948h593.006l166.464-319.132h611.236l-178.412-341.108h-254.406l254.406-487.47 598.678 1147.71h470.514L2322.15.046zM-.244 2047.952h435.33V.05H-.244z"></path></svg>
            </Box>
            <Link href="#" underline="none" onClick={handleToggle}
              sx={{ display: 'flex', alignItems: 'center', color: common.black }}>
              <AccountCircleOutlinedIcon fontSize='large' sx={{ color: common.black, margin: '0.5rem 0.5rem' }} />
              <Typography>Login</Typography>
            </Link>
          </Toolbar>

        </AppBar>

      </HideOnScroll>
      <Toolbar />
      <AppBar sx={{ height: '65px', zIndex: "0", display: 'flex', alignItems: 'center' }}>
        <Stack spacing={2} sx={{ width: "66%", backgroundColor: "common.white", borderRadius: 2, marginTop: 0.5 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={allVehicles.map((option) => option.nome)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Busque por marca, modelo, nome..."
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Stack>
      </AppBar>
      <Toolbar sx={{ height: '48px', backgroundColor: "#1976d2", zIndex: "1", marginTop: '1.4rem', display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={2} sx={{ width: "66%", backgroundColor: "common.white", borderRadius: 2 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={allVehicles.map((option) => option.nome)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Busque por marca, modelo, nome..."
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Stack>
      </Toolbar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0 }}
        open={open}
      >
        <Box sx={{ width: "100%", height: "100vh" }} onClick={handleClose} />
        <Box sx={{ height: "415px", display: "flex", position: "fixed", boxShadow: 15, borderRadius: "10px 10px 10px 10px" }}>
          <Box>
            <img style={{ width: "300px", height: "415px", borderRadius: "10px 0px 0px 10px" }} src='https://cdn.buttercms.com/PNF2L0j5R8G5eoOGHzwA' alt='img-login' />
          </Box>
          <Box
            component="form"
            onSubmit={e => login(e)}
            sx={{
              width: 350,
              height: 415,
              backgroundColor: "common.white",
              borderRadius: "0px 10px 10px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <Typography sx={{ m: "1rem", textAlign: "left" }} color={common.black} variant="h5">Olá!</Typography>
            <Typography sx={{ m: "1rem", textAlign: "left" }} color={common.black} variant="h7">Insira seu e-mail e senha abaixo para iniciar sua sessão!</Typography>
            <TextField
              error={emailIsValid}
              required={true}
              type="email"
              id="outlined-basic"
              label="Email"
              variant="standard"
              name="email"
              onChange={e => handleValue(e)}
              value={value.email}
              sx={{ m: "1rem" }}
            />
            <TextField
              error={passwordIsValid}
              required={true}
              type="password"
              id="outlined-basic"
              label="Senha"
              variant="standard"
              name="password"
              onChange={e => handleValue(e)}
              value={value.password}
              sx={{ m: "1rem" }}
            />
            <Box sx={{ textAlign: "right", m: "2rem 1rem 0rem 0rem" }}>
              <Button type="button" onClick={handleClose}>Cancelar</Button>
              <Button type="submit">Login</Button>
            </Box>
          </Box>
        </Box>
      </Backdrop>
    </div >
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
