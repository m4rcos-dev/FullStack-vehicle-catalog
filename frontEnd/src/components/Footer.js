import React from 'react'
import { Box, Divider, Typography } from "@mui/material"
import { Container } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box sx={{ height: 476, backgroundColor: "common.black", p: "1rem" }}>
      <Container sx={{ color: "common.white", }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}>
          <Box sx={{ height: 184, width: 220, textAlign: "left", mt: "1rem" }}>
            <svg width="100" viewBox="0 0 7774 2048"><path d="M7296.82.052L6752.798 1024l544.022 1023.948h477.424L7239.034 1024 7774.244.052zm-1130.746 0v1705.534L5275.298.052 4205.476 2047.954h470.514l599.916-1147.71 254.406 487.47h-254.406l-178.412 341.108h611.236l166.464 319.132h726.816V.052h-435.96zm-1767.734 0l-599.916 1147.71L3199.138.052h-470.514l1069.822 2047.902L4868.268.052H4398.39zm-2076.172 0l-892.04 1707.424L1072.7 1024 1607.91.052h-477.424L586.464 1024l544.022 1023.948h593.006l166.464-319.132h611.236l-178.412-341.108h-254.406l254.406-487.47 598.678 1147.71h470.514L2322.15.046zM-.244 2047.952h435.33V.05H-.244z" fill="white"></path></svg>
          </Box>
          <Box sx={{ dislplay: "flex", flexDirection: "column" }}>
            <Typography align='left' sx={{ mb: "1rem" }}>Comprar carro</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Vender carro</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>App Kavak</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Onde estamos</Typography>
          </Box>
          <Box sx={{ dislplay: "flex", flexDirection: "column" }}>
            <Typography align='left' sx={{ mb: "1rem" }}>Perguntas frequentes</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Blog</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Guia de preços</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Carreiras</Typography>
          </Box>
          <Box sx={{ dislplay: "flex", flexDirection: "column" }}>
            <Typography align='left' sx={{ mb: "1rem" }}>Contato</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Imprensa</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>🇧🇷 Brasil</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <FacebookIcon fontSize='large' sx={{ mr: "0.5rem" }} />
          <InstagramIcon fontSize='large' sx={{ mr: "0.5rem" }} />
          <LinkedInIcon fontSize='large' sx={{ mr: "0.5rem" }} />
        </Box>
        <hr style={{ margin: "3rem 0rem" }} />
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <Typography variant='caption' align='left'>Copyright © 2022 KAVAK. Todos os direitos reservados. ·Política de Privacidade ·Termos e Condições ·Definições de cookies</Typography>
          <Typography variant='caption' align='left'>KAVAK TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob o nº 36.740.390/0001-83, com sede na Estrada dos Alpes, nº 855, Galpão A, Módulo 1, Jardim Belval, Barueri/SP, CEP 06.423-080</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
