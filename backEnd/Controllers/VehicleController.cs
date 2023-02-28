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
      return Ok(vehicles);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
      var vehicle = await _repository.SearchVehicle(id);
      return Ok(vehicle);
    }


    [ClaimsAuthorize("Vehicle", "Create")]
    [HttpPost]
    public async Task<IActionResult> Post(Vehicle vehicle)
    {
      await _repository.CreateVehicle(vehicle);
      return Ok("Vehicle addd sucess!");
    }

    [ClaimsAuthorize("Vehicle", "Update")]
    [HttpPut("{id}")]

    public async Task<IActionResult> Put(int id, Vehicle vehicle)
    {
      await _repository.UpdateVehicle(vehicle, id);
      return Ok("Vehicle update sucess!");
    }

    [ClaimsAuthorize("Vehicle", "Delete")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      await _repository.DeleteVehicle(id);
      return Ok("Vehicle deleting sucess!");
    }
  }
}
