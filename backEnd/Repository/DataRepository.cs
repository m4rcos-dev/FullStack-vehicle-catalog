using backEnd.Data;
using backEnd.Model;
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
    public async Task<IEnumerable<User>> SearchUsers()
    {
      return await _context.Users.ToListAsync();
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
      _context.Update(vehicle);
    }

    public void DeleteVehicle(Vehicle vehicle)
    {
      _context.Remove(vehicle);
    }

    public async Task<bool> SaveChangeAsync()
    {
      return await _context.SaveChangesAsync() > 0;
    }
  }
}
