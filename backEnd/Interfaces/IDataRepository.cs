using backEnd.Model;

namespace backEnd.Repository.Interfaces
{
  public interface IDataRepository
  {
    Task<List<Vehicle>> SearchVehicles();
    Task<Vehicle> SearchVehicle(int id);
    Task<Vehicle> CreateVehicle(Vehicle vehicle);
    Task<Vehicle> UpdateVehicle(Vehicle vehicle);
    Task<bool> DeleteVehicle(Vehicle vehicle);
  }
}