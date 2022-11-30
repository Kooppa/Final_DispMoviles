using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using exam.Dtos.Item;

namespace exam.Services.ItemService
{
    public interface IItemService
    {   
        Task <ServiceResponse<List<GetItemDto>>> GetAllItem();
        Task<ServiceResponse<GetItemDto>> GetItemById(int id);
        Task<ServiceResponse<List<GetItemDto>>> AddItem(AddItemDto newItem);
        Task<ServiceResponse<GetItemDto>> UpdateItem(UpdateItemDto updateItemDto);
        Task<ServiceResponse<List<GetItemDto>>> DeleteItem(int id);
    }
}