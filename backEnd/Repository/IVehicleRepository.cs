using backEnd.Model;

namespace backEnd.Repository
{
  public interface IVehicleRepository
  {
    Task<IEnumerable<Vehicle>> SearchVehicles();
    Task<Vehicle> SearchVehicle(int id);
    void CreateVehicle(Vehicle vehicle);
    void UpdateVehicle(Vehicle vehicle);
    void DeleteVehicle(Vehicle vehicle);

    Task<bool> SaveChangeAsync();
  }
}
