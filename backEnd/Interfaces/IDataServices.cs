using backEnd.Model;

namespace backEnd.Interfaces
{
  public interface IDataServices
  {
    Task<IVehiclesList> SearchVehicles(int pn, int pq);
    Task<Vehicle> SearchVehicle(int id);
    Task<IVehiclesList> FilterVehicles(string filter, int pn, int pq);
    Task<Vehicle> CreateVehicle(Vehicle vehicle);
    Task<Vehicle> UpdateVehicle(Vehicle vehicle, int id);
    Task<bool> DeleteVehicle(int id);
  }
}
