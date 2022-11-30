using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exam.Models
{
    public class Car
    {
        public int Id { get; set;}

        public string Name { get; set; } = "Chuleta";

        public int CarType { get; set;} = 1;

        public int Email { get; set;} = 123;

        public int Phone { get; set;} = 442852147;

        public int Directory { get; set;} = 50;

        public Inventory Class {get; set;} = Inventory.Item;
    }
}