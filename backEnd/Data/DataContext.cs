using backEnd.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Data
{
  public class DataContext : IdentityDbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }
    public DbSet<Vehicle> Vehicles { get; set; }

    protected override async void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      builder.Entity<Vehicle>()
          .HasData(new List<Vehicle>(){
      new Vehicle(1, "Argo", "Fiat", "FIREFLY DRIVE", 54299, "https://images.kavak.services/images/210324/EXTERIOR-frontSidePilotNear-1668775519613.jpeg?d=540x310"),
      new Vehicle(2, "Jetta", "Volkswagen", "CONFORTLINE", 61899, "https://images.kavak.services/images/130560/EXTERIOR-frontSidePilotNear-16368287673581.jpg?d=540x310"),
      new Vehicle(3, "Kicks", "Nissan", "START SL", 103899, "https://images.kavak.services/images/230080/EXTERIOR-frontSidePilotNear-1673296643848.jpeg?d=540x310"),
      new Vehicle(4, "Captur", "Reanult", "BOSE", 101799, "https://images.kavak.services/images/229537/EXTERIOR-frontSidePilotNear-1672940491302.jpeg?d=540x310"),
      new Vehicle(5, "Creta", "Hyundai", "ATTITUDE", 89399, "https://images.kavak.services/images/227910/EXTERIOR-frontSidePilotNear-1672773788002.jpeg?d=540x310"),
      new Vehicle(6, "Sentra", "Nissan", "SV START", 88499, "https://images.kavak.services/images/222290/EXTERIOR-frontSidePilotNear-1669302398885.jpeg?d=540x310"),
      new Vehicle(7, "Polo", "Volkswagen", "TSI HIGHLINE", 86599, "https://images.kavak.services/images/217501/EXTERIOR-frontSidePilotNear-1670287752538.jpeg?d=540x310"),
      new Vehicle(8, "Picanto", "Kia", "EX", 44299, "https://images.kavak.services/images/202525/EXTERIOR-frontSidePilotNear-1664398382774.jpeg?d=540x310"),
      new Vehicle(9, "City", "Honda", "EX", 64499, "https://images.kavak.services/images/185593/EXTERIOR-frontSidePilotNear-1652981076301.jpeg?d=540x310"),
      new Vehicle(10, "Focus", "Ford", "SE PLUS SEDAN", 60399, "https://images.kavak.services/images/181804/EXTERIOR-frontSidePilotNear-1649480858244.jpeg?d=540x310"),
      new Vehicle(11, "Sonic", "Chevrolet", "LT", 40799, "https://images.kavak.services/images/181368/EXTERIOR-frontSidePilotNear-1652646901335.jpeg?d=540x310"),
      new Vehicle(12, "Corolla", "Toyota", "XEI", 80299, "https://images.kavak.services/images/157678/EXTERIOR-frontSidePilotNear-1643099969436.jpeg?d=540x310"),
      new Vehicle(13, "Duster", "Rnault", "DYNAMIQUE", 56699, "https://images.kavak.services/images/123225/duster-renault-dynamique-2016-exterior-frontsidepilotnear-16345586052689.jpg?d=540x310"),
      new Vehicle(14, "Duster", "Rnault", "SCE EXPRESSION", 73199, "https://images.kavak.services/images/115521/EXTERIOR-frontSidePilotNear-16337327260090.jpg?d=540x310"),
      new Vehicle(15, "Creta", "Hyundai", "ATTITUDE", 80999, "https://images.kavak.services/images/107525/creta-hyundai-attitude-2017-exterior-frontsidepilotnear-16267947141895.jpg?d=540x310"),
      new Vehicle(16, "Renegate", "Jeep", "LIMITED", 117199, "https://images.kavak.services/images/226275/EXTERIOR-frontSidePilotNear-1672860729334.jpeg?d=540x310"),
      new Vehicle(17, "Cronos", "Fiat", "E.TORQ PRECISION", 72399, "https://images.kavak.services/images/209338/EXTERIOR-frontSidePilotNear-1667506367535.jpeg?d=540x310"),
      new Vehicle(18, "Yaris", "Toyota", "SEDAN XLS MULTIDRIVE", 88099, "https://images.kavak.services/images/217952/EXTERIOR-frontSidePilotNear-1669059504713.jpeg?d=540x310"),
      new Vehicle(19, "500", "Fiat", "CABRIO", 70799, "https://images.kavak.services/images/209619/EXTERIOR-frontSidePilotNear-1668204832666.jpeg?d=540x310"),
      new Vehicle(20, "S60", "Volvo", "T4 FWD", 55699, "https://images.kavak.services/images/169847/EXTERIOR-frontSidePilotNear-1665780946432.jpeg?d=540x310"),
      });
    }
  }
}
