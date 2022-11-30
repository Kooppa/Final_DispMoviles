global using exam.Models;
using exam.Services.UserService;
using exam.Services.ItemService;
using exam.Services.CarService;
using Microsoft.Data.Sqlite;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IItemService, ItemService>();
builder.Services.AddScoped<ICarService, CarService>();
//services cors
    builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
    {
        builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
    }));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//app cors
        app.UseCors("corsapp");
        app.UseHttpsRedirection();
        app.UseAuthorization();
        //app.UseCors(prodCorsPolicy);
app.UseHttpsRedirection();

//Cors para pedir que se acepte TODO, las peticiones y request
// app.UseCors(builder => builder
//      .AllowAnyOrigin()
//      .AllowAnyMethod()
//      .AllowAnyHeader()
//      .AllowCredentials());


app.UseAuthorization();

app.MapControllers();

app.UseCors("AllowAll");

app.Run();


