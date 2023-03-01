using backEnd.Interfaces;
using backEnd.Model;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
  // [Authorize]
  [ApiController]
  [Route("[controller]")]

  public class VehicleController : ControllerBase
  {
    private readonly IDataServices _services;

    public VehicleController(IDataServices repository)
    {
      _services = repository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var vehicles = await _services.SearchVehicles();
      return Ok(vehicles);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
      var vehicle = await _services.SearchVehicle(id);
      return Ok(vehicle);
    }


    [ClaimsAuthorize("Vehicle", "Create")]
    [HttpPost]
    public async Task<IActionResult> Post(Vehicle vehicle)
    {
      await _services.CreateVehicle(vehicle);
      return Ok("Vehicle addd sucess!");
    }

    [ClaimsAuthorize("Vehicle", "Update")]
    [HttpPut("{id}")]

    public async Task<IActionResult> Put(int id, Vehicle vehicle)
    {
      await _services.UpdateVehicle(vehicle, id);
      return Ok("Vehicle update sucess!");
    }

    [ClaimsAuthorize("Vehicle", "Delete")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      await _services.DeleteVehicle(id);
      return Ok("Vehicle deleting sucess!");
    }
  }
}
