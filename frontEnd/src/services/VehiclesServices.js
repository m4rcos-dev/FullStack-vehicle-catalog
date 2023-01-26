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
      const result = await axios.post(`${url}/Auth/login`,
      {
          email,
          password,
      });
      return result.data;
    } catch (error) {
      if (error.response.status === 400) {
        return "Usuário ou senha inválidos"
      }
      return "Erro ao se conectar com o servidor"
    }
  },

  saveToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  getToken: () => {
    const currentToken = localStorage.getItem('authToken');
    return currentToken;
  },
  removeToken: () => {
    localStorage.removeItem('authToken');
  }
}

export default VehiclesServices;
