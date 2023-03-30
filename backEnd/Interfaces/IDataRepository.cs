using backEnd.Model;
using backEnd.Interfaces;

namespace backEnd.Repository.Interfaces
{
  public interface IDataRepository
  {
    Task<IVehiclesList> SearchVehicles(int pn, int pq);
    Task<Vehicle> SearchVehicle(int id);
    Task<IVehiclesList> FilterVehicles(string filter, int pn, int pq);
    Task<Vehicle> CreateVehicle(Vehicle vehicle);
    Task<Vehicle> UpdateVehicle(Vehicle vehicle);
    Task<bool> DeleteVehicle(Vehicle vehicle);
  }
}
