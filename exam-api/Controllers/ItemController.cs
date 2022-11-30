using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using exam.Dtos.Item;
using exam.Services.ItemService;

namespace exam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : ControllerBase
    {
        // private static List<Item> Items = new List<Item> {
        //     new Item(),
        //     new Item{ Id = 1, Name = "Gabriel"}
        // };
        private readonly IItemService _ItemService;

        public ItemController(IItemService ItemService)
        {
            _ItemService = ItemService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetItemDto>>>> Get()
        {
            return Ok(await _ItemService.GetAllItem());
        }

        [HttpGet("GetItemById")]
        public async Task<ActionResult<ServiceResponse<GetItemDto>>> GetSingle(int id)
        {
            return Ok(await _ItemService.GetItemById(id));
        }

        [HttpDelete("DeleteItemById")]
        public async Task<ActionResult<ServiceResponse<List<GetItemDto>>>> Delete(int id)
        {
            var response = await _ItemService.DeleteItem(id);
            if(response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpPost("PostItem")]
        public async Task<ActionResult<ServiceResponse<List<GetItemDto>>>> AddItem(AddItemDto newItem)
        {
            return Ok(await _ItemService.AddItem(newItem));
        }

        [HttpPut("PutItem")]
        public async Task<ActionResult<ServiceResponse<GetItemDto>>> UpdateItem(UpdateItemDto updateItem)
        {
            var response = await _ItemService.UpdateItem(updateItem);
            if(response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}