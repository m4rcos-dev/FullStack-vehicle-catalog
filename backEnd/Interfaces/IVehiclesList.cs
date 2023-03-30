using backEnd.Model;

namespace backEnd.Interfaces
{
  public interface IVehiclesList
  {
    int Length { get; set; }
    List<Vehicle> Vehicles { get; set; }
  }
}
