using backEnd.Model;

namespace backEnd.Interfaces
{
  public interface IDataServices
  {
    Task<List<Vehicle>> SearchVehicles();
    Task<Vehicle> SearchVehicle(int id);
    Task<List<Vehicle>> FilterVehicles(string filter);
    Task<Vehicle> CreateVehicle(Vehicle vehicle);
    Task<Vehicle> UpdateVehicle(Vehicle vehicle, int id);
    Task<bool> DeleteVehicle(int id);
  }
}
