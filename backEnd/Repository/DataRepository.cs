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

    public async Task<Vehicle> UpdateVehicle(Vehicle vehicle, int id)
    {
      var vehicleDb = await SearchVehicle(id);

      if (vehicleDb == null) throw new Exception("Vheicle Not Found");

      vehicleDb.Nome = vehicle.Nome ?? vehicleDb.Nome;
      vehicleDb.Marca = vehicle.Marca ?? vehicleDb.Marca;
      vehicleDb.Modelo = vehicle.Modelo ?? vehicleDb.Modelo;
      vehicleDb.Valor = vehicle.Valor != vehicleDb.Valor ? vehicle.Valor : vehicleDb.Valor;
      vehicleDb.Foto = vehicle.Foto ?? vehicleDb.Foto;

      _context.Vehicles.Update(vehicleDb);
      await _context.SaveChangesAsync();

      return vehicleDb;
    }

    public async Task<bool> DeleteVehicle(int id)
    {
      var vehicleDb = await SearchVehicle(id);
      if (vehicleDb == null) throw new Exception("Vheicle Not Found");

      _context.Vehicles.Remove(vehicleDb);
      await _context.SaveChangesAsync();

      return true;
    }
  }
}
