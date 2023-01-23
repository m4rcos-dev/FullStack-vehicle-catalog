using backEnd.Model;
using backEnd.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class VehicleController : ControllerBase
  {
    private readonly IVehicleRepository _repository;

    public VehicleController(IVehicleRepository repository)
    {
      _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var vehicles = await _repository.SearchVehicles();
      return vehicles.Any() ? Ok(vehicles) : NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> Post(Vehicle vehicle)
    {
      _repository.CreateVehicle(vehicle);
      return await _repository.SaveChangeAsync() ? Ok("Vehicle addd sucess!") : BadRequest("Error adding vehicle");
    }
  }
}
