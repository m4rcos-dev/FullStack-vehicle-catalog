using System.Text;
using backEnd;
using backEnd.Data;
using backEnd.Interfaces;
using backEnd.Repository;
using backEnd.Repository.Interfaces;
using backEnd.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

string server = Environment.GetEnvironmentVariable("MYSQL_HOST") ?? "localhost";
string portDbStr = Environment.GetEnvironmentVariable("PORT_DB") ?? "3306";
int portDb = int.Parse(portDbStr);
string database = Environment.GetEnvironmentVariable("MYSQL_DATABASE") ?? "vehicleCatalog";
string username = Environment.GetEnvironmentVariable("MYSQL_USER") ?? "root";
string password = Environment.GetEnvironmentVariable("MYSQL_PASSWORD") ?? "password";
string host = Environment.GetEnvironmentVariable("HOST") ?? "localhost";
string urlProtocol = Environment.GetEnvironmentVariable("URL_PROTOCOL") ?? "http";
var portStr = Environment.GetEnvironmentVariable("PORT") ?? "5099";
int port = int.Parse(portStr);
var applicationUrl = $"{urlProtocol}://{host}:{port}";

// Add services to the container.
builder.WebHost.UseUrls(applicationUrl);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(options =>
{
  // string connectionString = builder.Configuration.GetConnectionString("Default");
  string connectionString = $"Server={server};Port={portDb};Database={database};Uid={username};Pwd={password};";
  options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

var serviceProvider = builder.Services.BuildServiceProvider();
using (var scope = serviceProvider.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetService<DataContext>();
    dbContext.Database.Migrate();
}

builder.Services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<DataContext>().AddDefaultTokenProviders();

// JWT
var appSettingsSection = builder.Configuration.GetSection("AppSettings");
builder.Services.Configure<AppSettings>(appSettingsSection);

var appSettings = appSettingsSection.Get<AppSettings>();
var key = Encoding.ASCII.GetBytes(appSettings.Secret);

builder.Services.AddAuthentication(x =>
{
  x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
  x.RequireHttpsMetadata = true;
  x.SaveToken = true;
  x.TokenValidationParameters = new TokenValidationParameters
  {
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(key),
    ValidateIssuer = true,
    ValidateAudience = true,
    ValidAudience = appSettings.Valid,
    ValidIssuer = appSettings.Emissor
  };
});

builder.Services.AddScoped<IDataRepository, DataRepository>();
builder.Services.AddScoped<IDataServices, DataServices>();

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/error-development");
  app.UseSwagger();
  app.UseSwaggerUI();
}
else
{
  app.UseExceptionHandler("/error");
}

// app.UseHttpsRedirection();

app.UseCors(c =>
{
  c.AllowAnyHeader();
  c.AllowAnyMethod();
  c.AllowAnyOrigin();
});

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
