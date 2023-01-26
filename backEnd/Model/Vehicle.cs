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

    public string Nome { get; set; }

    public string Marca { get; set; }

    public string Modelo { get; set; }

    public int Valor { get; set; }

    public string Foto { get; set; }
  }
}
