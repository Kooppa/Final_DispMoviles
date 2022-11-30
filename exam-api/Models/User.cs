using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exam.Models
{
    public class User
    {
        public int Id { get; set;}

        public string Name { get; set; } = "Humberto";

        public int UserType { get; set;} = 1;

        public string Email { get; set;} = "correo@gmail";

        public int Phone { get; set;} = 442852147;

        public int Age { get; set;} = 21;

        public Inventory Class {get; set;} = Inventory.Admin;
    }
}