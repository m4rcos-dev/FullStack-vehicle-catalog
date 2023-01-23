using backEnd.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{

  [ApiController]
  [Route("[controller]")]

  public class AuthController : ControllerBase
  {
    private readonly SignInManager<IdentityUser> _singnInManager;
    private readonly UserManager<IdentityUser> _userManager;

    public AuthController(SignInManager<IdentityUser> signInManager,
                            UserManager<IdentityUser> userManager)
    {
      _singnInManager = signInManager;
      _userManager = userManager;
    }

    [HttpPost("new-cont")]

    public async Task<ActionResult> Register(RegisterUserViewModel registerUser)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState.Values.SelectMany(e => e.Errors));

      var user = new IdentityUser
      {
        UserName = registerUser.Email,
        Email = registerUser.Email,
        EmailConfirmed = true
      };

      var result = await _userManager.CreateAsync(user, registerUser.Password);

      if (!result.Succeeded) return BadRequest(result.Errors);

      await _singnInManager.SignInAsync(user, false);

      return Ok();
    }

    [HttpPost("login")]

    public async Task<IActionResult> Login(LoginUserViewModel loginUser)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState.Values.SelectMany(e => e.Errors));

        var result = await _singnInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

        if (result.Succeeded)
        {
            return Ok("Login Sucess");
        }

        return BadRequest("User or password invalid");
    }
  }
}
