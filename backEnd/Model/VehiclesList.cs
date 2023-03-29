using backEnd.Interfaces;

namespace backEnd.Model
{
  internal class VehiclesList : IVehiclesList
  {
    public int Length { get; set; }
    public List<Vehicle> Vehicles { get; set; }
  }
}
