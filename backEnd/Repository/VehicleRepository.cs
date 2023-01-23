using backEnd.Data;
using backEnd.Model;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Repository
{
  public class VehicleRepository : IVehicleRepository
  {
    private readonly VehicleContext _context;

    public VehicleRepository(VehicleContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<Vehicle>> SearchVehicles()
    {
      return await _context.Vehicles.ToListAsync();
    }

    public Task<IEnumerable<Vehicle>> SearchVehicle(int id)
    {
      throw new NotImplementedException();
    }

    public void CreateVehicle(Vehicle vehicle)
    {
      _context.Add(vehicle);
    }

    public void UpdateVehicle(Vehicle vehicle)
    {
      throw new NotImplementedException();
    }

    public void DeleteVehicle(Vehicle vehicle)
    {
      throw new NotImplementedException();
    }

    public async Task<bool> SaveChangeAsync()
    {
      return await _context.SaveChangesAsync() > 0;
    }
  }
}
