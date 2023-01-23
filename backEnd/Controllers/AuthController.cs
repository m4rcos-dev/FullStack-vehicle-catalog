using System.IdentityModel.Tokens.Jwt;
using System.Text;
using backEnd.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace backEnd.Controllers
{

  [ApiController]
  [Route("[controller]")]

  public class AuthController : ControllerBase
  {
    private readonly SignInManager<IdentityUser> _singnInManager;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly AppSettings _appSettings;

    public AuthController(SignInManager<IdentityUser> signInManager,
                            UserManager<IdentityUser> userManager,
                            IOptions<AppSettings> appSettings)
    {
      _singnInManager = signInManager;
      _userManager = userManager;
      _appSettings = appSettings.Value;
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

      return Ok(await GenerateJWT(registerUser.Email));
    }

    [HttpPost("login")]

    public async Task<IActionResult> Login(LoginUserViewModel loginUser)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState.Values.SelectMany(e => e.Errors));

      var result = await _singnInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

      if (result.Succeeded)
      {
        return Ok(await GenerateJWT(loginUser.Email));
      }

      return BadRequest("User or password invalid");
    }

    private async Task<string> GenerateJWT(string email)
    {
      var user = await _userManager.FindByEmailAsync(email);

      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Issuer = _appSettings.Emissor,
        Audience = _appSettings.Valid,
        Expires = DateTime.UtcNow.AddHours(_appSettings.ExpirationHours),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
              SecurityAlgorithms.HmacSha256Signature)
      };

      return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
    }
  }
}
