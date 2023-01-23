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

    public async Task<Vehicle> SearchVehicle(int id)
    {
      return await _context.Vehicles.Where(x => x.Id == id).FirstOrDefaultAsync();
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
