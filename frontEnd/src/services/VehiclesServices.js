import axios from "axios";


const VehiclesServices = {
  fetchAllVehicles: async () => {
    const vehicles = await axios.get('https://localhost:7267/Vehicle');
    return vehicles;
  }
}

export default VehiclesServices;
