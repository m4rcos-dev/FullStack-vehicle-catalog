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
  }
}
