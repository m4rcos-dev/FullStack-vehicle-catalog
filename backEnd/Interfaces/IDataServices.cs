using backEnd.Model;

namespace backEnd.Interfaces
{
  public interface IDataServices
  {
    Task<List<Vehicle>> SearchVehicles();
    Task<Vehicle> SearchVehicle(int id);
    Task<Vehicle> CreateVehicle(Vehicle vehicle);
    Task<List<Vehicle>> FilterVehicle(string filter);
    Task<Vehicle> UpdateVehicle(Vehicle vehicle, int id);
    Task<bool> DeleteVehicle(int id);
  }
}
