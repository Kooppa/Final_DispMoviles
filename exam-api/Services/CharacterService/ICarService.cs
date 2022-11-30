using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using exam.Dtos.Car;

namespace exam.Services.CarService
{
    public interface ICarService
    {   
        Task <ServiceResponse<List<GetCarDto>>> GetAllCar();
        Task<ServiceResponse<GetCarDto>> GetCarById(int id);
        Task<ServiceResponse<List<GetCarDto>>> AddCar(AddCarDto newCar);
        Task<ServiceResponse<GetCarDto>> UpdateCar(UpdateCarDto updateCarDto);
        Task<ServiceResponse<List<GetCarDto>>> DeleteCar(int id);
    }
}