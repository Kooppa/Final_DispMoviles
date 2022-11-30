using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using exam.Dtos.Car;
using exam.Services.CarService;

namespace exam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarController : ControllerBase
    {
        // private static List<Car> Cars = new List<Car> {
        //     new Car(),
        //     new Car{ Id = 1, Name = "Gabriel"}
        // };
        private readonly ICarService _CarService;

        public CarController(ICarService CarService)
        {
            _CarService = CarService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetCarDto>>>> Get()
        {
            return Ok(await _CarService.GetAllCar());
        }

        [HttpGet("GetCarById")]
        public async Task<ActionResult<ServiceResponse<GetCarDto>>> GetSingle(int id)
        {
            return Ok(await _CarService.GetCarById(id));
        }

        [HttpDelete("DeleteCarById")]
        public async Task<ActionResult<ServiceResponse<List<GetCarDto>>>> Delete(int id)
        {
            var response = await _CarService.DeleteCar(id);
            if(response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpPost("PostCar")]
        public async Task<ActionResult<ServiceResponse<List<GetCarDto>>>> AddCar(AddCarDto newCar)
        {
            return Ok(await _CarService.AddCar(newCar));
        }

        [HttpPut("PutCar")]
        public async Task<ActionResult<ServiceResponse<GetCarDto>>> UpdateCar(UpdateCarDto updateCar)
        {
            var response = await _CarService.UpdateCar(updateCar);
            if(response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}