using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using exam.Dtos.Item;

namespace exam.Services.ItemService
{
    public class ItemService : IItemService
    {
        private static List<Item> Items = new List<Item> {
            new Item(),
            new Item{ Id = 1, Name = "Cerveza"}
        };
        private readonly IMapper _mapper;

        public ItemService(IMapper mapper)
        {
            _mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetItemDto>>> AddItem(AddItemDto newItem)
        {
            var serviceResponse = new ServiceResponse<List<GetItemDto>>();
            Item Item = _mapper.Map<Item>(newItem);
            Item.Id = Items.Max(c => c.Id)+1;
            Items.Add(Item);
            // Items.Add(_mapper.Map<Item>(newItem));
            serviceResponse.Data = Items.Select(c => _mapper.Map<GetItemDto>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetItemDto>>> DeleteItem(int id)
        {
            ServiceResponse<List<GetItemDto>> response = new ServiceResponse<List<GetItemDto>>();

            try 
            {
                Item Item = Items.First(c => c.Id == id);

                Items.Remove(Item);
                response.Data = Items.Select(c => _mapper.Map<GetItemDto>(c)).ToList();

        
            } 
            catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<ServiceResponse<List<GetItemDto>>> GetAllItem()
        {
            return new ServiceResponse<List<GetItemDto>> {
                Data = Items.Select(c => _mapper.Map<GetItemDto>(c)).ToList()
                };
        }

        public async Task<ServiceResponse<GetItemDto>> GetItemById(int id)
        {
            var serviceResponse = new ServiceResponse<GetItemDto>();
            var Item = Items.FirstOrDefault(c => c.Id == id);
            serviceResponse.Data = _mapper.Map<GetItemDto>(Item);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetItemDto>> UpdateItem(UpdateItemDto updateItem)
        {
            ServiceResponse<GetItemDto> response = new ServiceResponse<GetItemDto>();

            try {
            Item Item = Items.FirstOrDefault(c => c.Id == updateItem.Id);

            _mapper.Map(updateItem, Item);
            // Item.Name = updateItem.Name;
            // Item.ItemType = updateItem.ItemType;
            // Item.Email = updateItem.Email;
            // Item.Phone = updateItem.Phone;
            // Item.Directory = updateItem.Directory;
            // Item.Class = updateItem.Class;

            response.Data = _mapper.Map<GetItemDto>(Item);
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