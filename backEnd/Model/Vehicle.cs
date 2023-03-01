using System.ComponentModel.DataAnnotations;

namespace backEnd.Model
{
  public class Vehicle
  {
    public Vehicle() { }
    public Vehicle(int id, string nome, string marca, string modelo, int valor, string foto)
    {
      this.Id = id;
      this.Nome = nome;
      this.Marca = marca;
      this.Modelo = modelo;
      this.Valor = valor;
      this.Foto = foto;
    }
    public int Id { get; set; }

    [Required(ErrorMessage = "The field {0} is required")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "The field {0} is required")]
    public string Marca { get; set; }

    [Required(ErrorMessage = "The field {0} is required")]
    public string Modelo { get; set; }

    [Required(ErrorMessage = "The field {0} is required")]
    public int Valor { get; set; }

    [Required(ErrorMessage = "The field {0} is required")]
    public string Foto { get; set; }
  }
}
