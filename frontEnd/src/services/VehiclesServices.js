import axios from "axios";

const url = 'https://localhost:7267'

const VehiclesServices = {
  fetchAllVehicles: async () => {
    try {
      const vehicles = await axios.get(`${url}/Vehicle`);
      return vehicles.data;
    } catch (error) {
      return "Erro ao se conectar com o servidor"
    }
  },

  fetchLogin: async (email, password) => {
    try {
      const result = await axios.post(`${url}/Auth/logi`,
      {
          email,
          password,
      });
      return result.data;
    } catch (error) {

      console.log(error)
      if (error.response.status === 404) {
        return "Usuário ou senha inválidos"
      }
      return "Erro ao se conectar com o servidor"
    }
  }
}

export default VehiclesServices;
