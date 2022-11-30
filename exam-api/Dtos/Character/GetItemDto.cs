using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exam.Dtos.Item
{
    public class GetItemDto
    {
        public int Id { get; set;}

        public string Name { get; set; } = "Humberto";

        public int ItemType { get; set;} = 100;

        public int Email { get; set;} = 10;

        public int Phone { get; set;} = 10;

        public int Directory { get; set;} = 10 ;

        public Inventory Class {get; set;} = Inventory.Admin;
    }
}