using backEnd.Model;
using backEnd.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
  // [Authorize]
  [ApiController]
  [Route("[controller]")]

  public class VehicleController : ControllerBase
  {
    private readonly IDataRepository _repository;

    public VehicleController(IDataRepository repository)
    {
      _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var vehicles = await _repository.SearchVehicles();
      return vehicles.Any() ? Ok(vehicles) : NoContent();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
      var vehicle = await _repository.SearchVehicle(id);
      return vehicle != null ? Ok(vehicle) : NotFound("Vheicle Not Found");
    }


    [ClaimsAuthorize("Vehicle", "Create")]
    [HttpPost]
    public async Task<IActionResult> Post(Vehicle vehicle)
    {
      _repository.CreateVehicle(vehicle);
      return await _repository.SaveChangeAsync() ? Ok("Vehicle addd sucess!") : BadRequest("Error adding vehicle");
    }

    [ClaimsAuthorize("Vehicle", "Update")]
    [HttpPut("{id}")]

    public async Task<IActionResult> Put(int id, Vehicle vehicle)
    {
      var vehiclesDB = await _repository.SearchVehicle(id);
      if (vehiclesDB == null) return NotFound("Vheicle Not Found");

      vehiclesDB.Nome = vehicle.Nome ?? vehiclesDB.Nome;
      vehiclesDB.Marca = vehicle.Marca ?? vehiclesDB.Marca;
      vehiclesDB.Modelo = vehicle.Modelo ?? vehiclesDB.Modelo;
      vehiclesDB.Valor = vehicle.Valor != vehiclesDB.Valor ? vehicle.Valor : vehiclesDB.Valor;
      vehiclesDB.Foto = vehicle.Foto ?? vehiclesDB.Foto;

      _repository.UpdateVehicle(vehiclesDB);

      return await _repository.SaveChangeAsync() ? Ok("Vehicle update sucess!") : BadRequest("Error update vehicle");
    }

    [ClaimsAuthorize("Vehicle", "Delete")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      var vehiclesDB = await _repository.SearchVehicle(id);
      if (vehiclesDB == null) return NotFound("Vheicle Not Found");

      _repository.DeleteVehicle(vehiclesDB);

      return await _repository.SaveChangeAsync() ? Ok("Vehicle deleting sucess!") : BadRequest("Error deleting vehicle");
    }
  }
}
