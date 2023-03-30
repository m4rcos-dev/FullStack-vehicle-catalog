import React from 'react'
import { Box, Typography } from "@mui/material"
import { Container } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KarShopWhiteLogo from '../assets/KarShopWhiteLogo';

function Footer() {
  return (
    <Box sx={{ height: 419, backgroundColor: "common.black", p: "1rem" }}>
      <Container sx={{ color: "common.white", }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}>
          <Box sx={{ height: 184, width: 220, textAlign: "left", mt: "1rem" }}>
            <KarShopWhiteLogo />
          </Box>
          <Box sx={{ dislplay: "flex", flexDirection: "column" }}>
            <Typography align='left' sx={{ mb: "1rem" }}>Comprar carro</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>Vender carro</Typography>
            <Typography align='left' sx={{ mb: "1rem" }}>App Karshop</Typography>
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
        <hr style={{ margin: "2rem 0rem" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant='caption' align='left'>Copyright © 2023 KARSHOP. Todos os direitos reservados. ·Política de Privacidade ·Termos e Condições ·Definições de cookies</Typography>
          <Typography variant='caption' align='left'>KARSHOP TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob o nº 00.000.000/0000-00, com sede na Estrada dos XXXXX, nº 000, Galpão XXXX, Módulo 0, XXXXXXXX, Barueri/SP, CEP 00.000-000</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
