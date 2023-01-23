using backEnd.Model;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Data
{
  public class VehicleContext : DbContext
  {
    public VehicleContext(DbContextOptions<VehicleContext> options) : base(options)
    {
    }

    public DbSet<Vehicle> Vehicles { get; set; }

    // protected override void OnModelCreating(ModelBuilder builder)
    // {
    //   builder.Entity<Vehicle>()
    //       .HasData(new List<Vehicle>(){
    //   new Vehicle(1, "Argo", "Fiat", "FIREFLY DRIVE", 54299, "img-argo"),
    //   new Vehicle(2, "Jetta", "Volkswagen", "CONFORTLINE", 61899, "img-jetta"),
    //   new Vehicle(3, "Kicks", "Nissan", "START SL", 103899, "img-kicks"),
    //   new Vehicle(4, "Captur", "Reanult", "BOSE", 101799, "img-captur"),
    //   new Vehicle(5, "Creta", "Hyundai", "ATTITUDE", 89399, "img-creta"),
    //   });
    // }
  }
}
