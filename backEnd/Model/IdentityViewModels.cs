using System.ComponentModel.DataAnnotations;

namespace backEnd.Model
{
  public class RegisterUserViewModel
  {
    [Required(ErrorMessage = "The field {0} is required")]
    [EmailAddress(ErrorMessage = "The field {} has invalid value")]
    public string Email { get; set; }

    [Required(ErrorMessage = "The field {0} must be between {2} and {1} characters")]
    [StringLength(100, ErrorMessage = "sfas", MinimumLength = 4)]
    public string Password { get; set; }
  }

  public class LoginUserViewModel
  {
    [Required(ErrorMessage = "The field {0} is required")]
    [EmailAddress(ErrorMessage = "The field {} has invalid value")]
    public string Email { get; set; }

    [Required(ErrorMessage = "The field {0} must be between {2} and {1} characters")]
    [StringLength(100, ErrorMessage = "sfas", MinimumLength = 4)]
    public string Password { get; set; }
  }
}
