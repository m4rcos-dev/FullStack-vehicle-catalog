using backEnd.Data;
using backEnd.Model;
using backEnd.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Repository
{
  public class DataRepository : IDataRepository
  {
    private readonly DataContext _context;

    public DataRepository(DataContext context)
    {
      _context = context;
    }

    public async Task<List<Vehicle>> SearchVehicles()
    {
      return await _context.Vehicles.ToListAsync();
    }

    public async Task<Vehicle> SearchVehicle(int id)
    {
      return await _context.Vehicles.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Vehicle> CreateVehicle(Vehicle vehicle)
    {
      await _context.Vehicles.AddAsync(vehicle);
      await _context.SaveChangesAsync();

      return vehicle;
    }

    public async Task<Vehicle> UpdateVehicle(Vehicle vehicle)
    {
      _context.Vehicles.Update(vehicle);
      await _context.SaveChangesAsync();

      return vehicle;
    }

    public async Task<bool> DeleteVehicle(Vehicle vehicle)
    {
      _context.Vehicles.Remove(vehicle);
      await _context.SaveChangesAsync();

      return true;
    }
  }
}
