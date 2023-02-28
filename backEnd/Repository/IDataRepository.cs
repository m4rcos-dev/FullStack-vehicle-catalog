using backEnd.Model;

namespace backEnd.Repository
{
  public interface IDataRepository
  {
    Task<List<Vehicle>> SearchVehicles();
    Task<Vehicle> SearchVehicle(int id);
    Task<Vehicle> CreateVehicle(Vehicle vehicle);
    Task<Vehicle> UpdateVehicle(Vehicle vehicle, int id);
    Task<bool> DeleteVehicle(int id);
  }
}
