using backEnd.Interfaces;
using backEnd.Model;
using backEnd.Repository.Interfaces;

namespace backEnd.Services
{
  public class DataServices : IDataServices
  {

    private readonly IDataRepository _repository;

    public DataServices(IDataRepository repository)
    {
      _repository = repository;
    }

    public async Task<List<Vehicle>> SearchVehicles()
    {
      return await _repository.SearchVehicles();
    }

    public async Task<Vehicle> SearchVehicle(int id)
    {
      return await _repository.SearchVehicle(id);
    }

    public async Task<List<Vehicle>> FilterVehicles(string filter)
    {
      return await _repository.FilterVehicles(filter);
    }

    public async Task<Vehicle> CreateVehicle(Vehicle vehicle)
    {
      return await _repository.CreateVehicle(vehicle);
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

      return await _repository.UpdateVehicle(vehicleDb);
    }

    public async Task<bool> DeleteVehicle(int id)
    {
      var vehicleDb = await SearchVehicle(id);
      if (vehicleDb == null) throw new Exception("Vheicle Not Found");

      return await _repository.DeleteVehicle(vehicleDb);
    }

  }
}
