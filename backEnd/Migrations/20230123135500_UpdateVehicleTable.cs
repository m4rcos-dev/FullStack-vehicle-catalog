using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backEnd.Migrations
{
    public partial class UpdateVehicleTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "Id", "Foto", "Marca", "Modelo", "Nome", "Valor" },
                values: new object[,]
                {
                    { 1, "https://images.kavak.services/images/210324/EXTERIOR-frontSidePilotNear-1668775519613.jpeg?d=540x310", "Fiat", "FIREFLY DRIVE", "Argo", 54299 },
                    { 2, "https://images.kavak.services/images/130560/EXTERIOR-frontSidePilotNear-16368287673581.jpg?d=540x310", "Volkswagen", "CONFORTLINE", "Jetta", 61899 },
                    { 3, "https://images.kavak.services/images/230080/EXTERIOR-frontSidePilotNear-1673296643848.jpeg?d=540x310", "Nissan", "START SL", "Kicks", 103899 },
                    { 4, "https://images.kavak.services/images/229537/EXTERIOR-frontSidePilotNear-1672940491302.jpeg?d=540x310", "Reanult", "BOSE", "Captur", 101799 },
                    { 5, "https://images.kavak.services/images/227910/EXTERIOR-frontSidePilotNear-1672773788002.jpeg?d=540x310", "Hyundai", "ATTITUDE", "Creta", 89399 },
                    { 6, "https://images.kavak.services/images/222290/EXTERIOR-frontSidePilotNear-1669302398885.jpeg?d=540x310", "Nissan", "SV START", "Sentra", 88499 },
                    { 7, "https://images.kavak.services/images/217501/EXTERIOR-frontSidePilotNear-1670287752538.jpeg?d=540x310", "Volkswagen", "TSI HIGHLINE", "Polo", 86599 },
                    { 8, "https://images.kavak.services/images/202525/EXTERIOR-frontSidePilotNear-1664398382774.jpeg?d=540x310", "Kia", "EX", "Picanto", 44299 },
                    { 9, "https://images.kavak.services/images/185593/EXTERIOR-frontSidePilotNear-1652981076301.jpeg?d=540x310", "Honda", "EX", "City", 64499 },
                    { 10, "https://images.kavak.services/images/181804/EXTERIOR-frontSidePilotNear-1649480858244.jpeg?d=540x310", "Ford", "SE PLUS SEDAN", "Focus", 60399 },
                    { 11, "https://images.kavak.services/images/181368/EXTERIOR-frontSidePilotNear-1652646901335.jpeg?d=540x310", "Chevrolet", "LT", "Sonic", 40799 },
                    { 12, "https://images.kavak.services/images/157678/EXTERIOR-frontSidePilotNear-1643099969436.jpeg?d=540x310", "Toyota", "XEI", "Corolla", 80299 },
                    { 13, "https://images.kavak.services/images/123225/duster-renault-dynamique-2016-exterior-frontsidepilotnear-16345586052689.jpg?d=540x310", "Rnault", "DYNAMIQUE", "Duster", 56699 },
                    { 14, "https://images.kavak.services/images/115521/EXTERIOR-frontSidePilotNear-16337327260090.jpg?d=540x310", "Rnault", "SCE EXPRESSION", "Duster", 73199 },
                    { 15, "https://images.kavak.services/images/107525/creta-hyundai-attitude-2017-exterior-frontsidepilotnear-16267947141895.jpg?d=540x310", "Hyundai", "ATTITUDE", "Creta", 80999 },
                    { 16, "https://images.kavak.services/images/226275/EXTERIOR-frontSidePilotNear-1672860729334.jpeg?d=540x310", "Jeep", "LIMITED", "Renegate", 117199 },
                    { 17, "https://images.kavak.services/images/209338/EXTERIOR-frontSidePilotNear-1667506367535.jpeg?d=540x310", "Fiat", "E.TORQ PRECISION", "Cronos", 72399 },
                    { 18, "https://images.kavak.services/images/217952/EXTERIOR-frontSidePilotNear-1669059504713.jpeg?d=540x310", "Toyota", "SEDAN XLS MULTIDRIVE", "Yaris", 88099 },
                    { 19, "https://images.kavak.services/images/209619/EXTERIOR-frontSidePilotNear-1668204832666.jpeg?d=540x310", "Fiat", "CABRIO", "500", 70799 },
                    { 20, "https://images.kavak.services/images/169847/EXTERIOR-frontSidePilotNear-1665780946432.jpeg?d=540x310", "Volvo", "T4 FWD", "S60", 55699 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: 20);
        }
    }
}
