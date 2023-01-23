using backEnd.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class UserController : ControllerBase
  {
    private readonly IDataRepository _repository;

    public UserController(IDataRepository repository)
    {
      _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var users = await _repository.SearchUsers();
      return users.Any() ? Ok(users) : NoContent();
    }
  }
}
