using Microsoft.EntityFrameworkCore;
using OrderApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<OrdersContext>(options =>
options.UseMySql(builder.Configuration.GetConnectionString("DbConnect"), new MySqlServerVersion(new Version(8, 0, 35))));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(x => {
	x.WithHeaders().AllowAnyHeader();
	x.WithOrigins("http://localhost:3000");
	x.WithMethods().AllowAnyMethod();
});

app.Run();
