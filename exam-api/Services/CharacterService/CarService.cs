using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using exam.Dtos.Car;

namespace exam.Services.CarService
{
    public class CarService : ICarService
    {
        private static List<Car> Cars = new List<Car> {
            new Car(),
            new Car{ Id = 1, Name = "Carne"}
        };
        private readonly IMapper _mapper;

        public CarService(IMapper mapper)
        {
            _mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetCarDto>>> AddCar(AddCarDto newCar)
        {
            var serviceResponse = new ServiceResponse<List<GetCarDto>>();
            Car Car = _mapper.Map<Car>(newCar);
            Car.Id = Cars.Max(c => c.Id)+1;
            Cars.Add(Car);
            // Cars.Add(_mapper.Map<Car>(newCar));
            serviceResponse.Data = Cars.Select(c => _mapper.Map<GetCarDto>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetCarDto>>> DeleteCar(int id)
        {
            ServiceResponse<List<GetCarDto>> response = new ServiceResponse<List<GetCarDto>>();

            try 
            {
                Car Car = Cars.First(c => c.Id == id);

                Cars.Remove(Car);
                response.Data = Cars.Select(c => _mapper.Map<GetCarDto>(c)).ToList();

        
            } 
            catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<ServiceResponse<List<GetCarDto>>> GetAllCar()
        {
            return new ServiceResponse<List<GetCarDto>> {
                Data = Cars.Select(c => _mapper.Map<GetCarDto>(c)).ToList()
                };
        }

        public async Task<ServiceResponse<GetCarDto>> GetCarById(int id)
        {
            var serviceResponse = new ServiceResponse<GetCarDto>();
            var Car = Cars.FirstOrDefault(c => c.Id == id);
            serviceResponse.Data = _mapper.Map<GetCarDto>(Car);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetCarDto>> UpdateCar(UpdateCarDto updateCar)
        {
            ServiceResponse<GetCarDto> response = new ServiceResponse<GetCarDto>();

            try {
            Car Car = Cars.FirstOrDefault(c => c.Id == updateCar.Id);

            _mapper.Map(updateCar, Car);
            // Car.Name = updateCar.Name;
            // Car.CarType = updateCar.CarType;
            // Car.Email = updateCar.Email;
            // Car.Phone = updateCar.Phone;
            // Car.Directory = updateCar.Directory;
            // Car.Class = updateCar.Class;

            response.Data = _mapper.Map<GetCarDto>(Car);
            } 
            catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }
    }
}