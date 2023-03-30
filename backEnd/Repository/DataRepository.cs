using backEnd.Data;
using backEnd.Interfaces;
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

    public async Task<IVehiclesList> SearchVehicles(int pn, int pq)
    {
      if (pn == 0 && pq == 0)
      {
        var allVehicles = await _context.Vehicles.ToListAsync();
        return new VehiclesList { Length = allVehicles.Count, Vehicles = allVehicles };
      }

      var result = await _context.Vehicles.ToListAsync();
      var resultPagination = await _context.Vehicles.Skip(pn * pq).Take(pq).ToListAsync();
      return new VehiclesList { Length = result.Count, Vehicles = resultPagination };
    }

    public async Task<Vehicle> SearchVehicle(int id)
    {
      return await _context.Vehicles.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<IVehiclesList> FilterVehicles(string filter, int pn, int pq)
    {
      var resultFilter = await _context.Vehicles.Where(
          x => x.Nome.ToLower().Contains(filter)
          || x.Marca.ToLower().Contains(filter)
          || x.Modelo.ToLower().Contains(filter)).ToListAsync();

      var resultFilterPagination = await _context.Vehicles.Where(
          x => x.Nome.ToLower().Contains(filter)
          || x.Marca.ToLower().Contains(filter)
          || x.Modelo.ToLower().Contains(filter)).Skip(pn * pq).Take(pq).ToListAsync();
          
      return new VehiclesList { Length = resultFilter.Count, Vehicles = resultFilterPagination };
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
