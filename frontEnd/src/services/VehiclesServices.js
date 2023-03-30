import axios from "axios";

const url = 'https://localhost:7267'

const VehiclesServices = {
  fetchAllVehicles: async (q, pn, pq) => {
    if(q === undefined || pn === undefined || pq === undefined)
    {
    q = "";
    pn = 0;
    pq = 25;
    }
    try {
      const vehicles = await axios.get(`${url}/Vehicle?q=${q}&pn=${pn}&pq=${pq}`);
      return vehicles.data;
    } catch (error) {
      console.log(error);
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

  fetchAllOneVehicle: async (id) => {
    try {
      const vehicles = await axios.get(`${url}/Vehicle/${id}`)
      return vehicles.data;
    } catch (error) {
      console.log(error);
      return "Erro ao se conectar com o servidor"
    }
  },

  fetchEditVehicle: async (id, objeto, token) => {
    try {
      const result = await axios.put(`${url}/Vehicle/${id}`, objeto, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return "Erro ao se conectar com o servidor"
    }
  },

  fetchDeletetVehicle: async (id, token) => {
    try {
      const result = await axios.delete(`${url}/Vehicle/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return "Erro ao se conectar com o servidor"
    }
  },

  fetchCreateVehicle: async (objeto, token) => {
    try {
      const result = await axios.post(`${url}/Vehicle`, objeto, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return result.data
    } catch (error) {
      console.log(error);
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
