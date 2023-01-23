using backEnd.Model;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class VehicleController : ControllerBase
  {
    private static List<Vehicle> Vehicles()
    {
      return new List<Vehicle>{
        new Vehicle{ Id = 1, Nome = "Jetta", Marca = "Fiat", Modelo = "SPORT", Valor = 59300, Foto = "Foto Jetta"}
      };
    }

    [HttpGet]
    public IActionResult Get()
    {
      return Ok(Vehicles());
    }

    [HttpPost]
    public IActionResult Post(Vehicle vehicle)
    {
      var vehicles = Vehicles();
      vehicles.Add(vehicle);
      return Ok(vehicle);
    }
  }
}
